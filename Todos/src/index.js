import { addTodo, toggleTodos } from "./todos.js";
import { remove } from "./dom.js";
import { fetchTodos, fetchUserById } from "./api.js";

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
  // const todos = await fetchTodos();
  // const user = await fetchUserById(1);
  const [todos, user] = await Promise.all([
    fetchTodos(),
    fetchUserById(1),
  ]);
  for (const todo of todos) {
    todo.user = user;
    delete todo.userId;
    addTodo(todo, divElt);
  }
  console.log(todos);
})();

// Exercice AJAX
// Au submit du formulaire envoyer une requete POST
// vers https://jsonplaceholder.typicode.com/todos
// Avec un header Content-type: application/json
// et en body le json de la todo {"completed": false, "title": "abc"}
// Le serveur vous répondra en body la todo avec l'id
// Stocker cet id en data-todo-id de la ligne (div class="row") ou du bouton
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options

// Au click du bouton moins, envoyer une requete DELETE
// vers https://jsonplaceholder.typicode.com/todos/123
// (ou 123 est l'id de la todo)
