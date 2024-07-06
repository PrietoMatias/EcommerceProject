import {Schema} from 'mongoose';

const schemaProducts = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
    images: [String],
    sizes: [String],
    colors: [String],
    dateAdded: {type: Date, default: Date.now}
})

export default schemaProducts