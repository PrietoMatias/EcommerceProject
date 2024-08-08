import { Schema } from "mongoose";

const schemaUser = new Schema({
    name: {type: String, required: true, minlength: 5, maxlength: 50},
    surname: {type: String, required: true, minlength: 5, maxlength: 50},
    username: {type: String, required: true, minlength: 5, maxlegth: 50},
    password: {type: String, required:true},
    mail: {type: String, required: true, unique: true},
    birth: {type: Date, required: true},
    location: {type: String, required: true},
    role: {type: String, required: true},
    number_phone: {type: String, required: true},
    isDeleted: {type:Boolean, default: false},
    deleteAt: {type: Date}
})

export default schemaUser