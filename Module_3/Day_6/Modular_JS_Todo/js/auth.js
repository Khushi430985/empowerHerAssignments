// auth utilities: signup, login, protectRoute, logout, getCurrentUser
const USERS_KEY = 'modular_users_v1';
const SESSION_KEY = 'modular_session_v1';

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    return [];
  }
}
function writeUsers(u) {
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
}

export function signup({ name, email, password, confirmPassword }) {
  if (!name || !email || !password) {
    return { success: false, message: 'All fields are required.' };
  }
  if (password !== confirmPassword) {
    return { success: false, message: "Passwords don't match." };
  }
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Email already registered.' };
  }
  users.push({ name, email, password }); // simple storage (no hashing for demo)
  writeUsers(users);
  return { success: true, message: 'Signup successful. Redirecting to login...' };
}

export function login({ email, password }) {
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: 'Invalid credentials.' };
  }
  // set session
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email: user.email, name: user.name }));
  return { success: true, message: 'Login successful.' };
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
}

export function protectRoute() {
  const session = getCurrentUser();
  if (!session) {
    // not logged in → redirect to login
    location.href = 'login.html';
  }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}
