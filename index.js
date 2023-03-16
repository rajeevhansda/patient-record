const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json())
app.use(morgan("dev"))


//Middleware
const userAuthRoute = require('./routes/userRoute')
const patientRoute = require('./routes/patientRoute')

app.get('/', (req, res) => {
    res.send("server is running")
})

//Routing
app.use('/user', userAuthRoute);
app.use('/patient', patientRoute);

app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`)
});
