import { addTodo, toggleTodos } from "./todos.js";
import { remove } from "./dom.js";
import { fetchTodos } from "./api.js";

/** @type {HTMLFormElement} */
const formElt = document.querySelector('.new-todo');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const divElt = document.querySelector('.list');
/** @type {HTMLInputElement} */
const toggleElt = document.querySelector('#toggle');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo({
    id: Math.random(),
    title: inputElt.value,
    completed: false,
  }, divElt);
});

divElt.addEventListener('click', (event) => {
  if (event.target instanceof HTMLButtonElement) {
    event.target.parentNode.classList.add('fade-out');
    setTimeout(() => {
      remove(event.target.parentNode);
    }, 1000);
  }

});

toggleElt.addEventListener('click', (event) => {
  toggleTodos(toggleElt.checked);
});

// CSSOM changement d'état
// formElt.addEventListener('mouseenter', (event) => {
//   formElt.classList.toggle('survole');
//   // console.log({x: event.clientX, y: event.clientY});
// });

// CSSOM calculé
// divElt.addEventListener('mousemove', () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const colorValue = `rgb(${r}, ${g}, ${b})`;
//   divElt.style.backgroundColor = colorValue;
// });

// Animation
// function step(timestamp) {
//   formElt.style.marginLeft = Math.floor(timestamp / 10) + 'px';
//   if (timestamp > 2000) {
//     return;
//   }
//   requestAnimationFrame(step);
// }
// requestAnimationFrame(step);

(async () => {
  const todos = await fetchTodos();
  for (const todo of todos) {
    addTodo(todo, divElt);
  }
})();
