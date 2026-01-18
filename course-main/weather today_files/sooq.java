let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

// تحميل المهام المحفوظة عند فتح الصفحة
window.onload = function () {
  if (localStorage.getItem("tasks")) {
    taskList.innerHTML = localStorage.getItem("tasks");
    addTaskEvents();
  }
};

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">🗑️</button>
  `;

  li.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
      saveTasks();
    }
  });

  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function addTaskEvents() {
  let items = document.querySelectorAll("#task-list li");
  items.forEach((li) => {
    li.addEventListener("click", function (e) {
      if (e.target.tagName !== "BUTTON") {
        li.classList.toggle("completed");
        saveTasks();
      }
    });
  });
}