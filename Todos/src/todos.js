/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} containerElt
 */
export function addTodo(todo, containerElt) {
  /*
  <div class="row">
    <input type="checkbox" name="completed" class="completed">
    <input type="text" name="title" class="title">
    <button>-</button>
  </div>
  */
  const rowElt = document.createElment('div');
  // rowElt.className = 'row';
  rowElt.classList.add('row');
  containerElt.appendChild(rowElt);

  // Exercice 1 :
  // Sur le même principe que rowElt :
  // Créer les 3 balises comme dans le commentaire ci-dessus
  // La checkbox doit être cochée selon la valeur de todo.completed
  // L'input de type text doit être rempli selon todo.title

  // Exercice 2 :
  // Ecouter l'événement click du bouton moins (dans la fonction addTodo)
  // Utiliser la méthode removeChild -> MDN
  // Eventuellement parentNode et event.target

  // Exercice 3 :
  // Dans le fichier index.js
  // Ecouter le clic de la checkbox dont l'id est toggle
  // Selon sa valeur de checked, cocher ou décocher celles
  // présentes dans la list
  // -> document.querySelectorAll (à faire au moment du clic)
}
