const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const readline = require('readline');

class Jeu {
  constructor(options = {}) {
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;
    // const { min = 0, max = 100 } = options;
    // Object.assign(this, options, {min: 0, max: 100});
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.entierAlea = Random.getIntInclusive(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez saisi : ' + this.essais.join(' - '));
    }
    this._rl.question('Quel est le nombre entier ? ', (saisie) => {
      console.log('Vous avez saisi : ' + saisie);
      const entierSaisi = parseInt(saisie);
      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre entier');
        return this.jouer();
      }
      this.essais.push(entierSaisi);
      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }
      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }
      console.log('Gagné');
      this._rl.close();
    });
  }
}


// Exercice 1
// Avec la syntaxe object literal :
// regrouper les 4 fonction aléatoire dans un objet Random
// const Random = {

// };

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
