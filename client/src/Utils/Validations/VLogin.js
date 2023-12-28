const ValidationLogin = (input) => {
    let errors = {};
  
  
  
    // Validación del correo electrónico
    if (!input.Email) {
      errors.Email = "An email is required";
    }
  
    // Validación de la contraseña
    if (!input.Password) {
      errors.Password = "A password is required";
    } 
  
    return errors;
  };
  
  export default ValidationLogin;