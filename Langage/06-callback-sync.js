const nbs = [2, 3, 4];

// Afficher le carré des nombres pairs
// du tableau

// paradigme impératif
for (let i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  if (nb % 2 === 0) {
    const nbPair = nb;
    console.log(nbPair ** 2);
  }
}

// paradigme fonctionnel (ES5)
// callbackFn(2, 0, [2, 3, 4])
// callbackFn(3, 1, [2, 3, 4])
// callbackFn(4, 2, [2, 3, 4])
// nbs.filter(function(nb) { return  nb % 2 === 0 })
nbs.filter((nb) => nb % 2 === 0)
   .map((nbPair) => nbPair ** 2)
   .forEach((nbPairCarre) => console.log(nbPairCarre));

console.log('Fin');

// pile d'appels
// ^
// |
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +-------------------------------------------------> temps
//                           4    16   Fin
