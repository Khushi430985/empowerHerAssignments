// signup.js
import { createNavbar } from './components/navbar.js'; // not used here but ok to show module usage


const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim().toLowerCase();
const password = document.getElementById('password').value;


if (!name || !email || !password) return alert('Please fill all fields');


// Read users from localStorage
const usersJSON = localStorage.getItem('mt_users') || '[]';
const users = JSON.parse(usersJSON);


// Prevent duplicate email
if (users.some(u => u.email === email)) return alert('Email already registered. Please login.');


users.push({ name, email, password });
localStorage.setItem('mt_users', JSON.stringify(users));


alert('Signup successful - you can now login');
window.location.href = 'login.html';
});