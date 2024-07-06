import {Schema} from 'mongoose';


const schemaCart = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products:[{
        product_id:{type: Schema.Types.ObjectId, ref: 'Products', required: true},
        quantity: {type: Number, required:true}
    }],
    datecreated: {type: Date, default: Date.now}
})

export default schemaCart