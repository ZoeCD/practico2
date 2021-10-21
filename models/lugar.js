const mongoose = require('mongoose')

const LugaresSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required: true
    },
    ciudad:{
        type:String,
        required: true
    },
    tipo:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
    },
    interes:{
        type:Number,
        required: false
    }
    
},{collection:'lugar'});

module.exports = mongoose.model('lugar', LugaresSchema);