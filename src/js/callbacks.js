const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  }, 
  spider : {
    nombre: 'Spider man',
    poder: 'Resistencia a la picadura de arañas'
  }
};


//callback retorna...
export const buscarHeroe = (id, callback) => {
  
  const heroe = heroes[id];
  // Los callbacks siempre verifica un error, si este no existe se promueve el siguiente valor, es por eso que se la pone null cuando se supone que no habra error
  if (heroe ) {
    callback(null, heroe);
  } else {
    // un Error
    callback(`No existe un héroe con el id ${ id }`);
  }
  // callback( heroe );
};