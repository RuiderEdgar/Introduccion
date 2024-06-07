//Funciones

// const saludar = function (nombre) {
//   console.log(this)
//   return `Hola, ${ nombre}`
// }

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// console.log(saludar('Edgar'))
console.log(saludar2("edgar"));
console.log(saludar3("edgar"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC1234",
  username: "El_papi213",
});

const user = getUser();
console.log(user);

//*tarea
//1. tranformar a funcion flecha
//2. tiene que retornar un objeto implicito
//3. pruebas

// function getUsuarioActivo(nombre){
//   return {
//     uid: "ABC987",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (nombre) => ({
  uid: "ABC987",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
