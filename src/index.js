import './sass/estilos.scss';
import { buscarHeroe } from './js/callbacks';

const heroeId = 'capi';

 buscarHeroe( heroeId, ( err, heroe ) => {

  if(err){
    console.error(err);
  }else{
    console.info(heroe);
  }

 });

 console.log('Fin del programa');

//  JavaScript realiza las operaciones de manera secuencial

 