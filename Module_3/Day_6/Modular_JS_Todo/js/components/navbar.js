export default function renderNav(root) {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <div class="nav-left"><a href="index.html" class="brand">ModularTodos</a></div>
    <div class="nav-right">
      <a href="index.html">Home</a>
      <a href="signup.html">Signup</a>
      <a href="login.html">Login</a>
      <a href="todos.html">Todos</a>
    </div>
  `;
  root.appendChild(nav);
}
