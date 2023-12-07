const { registrar, leer } = require("./operaciones.js");

const [
  operacion,
  nombre_mascota,
  edad,
  tipo_mascota,
  color_mascota,
  enfermedad,
] = process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombre_mascota, edad, tipo_mascota, color_mascota, enfermedad);
}

if (operacion === "leer") {
  leer();
}
