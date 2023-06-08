const validation = (userData) => {
  const errors = {};

  if (!userData.email) {
    errors.email = "Email requerido";
  }

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Email invalido";
  }

  if (userData.email.length > 35) {
    errors.email = "El usuario no puede tener más de 35 caracteres";
  }

  if (!/.*\d.*/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Entre 6 y 10 caracteres";
  }

  if (!userData.password) {
    errors.password = "Password Requerido";
  }

  return errors;
};

export default validation;
