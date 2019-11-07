function randomTimeout(val) {
  const random = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, random);
  });
}

randomTimeout('A').then((val) => console.log(val));
randomTimeout('B').then((val) => console.log(val));
randomTimeout('C').then((val) => console.log(val));
randomTimeout('D').then((val) => console.log(val));
randomTimeout('E').then((val) => console.log(val));
console.log('F');

Promise.all([
  randomTimeout('A'),
  randomTimeout('B'),
  randomTimeout('C'),
  randomTimeout('D'),
  randomTimeout('E')
]).then((vals) => {
  console.log(vals); // ['A', 'B', 'C', 'D', 'E']
});

const letters = ['X', 'Y', 'Z'];

Promise.all(letters.map((letter) => randomTimeout(letter))).then((vals) => {
  console.log(vals); // ['X', 'Y', 'Z']
});
