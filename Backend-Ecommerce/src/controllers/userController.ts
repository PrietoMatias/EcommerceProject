import { Request, Response } from "express";
import { User } from "../services/models/modelUser";
import { generateToken } from "../config/jsw";
//We must use "_" to take off the alert of unused parameters
const getUser = async(_req:Request, res:Response):Promise<void>=>{
    try {
        const users = await User.find({isDeleted:false})
        res.status(200).json(users)
    } catch (error) {
        console.log('Error in getUser: ' + error)
    }
}

const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, surname, username, mail, birth, location, postalcode, phone, password } = req.body;

    if (!name || !surname || !username || !mail || !birth || !location || !postalcode || !phone || !password) {
        res.status(400).json({ message: 'Todos los campos son requeridos' });
        return;
    }

    const user = new User({ name, surname, username, mail, birth, location, postalcode, phone, password });

    try {
        const result = await user.save();
        res.status(201).json({ message: 'Usuario creado con éxito', user: result });
    } catch (error:any) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'El email ya existe' });
        } else {
            res.status(400).json({ message: 'Error al crear usuario', error });
        }
    }
}
const deleteUser = async(req:Request, res:Response):Promise<void> =>{
    const id = req.params.id
    try {
        const result = await User.findByIdAndUpdate({_id: id},
            {isDeleted: true,
              deleteAt: Date.now()
            },
            {new: true}
        )
        if(!result){
            res.status(404).json({message: 'Usuario no encontrado'})
            return;
        }
        res.status(200).json({message: 'Usuario eliminado con éxito'})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const updateUser = async(req:Request, res:Response):Promise<void>=>{
    const { name, surname, username, mail, birth, location, postalcode, phone, password } = req.body;
    const idUser = req.params.id
    //if (!name || !surname || !username || !mail || !birth || !location || !postalcode || !phone || !password) {
    //    res.status(400).json({ message: 'Todos los campos son requeridos' });
    //    return;
   // }
    try {
        const updateUser = await User.findByIdAndUpdate(idUser, 
            {name, surname, username, mail, birth, location, postalcode, phone, password},
            {new: true})

        if(!updateUser) {
        res.status(404).json({message:'Usuario no encontrado'})
        return
    }
    res.status(200).json({message: 'Usuario actualizado con éxito'})
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error})
    }
}

const login = async (req:Request, res:Response):Promise<void>=>{
    const {user, password} = req.body
    try {
        const searchUser = await User.findOne({username: user, password: password})
        if(!searchUser){
            res.status(404).json({message: 'Usuario no encontrado'})
            return
        }
        const token = generateToken({id: searchUser._id, username: searchUser.username, role: 'user'})
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

export default {getUser, createUser, deleteUser, updateUser, login, logout}