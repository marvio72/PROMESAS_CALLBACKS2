const { obtenerHeroesArr, obtenerHeroeAwait } = require("./js/await");

console.time('await');
obtenerHeroeAwait('capi1').then(heroe => {
  console.log(heroe);

  console.timeEnd('await');
}).catch(console.warn);





