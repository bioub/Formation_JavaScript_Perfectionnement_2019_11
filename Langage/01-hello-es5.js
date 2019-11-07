// Module IIFE
// Immediately Invoked Function Expression
// (function() {
function hello(name) {
  return 'Hello ' + name;
}

var prenoms = ['Romain', 'Jean'];

prenoms.forEach((prenom) => {
  console.log(hello(prenom));
});
// }())
