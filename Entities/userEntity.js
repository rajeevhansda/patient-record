const { createUserDB, loginUserDB, updateUserDB, deleteUserDB } = require('../database/userDB')


const createUser = async (name, password, admin) => {
    try {
        const result = await createUserDB(name, password, admin);
        return result;
    } catch (error) {
        throw new Error(error)
    }
}

const loginUser = async (name, password) => {
    try {
        const result = await loginUserDB(name, password);
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const updateUser = async (search, data) => {
    try {
        const result = await updateUserDB(search, data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const deleteUser = async (search) => {
    try {
        const result = await deleteUserDB(search)
        return result
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { createUser, loginUser, updateUser, deleteUser }