import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {generateSecret} from '../utils/secret'
import { TokenPayload } from '../types/jwt/tokenPayload'

dotenv.config()

const secret = process.env.JWT_SECRET  || generateSecret()

export const generateToken = (playload: { id: unknown, username: string, role: string | null })=>{
    return jwt.sign(playload, secret, {expiresIn: '1h'})
}

export const verifyToken = (token:string):TokenPayload=>{
    return jwt.verify(token, secret) as TokenPayload
}

