// REST Params : conversion liste de valeurs -> tableau
function sum1(a, b, ...nbs) {
  let result = a + b;
  nbs.forEach((nb) => result += nb);
  return result;
}

console.log(sum1(1, 2, 3, 4)); // 10

// SPREAD : conversion tableau -> liste de valeurs
function sum2(a, b, c, d) {
  return a + b + c + d;
}

const nbs = [1, 2, 3, 4, 5, 6];
console.log(sum2(...nbs)); // 10

// var ...nbs = 1, 2, 3 REST
// var nbs = ...nbs SPREAD

// Cloner un tableau
const clone = [...nbs]; // SPREAD

// Destructurer
//    [1, 2       , 3    ,   4, 5, 6]
const [ , deux = 2, trois, ...autres] = nbs;

// Destructurer un objet
const coords = {x: 1, y: 2};

//    {x: 1, y: 2}
const {x: myX} = coords;
console.log(myX); // 1

const {x = 0, y = 0} = coords;
console.log(x); // 1
