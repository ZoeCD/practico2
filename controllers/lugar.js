const Lugar = require("../models/lugar")
const mongoose = require('mongoose')

exports.postAgregarLugar = async (req, res)=>{
    try{
        const lugar = await Lugar.findOne(req.body.nombre)
        lugar.update({$inc: {"interes":1}})
        console.log(lugar)
        res.send({opeacion:"correcta"})
    }catch(err){
        const lugar = new Lugar(req.body)
        lugar._id = new mongoose.Types.ObjectsId()
        try{
            await lugar.save()
            console.log(lugar)
            console.log("Lugar registrado")
            res.send({operacion:"correcta"})
        }catch(err){
            console.log(err)
            res.send({operacion: "incorrecta"})}
    }
}

exports.getObtenerLugares=async(req,res)=>{
  try {  
    const lugares = await Lugar.find(req.body.pais)
    console.log(lugares)
    res.json(lugares)
  }catch(err){
    console.log(err)
  }
}
