export async function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const res = await fetch(url, {
    method: 'GET'
  });
  const todos = await res.json();

  return todos.slice(0, 10);
}

export async function fetchUserById(id) {
  const url = 'https://jsonplaceholder.typicode.com/users/' + id;
  const res = await fetch(url);
  const user = await res.json();

  return user;
}
