import mongoose, { Document, Model } from 'mongoose'
import schemaUser from '../schemas/schemaUser'

export interface IUser extends Document {
    name: string;
    surname:string;
    mail: string;
    birth: Date;
    location: string;
    postalcode: number;
    phone: string;
    password: string;
    dateregist: Date;
  }
  
  export const User: Model<IUser> = mongoose.model<IUser>('User', schemaUser);