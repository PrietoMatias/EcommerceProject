import {Schema} from 'mongoose';


const schemaConfig = new Schema({
    namesite: {type: String, required: true},
    currency: {type: [String], required: true},
    languages: {type: [String], required: true}, 
    policies_of_privacy: {type: String, required: true},
    terms_and_conditions: {type: String, required: true}
})

export default schemaConfig