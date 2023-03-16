const mongoose = require("mongoose")

const Schema = require("mongoose").Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Number,
        default: 0,
    },
},{timestamps: true})

module.exports = mongoose.model("User", userSchema);
