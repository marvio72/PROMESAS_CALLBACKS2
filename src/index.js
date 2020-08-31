import './sass/estilos.scss';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

 buscarHeroe( heroeId, ( heroe ) => {
  console.log(heroe);
 });

 console.log('Fin del programa');

//  JavaScript realiza las operaciones de manera secuencial

 