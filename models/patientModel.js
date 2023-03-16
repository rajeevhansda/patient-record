const mongoose = require("mongoose")

const Schema = require("mongoose").Schema

const patientSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    disease: {
        type: Array,
        require: true,
        default: []
    },
    medication: {
        type: Array,
        require: true,
        default: []
    },
},{timestamps: true})

module.exports = mongoose.model("Patient", patientSchema);
