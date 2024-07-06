import {Schema} from 'mongoose';


const schemaSuppliers = new Schema({
    name: {type: String, required: true},
    contact: [
        {
            number: {type: String, required: true},
            mail: {type: String, required: true},
            location: {type: String, require: true}
        }
    ],
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})

export default schemaSuppliers