const express = require('express');
const cors = require('cors');

const rutacliente=require('./vista/clientesRuta');
const app = express();

const PORT = process.env.PORT || 6045;


app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', rutacliente);

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });