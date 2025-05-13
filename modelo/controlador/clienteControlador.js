const Modelo = require('../modelo/clienteModelo');


 class clienteControlador{
   static async crearCliente(req, res) {
    const { t1:  doc, t2: name,t3: tel,t4: email,t5: clave } = req.body;
    try {
      const result = await Modelo.crearClientes(doc, name, tel, email, clave);
      res.status(201).json({ mensaje: 'Usuario creado', id: result.insertId });
    } catch (err) {
      console.error("Error al crear el usuario:", err); // Log del error completo
      res.status(500).json({ error: 'Hubo un error al crear el usuario por falta de datos' });
    }
  }
  
 }
 


module.exports = clienteControlador;