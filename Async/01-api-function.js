// 'use strict';

globalThis.name = 'Romain'; // créé une variable globale
console.log(name);
function hello(n1, n2) {
  return `Hello ${n1}, ${n2}, my name is ${this.name}`;
}

console.log(hello('Jean', 'Eric'));

const contact = { name: 'Toto' };
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));
const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));

function bind(fct, applyThis) {
  return function() {
    return fct.apply(applyThis, arguments);
  };
}

const helloContactBind = bind(hello, contact);
console.log(helloContactBind('Jean', 'Eric'));

