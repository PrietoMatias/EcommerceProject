import {Suppliers} from '../services/models/modelSuppliers'
import { Request, Response } from 'express'


const getSuppliers = async (_req:Request, res:Response):Promise<void> =>{
    try {
        const getSuppliers = await Suppliers.find()
        if(!getSuppliers){
            res.status(404).json({message: 'Proveedores no disponibles'})
            return
        }
        res.status(200).json(getSuppliers)
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

const searchSupplier = async(req:Request, res:Response):Promise<void>=>{
    const {name} = req.body
    try {
        const findByName = await Suppliers.findOne({name: name})
        if(!findByName){
            res.status(404).json({message:'Proveedor no encontrado'})
            return
        }
        res.status(200).json(findByName)
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

const createSupplier = async(req:Request, res:Response):Promise<void>=>{
    const {name, contacts, products} = req.body
    if(!name || !contacts || !products){
        res.status(400).json({message:'Todos los campos son requeridos'})
        return
    }    
    try {
     const addSupplier = new Suppliers({
        name, 
        contacts,
        products
     })
     await addSupplier.save()  
     res.status(201).json({message:'Proveedor creado con éxito', addSupplier}) 
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

const updateSupplier = async (req:Request, res:Response):Promise<void>=>{
    const {name, contacts, products} = req.body
    try {
        const updateData = {contacts, products}
        const updateSupplier = await Suppliers.findOneAndUpdate(
            {name: name}, 
            {$set: updateData}, 
            {new: true, runValidators: true})
        if(!updateSupplier){
            res.status(400).json({message:'Error al modificar el registro'})
            return
        }
        res.status(200).json({message:'Proveedor modificado con éxito', updateSupplier})
    } catch (error) {
        res.status(500).json({message:'Error interno del servidor', error})
    }
}

const deleteSupplier = async (req:Request, res:Response):Promise<void>=>{
    const id = req.params.id
    try {
        const deleteSupplier = await Suppliers
    } catch (error) {
        
    }
}
