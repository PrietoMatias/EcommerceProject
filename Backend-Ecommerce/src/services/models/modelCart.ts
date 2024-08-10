import mongoose, {Model, Document, ObjectId} from 'mongoose';
import schemaCart from '../schemas/schemaCart';

export interface IProducts{
    product_id: ObjectId;
    quantity: number;
    colors: [];
    price: number
}

export interface ICart extends Document{
    user_id: ObjectId;
    products: IProducts[];
    datecreated: Date;
    isDeleted: boolean; 
    deleteAt: Date;
}


export const Cart: Model<ICart> = mongoose.model<ICart>('Cart', schemaCart)