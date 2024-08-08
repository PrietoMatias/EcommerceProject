import {Schema} from 'mongoose';


const schemaCart = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products:[{
        product_id:{type: Schema.Types.ObjectId, ref: 'Products', required: true},
        quantity: {type: Number, required:true},
        colors: {type: [String], required: true}
    }],
    datecreated: {type: Date, default: Date.now},
    isDeleted: {type:Boolean, default: false},
    deleteAt: {type: Date}
})

export default schemaCart