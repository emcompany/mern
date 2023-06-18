const express = require('express')
const app = express();
const PORT = 4578
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend




mongoose.connect("mongodb+srv://ericmathewem8:Skyline123@cluster0.lfkhqmn.mongodb.net/")
.then (()=>{console.log("MongoDB connected succussfully")})
.catch(()=>{console.log("Error occured")})

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});