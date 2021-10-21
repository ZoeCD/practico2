const Lugar = require("../models/lugar")
const mongoose = require('mongoose')

exports.postAgregarLugar = async (req, res)=>{
    const lugar = new Lugar(req.body)
    lugar._id = new mongoose.Types.ObjectsId()
    try {
        await lugar.save()
        console.log(lugar)
        console.log("Lugar registrado")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion: "incorrecta"})
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
