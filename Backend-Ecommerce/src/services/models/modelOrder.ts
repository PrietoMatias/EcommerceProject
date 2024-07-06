import mongoose, {Document, Model, ObjectId} from 'mongoose';
import schemaOrder from '../schemas/schemaOrder'

export interface IProducts{
    product_id: ObjectId;
    quantity: number;
    price: number;
}

export interface IOrder extends Document{
    user_id: ObjectId;
    products: IProducts[];
    total: number;
    date: Date;
    status: string;
}


export const Order: Model<IOrder> = mongoose.model<IOrder>('Order', schemaOrder)