// app.js (type=module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, query, orderBy
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


   const firebaseConfig = {
  apiKey: "AIzaSyD9NVqMoKZU4-vFGcITdKikd9kknyeEqII",
  authDomain: "book-management-app-22010.firebaseapp.com",
  projectId: "book-management-app-22010",
  storageBucket: "book-management-app-22010.firebasestorage.app",
  messagingSenderId: "394704272198",
  appId: "1:394704272198:web:d1415290b25b3185134347"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const booksCol = collection(db, "books");

const form = document.getElementById('addBookForm');
const booksGrid = document.getElementById('booksGrid');


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const price = Number(document.getElementById('price').value);
  const coverImageURL = document.getElementById('coverImageURL').value.trim();

  if (!title || !author || !coverImageURL) return alert("Please fill all fields");

  try {
    await addDoc(booksCol, { title, author, price, coverImageURL, createdAt: Date.now() });
    form.reset();
  } catch (err) {
    console.error("Add error:", err);
    alert("Error adding book. Check console.");
  }
});


const q = query(booksCol, orderBy('createdAt', 'desc'));
onSnapshot(q, (snapshot) => {
  booksGrid.innerHTML = '';
  snapshot.forEach(docSnap => {
    const id = docSnap.id;
    const book = docSnap.data();
    const card = createCard(book, id);
    booksGrid.appendChild(card);
  });
});


function createCard(book, id) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = book.coverImageURL || 'https://via.placeholder.com/300x180?text=No+Image';
  img.alt = book.title || "Cover";

  const h3 = document.createElement('h3');
  h3.textContent = book.title || 'Untitled';

  const pAuthor = document.createElement('p');
  pAuthor.innerHTML = `<strong>Author:</strong> <span class="author">${book.author || ''}</span>`;

  const pPrice = document.createElement('p');
  pPrice.innerHTML = `<strong>Price:</strong> ₹${book.price ?? 0}`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const btnUpdate = document.createElement('button');
  btnUpdate.className = 'update';
  btnUpdate.textContent = 'Update Author';
  btnUpdate.onclick = async () => {
    const newAuthor = prompt('Enter new author name', book.author || '');
    if (newAuthor !== null && newAuthor.trim() !== '') {
      try {
        await updateDoc(doc(db, 'books', id), { author: newAuthor.trim() });
      } catch (err) { console.error(err); alert('Update failed'); }
    }
  };

  const btnDelete = document.createElement('button');
  btnDelete.className = 'delete';
  btnDelete.textContent = 'Delete';
  btnDelete.onclick = async () => {
    const ok = confirm('Delete this book permanently?');
    if (!ok) return;
    try {
      await deleteDoc(doc(db, 'books', id));
    } catch (err) { console.error(err); alert('Delete failed'); }
  };

  const btnView = document.createElement('button');
  btnView.className = 'view';
  btnView.textContent = 'View Details';
  btnView.onclick = () => {
    alert(`Title: ${book.title}\nAuthor: ${book.author}\nPrice: ₹${book.price}\nImage: ${book.coverImageURL}`);
  };

  actions.appendChild(btnUpdate);
  actions.appendChild(btnDelete);
  actions.appendChild(btnView);

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(pAuthor);
  card.appendChild(pPrice);
  card.appendChild(actions);

  return card;
}