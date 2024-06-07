// import { heroes } from "./data/heroes"
// import heroes, {owners} from "./data/heroes"
import heroes, { owners } from "../data/heroes";

// console.log(owners);

//Tarea
const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(2));

//Tarea, filter
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner("DC"));

export {getHeroesById}