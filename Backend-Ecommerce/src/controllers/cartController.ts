import { Cart } from "../services/models/modelCart";
import {Request, Response} from 'express'
import { Products } from "../services/models/modelProducts";

const addCart = async (req:Request, res:Response):Promise<void>=>{
    const {idProduct, idUser, quantity} = req.body
    
    const StockComprobacion:null | any = await Products.findById(idProduct)
    if(StockComprobacion.stock === 0) 
        {res.status(400).json('Stock insuficiente')
        return}
    const cart = new Cart({
        user_id: idUser,
        products: [idProduct, quantity]
    })
    try {
        const result = cart.save()
        res.status(200).json({message: 'Producto agregado al carrito', result})
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error})
    }
}


export default {addCart}