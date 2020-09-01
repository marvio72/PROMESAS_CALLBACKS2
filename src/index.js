import './sass/estilos.scss';
import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


buscarHeroe('capi').then(console.log)
  .catch(console.warn);

buscarHeroeAsync('spider').then(heroe => console.log(heroe))
  .catch(console.warn);



