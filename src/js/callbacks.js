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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];

  callback( heroe );
};