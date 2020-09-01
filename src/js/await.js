import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
  'capi',
  'iron',
  'spider'
];

export const obtenerHeroesArr = async() => {

  
  //Otra manera simplificada para optimizar el tiempo de consulta
  
  return await Promise.all(heroesIds.map( buscarHeroe ));
  
  // const heroesArr = [];


  // for( const id of heroesIds){
  //   heroesArr.push(buscarHeroe(id));
  // }

  // return await Promise.all(heroesArr);
};