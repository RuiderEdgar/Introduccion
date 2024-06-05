//Desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tareas
//1. el primer valor del arr se llamará nombre
//2. se llamará setNombre
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");
// arr[1]();

console.log(nombre);
setNombre();
