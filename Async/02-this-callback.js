class Contact {
  constructor(name) {
    this.name = name;
  }
  hello(n1, n2) {
    console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
  }
  helloAsync(n1, n2) {
    setTimeout(() => {
      console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
    }, 1000);
  }
  helloAsyncMethod(n1, n2) {
    setTimeout(this.hello.bind(this), 1000);
  }
}

const romain = new Contact('Romain');
romain.hello('Jean', 'Eric');
romain.helloAsync('Jean', 'Eric');

/*
const btns = document.querySelectorAll('button');

for (const btn of btns) {
  btn.addEventListener('click', (event) => {
    // NE PLUS UTILISER THIS ici
    console.log(event.target.innerText);
  });
}
*/
