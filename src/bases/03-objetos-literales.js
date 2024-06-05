const Persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "CDMX",
    calle: "Av 9",
    cp: "09200",
    lat: 14.3332,
    lng: 39.0909,
  },
};

console.log(Persona);
// console.log(Persona.nombre)
// console.table({Persona})

//solo se copia la referencia
// const Persona2 = Persona;

//hacer una copia con el operador spread
const Persona2 = { ...Persona };
Persona2.nombre = "Peter";

console.log(Persona2);
console.log(Persona);
