import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
  'capi',
  'iron',
  'spider'
];
// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
const heroesPromesas = heroesIds.map(buscarHeroe);

export const obtenerHeroesArr = async() => {
  return await Promise.all(heroesIds.map( buscarHeroe ));
};

export const obtenerHeroeAwait = async(id) => {

  try {
      const heroe = await buscarHeroeAsync(id);
      return heroe;

  } catch (error) {
      console.log('CATCH!!');
      // console.log(error);
      // throw error;
      return{
        nombre: 'no hay nombre',
        poder: 'no hay poder'
      };
  }
};

export const heroesCiclo = async() => {

  console.time('HeroesCiclo');


  for await(const heroe of heroesPromesas){
    console.log(heroe);
  }

  /*Lo mismo*/

  // const heroes = await Promise.all(heroesPromesas);
  // heroes.forEach(heroe => console.log(heroe));

  // console.log(heroes);
  
  console.timeEnd('HeroesCiclo');
  
};

export const heroeIfAwait = async(id) => {
  if(( await buscarHeroeAsync(id)).nombre === 'Ironman') {
    console.log('Es el mejor de todos');
  } else {
    console.log('Naaa');
  }
};