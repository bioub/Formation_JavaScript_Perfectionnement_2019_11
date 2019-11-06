// function timeout(delayMs) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delayMs);
//     }, delayMs);
//   });
// }

// (async () => {
//   const delay = await timeout(2000);
//   console.log(delay + 'ms');
// })()

// timeout(1000)
//   .then((delay) => console.log(delay + 'ms'));

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000)
  .subscribe((delay) => console.log(delay + 'ms'));
