import mongoose, { Document, Model } from 'mongoose'
import schemaProducts from '../schemas/schemaProducts'

export interface IProdcuts extends Document {
    name: string;
    description:string;
    price: number;
    stock: number;
    category: string;
    images: [String];
    sizes: [String];
    colors: [String];
    dateAdded: Date;
    isDeleted: Boolean; 
    deleteAt: Date;
}

export const Products: Model<IProdcuts> = mongoose.model<IProdcuts>('Products', schemaProducts);