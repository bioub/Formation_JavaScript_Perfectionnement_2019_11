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

const entierAlea = Math.floor(Math.random() * 100);
const essais = [];
jouer();

// ^
// |
// |                                 question         question
// |question                         jouer            jouer
// |jouer    ...                     =>       ...     =>
// +---------------------------------ENTREE-----------ENTREE------> temps
//
