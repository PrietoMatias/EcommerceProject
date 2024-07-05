import { Schema } from "mongoose";

const schemaUser:Schema = new Schema({
    name:{type: String, required: true, minlength: 5, maxlength: 50},
    surname:{type: String, required: true, minlength: 5, maxlength: 50},
    mail: {type: String, required: true},
    birth: {type: Date, required: true},
    location: {type: String, required:true},
    postalcode: {type: Number, required:true},
    phone: {type: String, required:true},
    password: {type: String, required:true},
    dateregist: {type: Date, default: Date.now}
})

export default schemaUser