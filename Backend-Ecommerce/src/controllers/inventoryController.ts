import {Inventory} from '../services/models/modelInventory'
import { Request, Response } from 'express'

const getInventory = async (req:Request, res:Response):Promise<void>=>{
    try{
        const getInventory = await Inventory.find()
        if(!getInventory){
            res.status(404).json({message: 'Inventario no disponible'})
            return
        }
        res.status(200).json(getInventory)
    }catch(error){
        res.status(500).json({message: 'Error interno del servidor', error})
    }
}

const getOneInventory = async (req:Request, res:Response):Promise<void>=>{
    const idProduct = req.params.id
    try {
        const getInventory = await Inventory.findById(idProduct)
        if(!getInventory){
            res.status(404).json({message: 'Inventario no encontrado o no disponible'})
            return
        } 
        res.status(200).json(getInventory)
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error})
    }
}

const createInventory = async (req:Request, res:Response):Promise<void>=>{
    const {product_id, variants} = req.body    
    try {
        const addInventory = new Inventory({
            product_id,
            variants,
            lastupdate: new Date()
        })
        await addInventory.save()

        if(!addInventory){
            res.status(400).json({message: 'Error al crear el inventario'})
            return
        }
        res.status(201).json({message:'Inventario creado con éxito', addInventory})

    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

const updateInventory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { variants } = req.body;

        const inventory = await Inventory.findByIdAndUpdate(id, { variants, lastupdate: new Date() }, { new: true });

        if (!inventory) {
            res.status(404).json({ message: 'Inventario no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Inventario actualizado exitosamente', inventory });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar inventario', error });
    }
};
const deleteInventory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const inventory = await Inventory.findByIdAndDelete(id);

        if (!inventory) {
            res.status(404).json({ message: 'Inventario no encontrado' });
            return;
        }

        res.status(200).json({ message: 'Inventario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar inventario', error });
    }
};

export default {
    getInventory,
    getOneInventory,
    createInventory,
    deleteInventory,
    updateInventory
}