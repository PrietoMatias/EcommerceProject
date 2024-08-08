import mongoose, {Document, Model, ObjectId} from 'mongoose';
import schemaInventory from '../schemas/schemaInventory';

export interface IVariants{
    size: string;
    color: string;
    stock: number;
}

export interface IInventory extends Document {
    product_id: ObjectId;
    variants: IVariants[];
    lastupdate: Date;
    isDeleted: Boolean, 
    deleteAt: Date
}

export const Inventory: Model<IInventory> = mongoose.model<IInventory>('Inventory', schemaInventory)