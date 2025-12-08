// using this to store data in local storage
const STORAGE_KEY = "todosData";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// this function will fetch first 20 todos from the API
async function loadTodos() {
  try {
    let res = await fetch(API_URL);
    let data = await res.json();

    // taking only 20 items
    let first20 = data.slice(0, 20);

    // saving in local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(first20));

    displayTodos();
  } catch (error) {
    console.log("Error while fetching todos", error);
  }
}

// getting todos from local storage
function getTodos() {
  let list = localStorage.getItem(STORAGE_KEY);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

// saving updated todos back to local storage
function saveTodos(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

// function to show all todos on the page
function displayTodos() {
  let container = document.getElementById("todo-container");
  container.innerHTML = ""; // clearing old data

  let todos = getTodos();

  // message when nothing is left
  if (todos.length === 0) {
    let msg = document.createElement("h3");
    msg.innerText = "No Todos Available";
    container.append(msg);
    return;
  }

  // loop to show each todo
  todos.forEach((todo) => {
    let div = document.createElement("div");
    div.className = "todo-card";

    let title = document.createElement("p");
    title.className = "todo-title";
    title.innerText = todo.title;

    let status = document.createElement("p");
    status.className = "todo-meta";
    status.innerText = "Completed: " + (todo.completed ? "Yes" : "No");

    // button to complete/incomplete todo
    let toggleBtn = document.createElement("button");
    toggleBtn.className = "btn btn-toggle";
    toggleBtn.innerText = todo.completed ? "Mark Incomplete" : "Mark Complete";
    toggleBtn.addEventListener("click", function () {
      toggleTodo(todo.id);
    });

    // button to delete
    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-delete";
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function () {
      deleteTodo(todo.id);
    });

    let btnBox = document.createElement("div");
    btnBox.className = "btns";
    btnBox.append(toggleBtn, delBtn);

    div.append(title, status, btnBox);

    // marking style if completed
    if (todo.completed) {
      div.classList.add("completed");
    }

    container.append(div);
  });
}

// deleting a todo by id
function deleteTodo(id) {
  let list = getTodos();
  let updated = list.filter((item) => item.id !== id);
  saveTodos(updated);
  displayTodos();
}

// toggling completed status
function toggleTodo(id) {
  let list = getTodos();

  let updated = list.map((t) => {
    if (t.id === id) {
      return { ...t, completed: !t.completed };
    }
    return t;
  });

  saveTodos(updated);
  displayTodos();
}

// adding a new todo
document.getElementById("add-btn").addEventListener("click", function () {
  let input = document.getElementById("new-title").value.trim();

  if (input === "") {
    alert("Please write something");
    return;
  }

  // creating a simple unique id for new todo
  let newTodo = {
    id: Date.now(),
    title: input,
    completed: false,
  };

  let list = getTodos();
  list.unshift(newTodo);
  saveTodos(list);

  // clearing input field
  document.getElementById("new-title").value = "";

  displayTodos();
});

// pressing enter also adds todo
document.getElementById("new-title").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("add-btn").click();
  }
});

// loading data when page opens
if (!localStorage.getItem(STORAGE_KEY)) {
  loadTodos();
} else {
  displayTodos();
}