import { Cart } from "../services/models/modelCart";
import { Request, Response } from 'express';
import { Products } from "../services/models/modelProducts"

const addCart = async (req: Request, res: Response): Promise<void> => {
    const idUser = res.locals.user.id;
    const { idProduct, quantity, colors } = req.body;
    const quantityNumber = parseInt(quantity, 10);

    try {
        
        const product = await Products.findById(idProduct);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        if (product.stock < quantityNumber) {
            res.status(400).json({ message: 'Stock insuficiente' });
            return;
        }
        let cart = await Cart.findOne({ user_id: idUser });
        if (cart) {
            const existingProductIndex = cart.products.findIndex(p => p.product_id.toString() === idProduct);
            if (existingProductIndex >= 0) {
 
                cart.products[existingProductIndex].quantity += quantityNumber;
            } else {

                cart.products.push({
                    product_id: idProduct,
                    quantity: quantityNumber,
                    colors: colors || [], 
                    price: product.price
                });
            }
        } else {

            cart = new Cart({
                user_id: idUser,
                products: [{
                    product_id: idProduct,
                    quantity: quantityNumber,
                    colors: colors || [], // Asegúrate de manejar el caso en que `colors` puede ser `undefined`
                    price: product.price
                }]
            });
        }

        // Guarda el carrito en la base de datos
        const result = await cart.save();
        res.status(200).json({ message: 'Producto agregado al carrito', result });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

const getCartUser = async (_req: Request, res: Response): Promise<void> => {
    const user = res.locals.user;
    const id = user.id;
    try {
        const cart = await Cart.findOne({ user_id: id, isDeleted: false })
            .populate({
                path: 'products.product_id',
                select: 'name description colors'
            })
            .lean();

        if (!cart) {
            res.status(404).json({ message: 'Carrito no encontrado' });
            return;
        }


        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};


const deleteCart = async(req:Request, res:Response):Promise<void>=>{
    const idUser = req.params.id
    try {
        const deleteCart = await Cart.findOneAndUpdate(
            {user_id:idUser},
            {isDeleted:true, 
             deleteAt: Date.now()
            },
            {new: true}
        )
        if(!deleteCart){
            res.status(400).json({message:'No se pudo vaciar el carrito'})
            return
        }
        res.status(200).json({message:'Carrito vaciado con éxito', deleteCart})
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

export default { addCart, getCartUser, deleteCart };
