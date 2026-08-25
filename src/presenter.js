import saludar from "./saludar.js";

const form = document.querySelector("#saludo-form");
const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const generoSelect = document.querySelector("#genero");
const idiomaSelect = document.querySelector("#idioma");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const edad = Number.parseInt(edadInput.value) || 0;
  const genero = generoSelect.value;
  const idioma = idiomaSelect.value;

  const horaActual = new Date().getHours();

  const mensajeFinal = saludar(nombre, edad, genero, idioma, horaActual);

 
  resultadoDiv.innerHTML = `<p>${mensajeFinal}</p>`;
});