const { createPatient, updatePatient, deletePatient, findPatient, allPatient, findPatientById } = require('../Entities/patientEntity');

const router = require('express').Router()

//Create patient
router.post('/register', async (req, res) => {

    const { id, name, disease, medication } = req.body;

    try {

        const result = await createPatient(id, name, disease, medication)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})

//Update patient
router.put('/update', async (req, res) => {

    const { id, pId, ...data } = req.body;

    try {

        const result = await updatePatient(id, pId, data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})

//Delete patient
router.delete('/delete', async (req, res) => {
    const { id, pId } = req.body;
    console.log(id,pId);
    try {
        const result = await deletePatient(id, pId)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})

//All patient
router.get('/all', async (req, res) => {
    try {
        const result = await allPatient()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})


//Search patient
router.post('/search', async (req, res) => {
    const search = req.body.search;
    try {
        const result = await findPatient(search)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})


//Search byID
router.post('/searchById', async (req, res) => {
    const search = req.body.search;
    try {
        const result = await findPatientById(search)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    }
})
router.get('/', (req, res) => {
    res.send("user route")
})


module.exports = router;