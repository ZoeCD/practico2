const router = require("express").Router()
const lugarController = require("../controllers/lugar")

router.post('/agregarLugar', lugarController.postAgregarLugar)
router.post('/obtenerLugares', lugarController.getObtenerLugares)
