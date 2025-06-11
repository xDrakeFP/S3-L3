const form = document.getElementById("todolist");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskElement = document.getElementById("taskform");
  const task = taskElement.value;
  const taskrow = document.createElement("div");
  taskrow.classList.add("riga");
  taskrow.innerHTML = `<li class="assignedtask">${task}</li> <button onclick="deleteTask(event)"><i class="fas fa-trash-alt"></i></button>`;
  const divlist = document.getElementById("taskbox");
  divlist.appendChild(taskrow);
  form.reset();
});
const deleteTask = (e) => {
  e.target.parentElement.remove();
};

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
