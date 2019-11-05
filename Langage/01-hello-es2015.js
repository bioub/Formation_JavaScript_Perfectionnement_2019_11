// Module IIFE
// Immediately Invoked Function Expression
// (function() {
/**
 * Une fonction qui dit bonjour
 * @param {string} name Le prénom
 * @returns {string} Le message de salutations
 */
function hello(name) {
  return `Hello ${name.toUpperCase()}`;
}

/** @type {string[]} */
const prenoms = ['Jean', 'Eric'];

prenoms.forEach((prenom) => {
  console.log(hello(prenom));
});
// }())
