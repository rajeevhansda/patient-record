const { isAdmin, createPatientDB, updatePatientDB, deletePatientDB,findPatientDB, allPatientDB,findPatientByIdDB } = require("../database/patientDB");

const createPatient = async (id, name, disease, medication) => {


    try {
        const admin = await isAdmin(id);
        if (admin) {
            const result = await createPatientDB(name, disease, medication);
            return result;
        } else {
            return "You are not authorized."
        }
    } catch (error) {
        throw new Error(error)
    }
}

const updatePatient = async (id, pId, data) => {
    try {
        const admin = await isAdmin(id);
        if (admin) {
            const result = await updatePatientDB(pId, data);
            return result;
        } else {
            return "You are not authorized."
        }
    } catch (error) {
        throw new Error(error)
    }
}

const deletePatient = async (id, search) => {
    try {
        const admin = await isAdmin(id);
        if (admin) {
            const result = await deletePatientDB(search);
            return result;
        } else {
            return "You are not authorized."
        }
    } catch (error) {
        throw new Error(error)
    }
}
const allPatient = async () => {
    try {
        const result = await allPatientDB();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

const findPatient = async (search) => {
    try {
        const result = await findPatientDB(search);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

const findPatientById = async (search) => {
    try {
        const result = await findPatientByIdDB(search);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { createPatient, updatePatient, deletePatient, findPatient,allPatient, findPatientById }