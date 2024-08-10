import { Request, Response } from 'express';
import { Order } from '../services/models/modelOrder';
import { Cart } from '../services/models/modelCart';

const getAllOrders = async (_req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

const getUserOrder = async (_req: Request, res: Response): Promise<void> => {
    const idUser = res.locals.user.id;
    try {
        const orderUser = await Order.find({ user_id: idUser });
        if (!orderUser || orderUser.length === 0) {
            res.status(404).json({ message: 'Órdenes no encontradas' });
            return;
        }
        res.status(200).json(orderUser);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

const cancelOrder = async (req: Request, res: Response): Promise<void> => {
    const {idOrder} = req.body
    try {
        const order = await Order.findByIdAndUpdate(
            {_id: idOrder},
            { status: 'Cancelado' },
            { new: true }
        );
        if (!order) {
            res.status(404).json({ message: 'Orden no encontrada' });
            return;
        }
        res.status(200).json({ message: 'La orden fue cancelada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

const makeOrder = async (_req: Request, res: Response): Promise<void> => {
    const idUser = res.locals.user.id;
  
    try {
        const cart = await Cart.findOne({ user_id: idUser }).exec();
      
      if (!cart) {
        res.status(404).json({ message: 'Carrito no encontrado' });
        return;
      }
      const products = cart.products;
      const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  
      const order = new Order({
        user_id: idUser,
        products: products, 
        total
      });
  
      await order.save();
      await Cart.updateOne({ user_id: idUser }, { $set: { products: [] } });
  
      res.status(201).json({ message: 'Orden añadida con éxito', order });
    } catch (error) {
      res.status(500).json({ message: 'Error interno del servidor', error });
    }
  };


export default {
    getAllOrders,
    getUserOrder,
    cancelOrder,
    makeOrder
};
