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

export default {getUser, createUser}