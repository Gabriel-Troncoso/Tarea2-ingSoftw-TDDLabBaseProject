function saludar(nombre, edad, genero, idioma, horaActual) {
  // 1. Saludo según la hora (mañana, tarde, noche)
  let saludoHora = "Hola";
  if (horaActual >= 6 && horaActual < 12) {
    saludoHora = idioma === "en" ? "Good morning" : "Buenos días";
  } else if (horaActual >= 12 && horaActual < 19) {
    saludoHora = idioma === "en" ? "Good afternoon" : "Buenas tardes";
  } else {
    saludoHora = idioma === "en" ? "Good evening" : "Buenas noches";
  }

  // 2. Título por edad (> 30 usa Sr. o Sra.)
  let titulo = "";
  if (edad > 30) {
    if (genero === "masculino") titulo = "Sr. ";
    else if (genero === "femenino") titulo = "Sra. ";
  }

  // 3. Armar el mensaje final combinado
  return `${saludoHora}, ${titulo}${nombre}!`;
}

export default saludar;