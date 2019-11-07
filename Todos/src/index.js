import { addTodo, toggleTodos } from "./todos.js";
import { remove } from "./dom.js";

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
    remove(event.target.parentNode);
  }
});

toggleElt.addEventListener('click', (event) => {
  toggleTodos(toggleElt.checked);
});
