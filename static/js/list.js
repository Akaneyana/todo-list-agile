document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("ulList");
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => {
      li.remove();
      removeTask(task);
    };

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");
    doneBtn.onclick = () => {
      li.classList.toggle("completed");
    };

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  function removeTask(taskToRemove) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter(task => task !== taskToRemove);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
});
