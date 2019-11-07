import { addTodo } from "./todos.js";

/** @type {HTMLFormElement} */
const formElt = document.querySelector('.new-todo');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('#todo');
/** @type {HTMLDivElement} */
const divElt = document.querySelector('.list');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo({
    id: Math.random(),
    title: 'Acheter du pain',
    completed: false,
  }, divElt);
});
