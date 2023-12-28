const { Users } = require('../db');
const bcryptjs = require ('bcryptjs')

const createUser = async (Name, LastName, UserName, Email, Password, Image) => {

  const salt= await bcryptjs.genSalt(5)
  const NewPassword = await bcryptjs.hash(Password, salt)
  try {
   
    const [user, created] = await Users.findOrCreate({
      where: { Email: Email },
      defaults: {
        Name: Name,
        LastName: LastName,
        UserName: UserName,
        Email: Email,
        Password: NewPassword,
        Image: Image,
      },
    });
    console.log(user.Password)

    // Si no se creó un nuevo usuario, significa que ya existe en la base de datos
    if (!created) {
      throw new Error('Ya existe un usuario con este correo electrónico');
    }

    // Devuelve el usuario creado o encontrado
    return user;
   
  } catch (error) {
    // Si ocurre un error durante la creación o búsqueda, lánzalo para que pueda ser manejado
    throw new Error(`Error al crear o encontrar el usuario: ${error.message}`);
  }
};

// Exporta la función para su uso en otros módulos
module.exports = { createUser };