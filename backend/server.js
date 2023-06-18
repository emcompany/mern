const express = require('express')
const app = express();
const PORT = 4578
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend




mongoose.connect("mongodb+srv://ericmathewem8:Skyline123@cluster0.lfkhqmn.mongodb.net/MES")
.then (()=>{console.log("MongoDB connected succussfully")})
.catch(()=>{console.log("Error occured")})

const PRODUCT = require("./model/product")

app.post('/addData', async(req, res) => {
    try {

        let item = req.body
        console.log(item)

        const saveData = await PRODUCT(item) //PRODUCT is a model. we cross check the form data with the model we created before saving it
        await saveData.save()  // through this code we save the incoming data from front end to db 
        res.send((saveData))




    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});