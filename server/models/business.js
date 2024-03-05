import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
    business_name: {
        type: String,
        required: true
    },
    abn: {
        type: Number,
        required: true
    },
    Catagory: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    business_number: {
        type: String
    }
}, { timestamps: true });

export default Business = model('business', businessSchema);