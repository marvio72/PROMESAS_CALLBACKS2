import './sass/estilos.scss';
import { buscarHeroe } from './js/callbacks';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

 buscarHeroe( heroeId1, ( err, heroe1 ) => {

  if(err){return console.error(err); }

  buscarHeroe( heroeId2, (err, heroe2) => {

    if (err) {return console.error(err); }

    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
  });

 });

 console.log('Fin del programa');

//  JavaScript realiza las operaciones de manera secuencial

 