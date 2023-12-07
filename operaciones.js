const fs = require("fs");

const registrar = (
  nombre_mascota,
  edad,
  tipo_mascota,
  color_mascota,
  enfermedad
) => {
  const veterinary_reserve = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  veterinary_reserve.push({
    nombre_mascota,
    edad,
    tipo_mascota,
    color_mascota,
    enfermedad,
  });
  fs.writeFileSync("citas.json",JSON.stringify(veterinary_reserve));
  if (
    !nombre_mascota ||
    !edad ||
    !tipo_mascota ||
    !color_mascota ||
    !enfermedad
  ) {
    console.log("Ingresar todos los datos !!");
    return
  }

};

const leer = () => {
  const veterinary_reserve = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(veterinary_reserve);
};

module.exports = { registrar, leer };
