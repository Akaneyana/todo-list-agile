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
   
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
   
    function removeTask(taskToRemove) {
      const updated = tasks.filter(task => task !== taskToRemove);
      localStorage.setItem("tasks", JSON.stringify(updated));
    }
  });