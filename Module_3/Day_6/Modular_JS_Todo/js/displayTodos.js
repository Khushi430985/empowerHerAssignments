// Exports a function to render todos into a container element
export function displayTodos(data, container) {
  container.innerHTML = ''; // clear
  if (!Array.isArray(data) || data.length === 0) {
    container.innerHTML = '<p>No todos found.</p>';
    return;
  }

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'todo-card';
    div.innerHTML = `
      <h4>${item.title}</h4>
      <p>Status: <strong>${item.completed ? 'Completed' : 'Pending'}</strong></p>
      <p class="small">ID: ${item.id} • User: ${item.userId}</p>
    `;
    if (item.completed) div.classList.add('completed');
    container.appendChild(div);
  });
}
