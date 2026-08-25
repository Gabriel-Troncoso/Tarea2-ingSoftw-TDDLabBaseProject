function saludar(nombre, edad, genero, idioma, horaActual) {

  let saludoHora = "Hola ";
  if (horaActual >= 6 && horaActual < 12) {
    saludoHora = idioma === "en" ? "Good morning" : "Buenos días";
  } else if (horaActual >= 12 && horaActual < 19) {
    saludoHora = idioma === "en" ? "Good afternoon" : "Buenas tardes";
  } else {
    saludoHora = idioma === "en" ? "Good evening" : "Buenas noches";
  }
  
  if (edad > 100 || edad < 0) {
  return "error edad invalida";
  }
  if (!isNaN(nombre)) {
  return "error nombre invalido";
  }

  if(!nombre){
    nombre = "visitante";
  }
 

  let titulo = "";
  if (edad > 30) {
    if (genero === "masculino") titulo = "Sr. ";
    else if (genero === "femenino") titulo = "Sra. ";
  }



  return `${saludoHora}, ${titulo}${nombre}!`;
}

export default saludar;
