//promesas
import { getHeroesById } from "./bases/08-imp-exp-funciones-arreglos";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroesById(1)
//     heroe === undefined ? reject('No se pudo encontrar el heroe') : resolve(heroe);
//   }, 2000);
// });

// promesa
//   .then((heroe)=>{
//     console.log('heroe: ', heroe)
//   })
//   .catch((err)=>{
//     console.warn(err)
//   })

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id);
      heroe === undefined
        ? reject("No se pudo encontrar el heroe")
        : resolve(heroe);
    }, 2000);
  });
};

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
