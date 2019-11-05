const globalOuModule = 'globalOuModule';
function externe() {
  const closure = 'closure';
  function interne() {
    const local = 'local';
    console.log(local);
    console.log(closure);
    console.log(globalOuModule);
  }
  interne();
}

externe();
console.log('typeof externe', typeof externe); // function
console.log('typeof interne', typeof interne); // undefined

// pile d'appels
// ^
// |
// |lg - lg - lg
// |interne
// |externe      - lg - lg
// +-------------------------------------------------> temps
