import { Request, Response } from "express";
import { User } from "../services/models/modelUser";
//We must use "_" to take off the alert of unused parameters
const getUser = async(_req:Request, res:Response):Promise<void>=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log('Error in getUser: ' + error)
    }
}

const createUser = async (req:Request, res:Response):Promise<void>=>{
   const {name, surname, mail, birth, location, postalcode, phone, password} = req.body
   const user = new User({name, surname, mail, birth, location, postalcode, phone, password})
    try {
        const result = await user.save()
        res.status(201).json({message: 'Usuario Creado con éxito'})
    } catch (error) {
        res.status(400).json({error})
    }
}
const deleteUser = async(req:Request, res:Response):Promise<void> =>{
    const id = req.params.id
    try {
        const result = await User.findByIdAndDelete({_id: id})
        if(!result){
            res.status(404).json({message: 'Usuario no encontrado'})
            return;
        }
        res.status(200).json({message: 'Usuario eliminado con éxito'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export default {getUser, createUser, deleteUser}