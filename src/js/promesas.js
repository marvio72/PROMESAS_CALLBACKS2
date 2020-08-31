const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spider man',
    poder: 'Resistencia a la picadura de arañas'
  }
};

// En las promesas no es necesario llamar a un callback
export const buscarHeroe = (id) => {

  const heroe = heroes[id];

  // Dentro de la promesa se llama un callback
  // Se usan dos argumentos Resolve, reject
  return new Promise((resolve, reject) =>{

    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un héroe con el id ${id}`);
    }
  });
};