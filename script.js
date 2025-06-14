document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");
  const list = document.getElementById("task-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      input.value = "";
    }
  });

  function addTask(text) {
    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = text;

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✅";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
});
