// Objet JavaScript équivalent à dictionnaire (key/value)
// Système dynamique (on ne peut pas garantir les propriétés/méthodes)

// équivalent :
// C -> struct
// C++ -> HashTable
// Java -> Map
// Python -> dict
// PHP -> Tableau associatif

// console.log(Math.sum(1, 2));

Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

function pileOuFace() {
  return Math.random() > 0.5 ? 'pile' : 'face';
}

const randomBackup = Math.random;
Math.random = () => 0.75;

console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());

Math.random = randomBackup;

console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());

// Créer un objet directement (pas besoin de classe)
const coords = {
  x: 1,
  y: 2,
};

