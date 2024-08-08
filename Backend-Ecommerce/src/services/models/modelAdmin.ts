import mongoose, {Model, Document} from "mongoose";
import schemaAdmin from '../schemas/shcemaAdmin'

export interface IAdmin extends Document{
    name: string,
    surname: string,
    username: string,
    password: string,
    mail: string,
    birth: Date,
    location: string,
    role: string,
    number_phone: string,
    isDeleted: Boolean, 
    deleteAt: Date
}

export const Admin: Model<IAdmin> = mongoose.model<IAdmin>('Admin', schemaAdmin)