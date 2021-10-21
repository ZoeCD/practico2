const express = require("express")
const mongoose = require("mongoose")

//const placeRoutes = require()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use("/pokemon", pokemonRoutes)

mongoose.connect('mongodb://user11:root@54.198.161.35:27017/base11?authSource=admin')
.then(()=>{
    app.listen(8080,()=>console.log("servidor en línea"))
})
.catch(err=>console.log(err))