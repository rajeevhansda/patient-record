const router = require('express').Router()
const { searchOne } = require('../database/userDB');


const { createUser, loginUser, updateUser, deleteUser } = require('../Entities/userEntity')

//Register user
router.post('/register', async (req, res) => {

    const nameRec = req.body.name;
    const password = req.body.password;
    const adminRec = req.body.isAdmin;

    try {
        const result = await createUser(nameRec, password, adminRec)
        const { _id, isAdmin, name } = result
        res.status(200).json({ id: _id, name, isAdmin })

    } catch (error) {
        res.status(400).json(error);
    }
})

//Login User
router.get('/login', async (req, res) => {

    const name = req.body.name
    const password = req.body.password
    try {
        const result = await loginUser(name, password);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})

//Update user
router.put('/update', async (req, res) => {
    const { id, ...data } = req.body
    try {
        const result = await updateUser(id, data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Delete user
router.delete('/delete', async (req, res) => {
    const search = req.body.id
    try {
        const result = await deleteUser(search)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)

    }
})

router.get('/', (req, res) => {
    res.send("user route")
})

module.exports = router;