import { displayTodos } from './displayTodos.js';

export async function fetchAndRenderTodos() {
  const container = document.getElementById('todos-list');
  container.innerHTML = '<p>Loading todos...</p>';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=30');
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    displayTodos(data, container);
  } catch (err) {
    container.innerHTML = `<p class="error">Failed to load todos. ${err.message}</p>`;
  }
}
