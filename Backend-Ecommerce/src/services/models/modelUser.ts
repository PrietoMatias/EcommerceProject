import mongoose, { Document, Model, ObjectId } from 'mongoose'
import schemaUser from '../schemas/schemaUser'

export interface IShoppingHistory {
  orderId: ObjectId;
  date: Date;
  total: number;
}

export interface IUser extends Document {
  name: string;
  surname: string;
  username: string;
  mail: string;
  birth: Date;
  location: string;
  shoppinghistory: IShoppingHistory[];
  postalcode: number;
  phone: string;
  password: string;
  dateregist: Date;
  isDeleted: Boolean; 
  deleteAt: Date;
}
  
  export const User: Model<IUser> = mongoose.model<IUser>('User', schemaUser);