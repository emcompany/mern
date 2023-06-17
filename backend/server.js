const express = require('express')
const app = express();
const PORT = 4578
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ericmathewem8:Skyline123@cluster0.lfkhqmn.mongodb.net/")
.then (()=>{console.log("MongoDB connected succussfully")})
.catch(()=>{console.log("Error occured")})

app.get('/', (req,res)=>{
    res.send('welcome')

})

app.get('/about',(req,res)=>{
    res.send('open')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)

});