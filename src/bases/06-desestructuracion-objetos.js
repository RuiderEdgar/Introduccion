//Desestructuracion de objetos
//Asignacion desestruturante
const Persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = Persona;
console.log(nombre, edad, clave);

// const retornaPersona = (usuario) => {
//   const { nombre, edad, clave } = usuario;
//   console.log(nombre, edad, clave);
// }

const useContext = ({ nombre, edad, clave, rango = "Capitan" }) => {
  // console.log(nombre, edad, clave, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.30202,
      lng: -39.1232,
    },
  };
};

//tarea
const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(Persona);

console.log(nombreClave, anios);
console.log(lat, lng);
