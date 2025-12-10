// login.js
const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


const usersJSON = localStorage.getItem('mt_users') || '[]';
const users = JSON.parse(usersJSON);
const user = users.find(u => u.email === email && u.password === password);


if (!user) return alert('Invalid email or password');


// Save session flag (simple)
localStorage.setItem('mt_logged_in', JSON.stringify({ email: user.email, name: user.name }));


// Redirect to todos
window.location.href = 'todos.html';
});