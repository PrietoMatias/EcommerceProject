import { Request, Response } from "express";
import { User } from "../services/models/modelUser";

const getUser = async(_req:Request, res:Response):Promise<void>=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log('Error in getUser: ' + error)
    }
}