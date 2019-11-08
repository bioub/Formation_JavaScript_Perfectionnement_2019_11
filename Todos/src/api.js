export async function fetchTodos() {
  const url = 'http://localhost:3000/todos';
  const res = await fetch(url, {
    method: 'GET',
  });
  const todos = await res.json();

  return todos.slice(0, 10);
}

export async function postTodo(todo) {
  const url = 'http://localhost:3000/todos';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return await res.json();
}

export async function deleteTodoById(id) {
  const url = 'http://localhost:3000/todos/' + id;
  const res = await fetch(url, {
    method: 'DELETE',
  });
  return await res.json();
}

export async function fetchUserById(id) {
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  const res = await fetch(url);
  const user = await res.json();

  return user;
}
