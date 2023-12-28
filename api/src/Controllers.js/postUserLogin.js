const { Users } = require('../db');
const bcryptjs = require('bcryptjs');
const jsonwebtoken= require('jsonwebtoken');
require('dotenv').config();
const {JWT_SECRET, EXPIRATION_DATE}= process.env



const userLogin = async (Email, Password) => {
  try {
    // Busca el usuario por el correo electrónico
    const user = await Users.findOne({ where: { Email } });

    // Si no se encuentra el usuario, lanza un error
    if (!user) {
      throw new Error('Correo electrónico incorrecto');
    }
    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const passwordMatch = await bcryptjs.compare(Password, user.Password);

    // Si las contraseñas no coinciden, lanza un error
    if (!passwordMatch) {
      throw new Error('Credenciales Incorrectas');
    }
    
    const token= jsonwebtoken.sign({Email: user.Email } ,JWT_SECRET, {expiresIn:EXPIRATION_DATE })

 
    
    return {user, token};
  } catch (error) {
    // Si ocurre un error, lánzalo para que pueda ser manejado
    throw new Error(`Error en la autenticación: ${error.message}`);
  }
};

module.exports = { userLogin };