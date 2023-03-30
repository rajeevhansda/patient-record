const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../models/userModel')


//DB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
//for error connection checking
mongoose.connection.on("error", error => console.log(`MongoDB connection error: ${error.message}`))



const createUserDB = async (name, password, admin) => {

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    try {
        const user = new User({
            name,
            password: hashPassword,
            isAdmin: admin
        })
        const result = await user.save();
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

const loginUserDB = async (name, password) => {
    try {
        const user = await User.findOne({ name: name });
        if (user === null) {
            return "Username not found"
        }
        const isCorrect = await bcrypt.compare(password, user.password);
        if (isCorrect) {
            const { name, isAdmin, _id } = user
            return { id: _id, name, isAdmin }
        } else {
            return "Password incorrect"
        }
    } catch (error) {
        throw new Error("error")
    }
}

const updateUserDB = async (search, data) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(search, data);
        const { name, isAdmin, _id } = updatedUser
        return { id: _id, name: data.name, isAdmin };
    } catch (error) {
        throw new Error(error)
    }
}

const deleteUserDB = async (search) => {
    try {
        const deletedUser = await User.findByIdAndDelete(search);
        console.log(deletedUser)
        const { name, isAdmin, _id } = deletedUser
        return { id: _id, name, isAdmin };
    } catch (error) {
        throw new Error(error)
    }
}

const checkAdmin = async (id) => {
    try {
        const user = await User.findOne({ _id: id });
        return user.isAdmin === 0 ? false: true;
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = { createUserDB, loginUserDB, updateUserDB, deleteUserDB, checkAdmin }