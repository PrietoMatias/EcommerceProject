import {Schema} from 'mongoose';

const schemaInventory = new Schema({
    productId: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    variants: [{
        size: {type: String, required: true},
        color: {type: String, required: true},
        stock: {type: Number, required: true}
    }],
    lastUpdated: {type: Date, default: Date.now},
    isDeleted: {type:Boolean, default: false},
    deleteAt: {type: Date}

})



export default schemaInventory