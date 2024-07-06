import {Schema} from 'mongoose'


const schemaReview = new Schema({
    product_id: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    calification: {type: Number, required: true, min: 1, max: 5},
    comment: {type: String, required: true},
    datereview: {type: Date, default: Date.now}
})

export default schemaReview