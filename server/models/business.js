const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const businessSchema = new Schema({
    business_name: {
        type: String,
        required: true
    },
    abn: {
        type: Number,
        required: true
    },
    catagory: {
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

// Create and export the Business model using module.exports
module.exports = model('business', businessSchema);