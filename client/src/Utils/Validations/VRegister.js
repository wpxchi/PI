const ValidationRegister = (input) => {
    let errors = {};
  
    // Validación del nombre
    if (!input.Name) {
      errors.Name = "A name is required";
    } else if (input.Name.length < 3) {
      errors.Name = "Must be at least 3 characters";
    } else if (input.Name.length > 20) {
      errors.Name = "Must be less than 20 characters";
    }
  
    // Validación del apellido
    if (!input.LastName) {
      errors.LastName = "A lastname is required";
    } else if (input.LastName.length < 2) {
      errors.LastName = "Must be at least 2 characters";
    } else if (input.LastName.length > 20) {
      errors.LastName = "Must be less than 20 characters";
    }
  
    // Validación del nombre de usuario
    if (!input.UserName) {
      errors.UserName = "A user name is required";
    } else if (input.UserName.length < 5) {
      errors.UserName = "Must be at least 5 characters";
    } else if (input.UserName.length > 16) {
      errors.UserName = "Must be less than 16 characters";
    }
  
    // Validación del correo electrónico
    if (!input.Email) {
      errors.Email = "An email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(input.Email)) {
      errors.Email = "Invalid email address";
    } else if (input.Email.length > 30) {
      errors.Email = "Must be less than 30 characters";
    }
  
    // Validación de la contraseña
    if (!input.Password) {
      errors.Password = "A password is required";
    } else if (input.Password.length < 6) {
      errors.Password = "Must be at least 6 characters";
    } else if (!/\d/.test(input.Password)) {
      errors.Password = "Must contain at least one number";
    } else if (input.Password.length > 16) {
      errors.Password = "Must be less than 16 characters";
    }
  
    return errors;
  };
  
  export default ValidationRegister;