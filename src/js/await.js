import { buscarHeroeAsync } from "./promesas";

const heroesIds = [
  'capi',
  'iron',
  'spider'
];

export const obtenerHeroesArr = async() => {

  const heroesArr = [];

  // No es recomendable realizar este metodo para esperar los resultados de la busqueda y asi completar el proceso
  // for( const id of heroesIds){
  // buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
  // }

  // setTimeout(() => {
  //   console.log('ObtenerHeroes');
  //   console.table(heroesArr);
  // }, 1000);

  for( const id of heroesIds){
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe);
  }

  return heroesArr;

};