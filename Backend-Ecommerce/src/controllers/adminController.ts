import {Admin} from '../services/models/modelAdmin'
import {Request, Response} from 'express'
import { generateToken } from '../config/jsw'

const login = async(req:Request, res:Response):Promise<void>=>{
    const {user, password} = req.body
    try {
        const searchAdmin = await Admin.findOne({username: user, password: password})
        if(!searchAdmin){
            res.status(404).json({message: 'Usuario no encontrado'})
            return
        }
        const token = generateToken({id: searchAdmin._id, username: searchAdmin.username, role: searchAdmin.role})
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })

        res.status(200).json({ message: 'Success login', token });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const logout = (_req:Request, res:Response)=>{
    res.cookie('token', '', {httpOnly: true, secure: process.env.NODE_ENV === 'production'})
    res.status(200).json({message: 'Success logout'})
}

const createAdmin = async (req:Request, res:Response):Promise<void> =>{
    const {name, surname, username, password, mail, birth, location, role, number_phone} = req.body
    if(!name || !surname || !username || !password || !birth || !location || !role || !number_phone){
        res.status(400).json({message: 'Todos los campos son requeridos'})
        return
    }

    const addAdmin = new Admin({name, surname, username, password, mail, birth, location, role, number_phone})
    
    try {
        const result = await addAdmin.save()
        res.status(201).json({message: 'Administrador creado con éxito', admin: result})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export default {login, logout, createAdmin}

