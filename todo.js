function Todo(id, title, isCompleted = false) {
  this.id = id;
  this.title = title;
  this.isCompleted = isCompleted;
}

let todos = [];
let id = 0;

function addTodo() {
  const title = document.getElementById("title").value;
  const todo = new Todo(id, title);
  id++;
  todos.push(todo);
}

function deleteItem(el) {
  const itemId = parseInt(el.parentNode.getAttribute("data"));
  console.log(itemId);
  todos = todos.filter(function (item) {
    return item.id !== itemId;
  });
  draw();
}

const listContainer = document.getElementsByClassName("listContainer")[0];

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addTodo();
    console.log(todos);
    draw();
  }
});

document.getElementById("add").addEventListener("click", function () {
  addTodo();
  console.log(todos);
  draw();
});

function draw() {
  listContainer.innerHTML = "";
  todos.forEach((item) => {
    const list = `
        <div class="listBox" data="${item.id}">
            <div class="listText">${item.title}</div>
            <i id="delete" onclick="deleteItem(this)" class="fa-solid fa-circle-xmark"></i>
        </div>
    `;
    listContainer.innerHTML += list;
  });
}
