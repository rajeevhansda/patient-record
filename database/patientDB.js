const mongoose = require('mongoose')
const { checkAdmin } = require("./userDB")
const Patient = require('../models/patientModel')


//DB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
//for error connection checking
mongoose.connection.on("error", error => console.log(`MongoDB connection error: ${error.message}`))



const isAdmin = async (id) => {
    try {
        const result = await checkAdmin(id);
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const createPatientDB = async (name, disease, medication) => {
    try {
        const patient = new Patient({
            name,
            disease,
            medication
        })
        const result = await patient.save();
        return "Patient created";

    } catch (error) {
        throw new Error(error)
    }
}

const updatePatientDB = async (name, data) => {
    console.log(data)
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(name, data);
        return "Patient updated"
    } catch (error) {
        throw new Error(error)
    }
}

const deletePatientDB = async (search) => {
    try {
        const deletedUser = await Patient.findByIdAndDelete(search);

        return "User successfully deleted"
    } catch (error) {
        throw new Error(error)
    }
}
const allPatientDB = async () => {
    try {
        const result = await Patient.find()
        console.log(result)
        return result
    } catch (error) {
        throw new Error(error);
    }
}


const findPatientDB = async (search) => {
    try {
        const result = await Patient.find({ "name": { $regex: '^' + search } })
        console.log(result)
        return result
    } catch (error) {
        throw new Error(error);
    }
}

const findPatientByIdDB = async (search) => {
    try {
        const result = await Patient.findById(search)
        console.log(result)
        return result
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { isAdmin, createPatientDB, updatePatientDB, deletePatientDB, findPatientDB, allPatientDB, findPatientByIdDB }