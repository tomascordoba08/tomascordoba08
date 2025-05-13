const dbService = require('./bd/conexion');
const bcrypt = require('bcrypt');

class clienteModelo{
  static async crearClientes(doc, name, tel, email, claveOriginal) { // Cambia el nombre del parámetro a claveOriginal
    const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, clave, estado) VALUES (?, ?, ?, ?, ?, ?)';

    try {
      // Generar el hash de la contraseña con bcrypt
      const salto = 10; // Nivel de seguridad de encriptación
      const claveHasheada = await bcrypt.hash(claveOriginal, salto); // Guarda el hash en una nueva variable

      return await dbService.query(query, [doc, name, tel, email, claveHasheada, "Cliente", "Activo"]); // Usa la variable con la contraseña hasheada
    } catch (err) {
      throw new Error(`Error al crear el usuario: ${err.message}`);
    }
  }
}


module.exports  = clienteModelo;