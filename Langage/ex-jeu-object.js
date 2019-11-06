const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez saisi : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre entier ? ', (saisie) => {
    console.log('Vous avez saisi : ' + saisie);
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
}

function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// const entierAlea = getRandomIntInclusive(0, 100);
// const essais = [];
// jouer();

// Exercice 1
// Avec la syntaxe object literal :
// regrouper les 4 fonction aléatoire dans un objet Random
// const Random = {

// };

// const entierAlea = Random.getIntInclusive();
// const essais = [];
// jouer();

// Exercice 2
// Remplacer le code par une fonction constructeur tel que
// le code suivant s'exécuter
// Jeu est une fonction constructeur
// jouer une méthode du prototype

// Dans le constructeur créer les propriétés
// rl, entierAlea et essais comme les variables précédente
// dans jouer, y accéder via this

const game = new Jeu();
game.jouer();

// Exercice 3
// Ajouter des options à Jeu
// tel que on puisse l'utiliser comme ci dessous
// (prévoir des valeurs par défaut pour min et max)

// const game = new Jeu();
// const game = new Jeu({
//   min: 10,
//   max: 20,
// });
// const game = new Jeu({
//   min: 10,
// });
// const game = new Jeu({
//   max: 20,
// });

