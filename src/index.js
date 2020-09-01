const { obtenerHeroesArr } = require("./js/await");

console.time('await');
obtenerHeroesArr().then(heroes => {
  console.table(heroes);

  console.timeEnd('await');
});





