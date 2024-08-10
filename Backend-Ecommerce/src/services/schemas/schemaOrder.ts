import { Schema } from "mongoose";

//Mira pelotudo, no creo que me entiendas si te escribo en inglés así que te lo voy a explicar en
//español, este esquema de base de datos lo que hace es crear corte una orden de compra que nos va
//a servir para que la veamos reflejado en el historial de compras
//entendes papilo?
const schemaOrder = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},//esto referencia la coleccion del user
    products: [{
        product_id: {type: Schema.Types.ObjectId, ref: 'Products', required: true},//referencia productos
        quantity: {type: Number, required: true},
        price: {type: Number, required: true} 
    }],
    total: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    status: {type: String, default: 'pendiente'}//esto es para ver que onda como van los envios o las compras
})
//Conclución: Es como unir tablas en relaciones como en un motor sql. Cualquier duda un tubazo


export default schemaOrder