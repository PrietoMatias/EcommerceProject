import { Request, Response } from "express";
import { Products } from "../services/models/modelProducts";

const getAllProducts = async (_req:Request, res:Response):Promise<void>=>{
    try {
        const products = await Products.find()
        if(!products){
            res.status(200).json({message: 'Sin productos registrados en el inventario'})
            return
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error})       
    }
}

const getByID = async (req:Request, res:Response):Promise<void>=>{
    const id = req.params.id
    try {
        const idproducts = await Products.findById({_id: id})
        if(!idproducts){
            res.status(404).json({message: 'Producto no encontrado'})
            return
        }
        res.status(200).json(idproducts)
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const deleteById = async (req:Request, res:Response):Promise<void>=>{
    const id = req.params.id
    try {
        const deleteId = await Products.findByIdAndDelete({_id: id})
        if(!deleteId){
            res.status(404).json({message:'Producto no encontrado'})
            return
        }
        res.status(201).json({message: 'Producto eliminado con éxito'})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const updateByID = async (req:Request, res:Response):Promise<void>=>{
    const newProduct = req.body
    try {
        const UpdateId = await Products.findByIdAndUpdate(newProduct.id, newProduct)
        res.status(201).json({message: 'Producto modificado con éxito'})
    } catch (error) {
        res.status(500).json({message: error})
    }
}
const getByName = async (req:Request, res:Response):Promise<void> =>{
    const name = req.body
    try {
        const findbyName = await Products.find({name: name})
        res.status(200).json(findbyName)
    } catch (error) {
        res.status(500).json({message: error})
    }
}