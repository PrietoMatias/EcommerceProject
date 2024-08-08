import mongoose, {Document, Model, ObjectId} from 'mongoose'
import schemaSuppliers from '../schemas/schemaSuppliers'

export interface IContacts{
    number: string;
    mail:string;
    location:string;
}

export interface ISuppliers extends Document{
    name: string;
    contacts: IContacts[];
    products: ObjectId[];
    isDeleted: Boolean; 
    deleteAt: Date;
}

export const Suppliers: Model<ISuppliers> = mongoose.model<ISuppliers>('Suppliers', schemaSuppliers)