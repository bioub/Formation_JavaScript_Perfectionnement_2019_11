const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {
  rl.question('Quel est le nombre entier ? ', (saisie) => {
    console.log('Vous avez saisi : ' + saisie);
    // si le nombre est trouvé :
    // rl.close();

    // sinon
    jouer();
  });
}

jouer();
