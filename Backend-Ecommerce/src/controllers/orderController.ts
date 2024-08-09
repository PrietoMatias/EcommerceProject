import { Request, Response } from 'express';
import { Order } from '../services/models/modelOrder';

const getAllOrders = async (_req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find({isDeleted: false});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor', error });
    }
};

const getUserOrder = async (req: Request, res: Response): Promise<void> => {
    const idUser = req.params.id;
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
    const idOrder = req.params.id;
    try {
        const order = await Order.findByIdAndUpdate(
            idOrder,
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

const makeOrder = async (req: Request, res: Response): Promise<void> => {
    const { idUser, products, total } = req.body;
    if (!idUser || !products || !total) {
        res.status(400).json({ message: 'Todos los campos deben ser completados' });
        return;
    }
    const order = new Order({ user_id: idUser, products, total, status: 'Pendiente' });
    try {
        const addOrder = await order.save();
        res.status(201).json({ message: 'Orden añadida con éxito', order: addOrder });
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
