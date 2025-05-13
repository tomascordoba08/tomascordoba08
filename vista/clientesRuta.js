const express = require('express');
const clienteControlador = require('../controlador/clienteControlador');
const router = express.Router();

router.post('/usuarios', clienteControlador.crearCliente);
module.exports = router; 

