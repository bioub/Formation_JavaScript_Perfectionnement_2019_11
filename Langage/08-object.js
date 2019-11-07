// Objet JavaScript équivalent à dictionnaire (key/value)
// Système dynamique (on ne peut pas garantir les propriétés/méthodes)

// équivalent :
// C -> struct
// C++ -> HashTable
// Java -> Map
// Python -> dict
// PHP -> Tableau associatif

// console.log(Math.sum(1, 2));

console.log(Math.PI);
const prop = 'PI';
console.log(Math[prop]);

Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));

// Mauvaise pratique d'étendre les objets du langage/api web/bibliothèque

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
// object literal
const coords = {
  x: 1,
  y: 2,
};

const MyMath = {
  sum: (a, b) => a + b,
};

// Cloner un objet (shallow clone : que le premier niveau)
// ES5
const cloneES5 = {};
for (const key in coords) {
  cloneES5[key] = coords[key];
}

// ES6
const cloneES6 = Object.assign({}, coords);

// ES9
const cloneES9 = {...coords};

// Mauvaise pratique d'ajouter des méthodes
// dans une syntaxe object literal (sauf s'il est créé
// une seule fois)
const coords1 = {
  x: 1,
  y: 2,
  sumXY: function() {
    return this.x + this.y;
  }
};

const coords2 = {
  x: 2,
  y: 3,
  sumXY: function() {
    return this.x + this.y;
  }
};

// La fonction sumXY est dupliquée
console.log(coords1.sumXY === coords2.sumXY); // false

// constructor function
function Coords(x, y) {
  this.x = x;
  this.y = y;
  // if (arguments[2] !== undefined) {
  //   this.z = arguments[2];
  // }
}

Coords.prototype.sumXY = function() {
  return this.x + this.y;
}

const coordsA = new Coords(1, 2);
const coordsB = new Coords(2, 3);
// delete coordsA.x;
console.log(typeof Coords); // function
console.log(typeof coordsA); // object

console.log(coordsA.x); // 1
console.log(coordsA.sumXY()); // 3
console.log(coordsA.hasOwnProperty('x')); // true
console.log(coordsA.hasOwnProperty('sumXY')); // false
console.log(coordsA.x !== undefined); // true
console.log(coordsA.sumXY !== undefined); // true
