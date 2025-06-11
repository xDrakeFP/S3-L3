const form = document.getElementById("todolist");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskElement = document.getElementById("taskform");
  const task = taskElement.value;
  const taskrow = document.createElement("li");
  taskrow.className = "assignedtask";
  taskrow.textContent = task;
  const button = document.createElement("button");
  button.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    taskrow.remove();
  });
  taskrow.appendChild(button);
  const divlist = document.getElementById("taskbox");
  divlist.appendChild(taskrow);
  form.reset();
});

const textlist = document.querySelector("ul");
textlist.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      console.log(e);
      e.target.classList.toggle("barrato");
    }
  },
  false
);
