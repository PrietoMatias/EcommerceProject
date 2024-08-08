import { Schema } from "mongoose";

const schemaUser = new Schema({
    name: {type: String, required: true, minlength: 5, maxlength: 50},
    surname: {type: String, required: true, minlength: 5, maxlength: 50},
    username: {type: String, required: true, minlength: 5, maxlength: 50},
    mail: {type: String, required: true, unique: true},
    birth: {type: Date, required: true},
    location: {type: String, required: true},
    shoppinghistory: [{
        orderId: {type: Schema.Types.ObjectId, ref: 'Order', required: true},
        date: {type: Date, required: true},
        total: {type: Number, required: true}
    }],
    postalcode: {type: Number, required: true},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    dateregist: {type: Date, default: Date.now},
    isDeleted: {type:Boolean, default: false},
    deleteAt: {type: Date}
});

export default schemaUser 