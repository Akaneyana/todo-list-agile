document.addEventListener("DOMContentLoaded", function () {
  const skoleList = document.getElementById("skoleList");
  const hjemmeList = document.getElementById("hjemmeList");
  const fritidList = document.getElementById("fritidList");

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => {
      li.remove();
      removeTask(task);
    };

    li.appendChild(deleteBtn);

    switch (task.category) {
      case "Skole":
        skoleList.appendChild(li);
        break;
      case "Hjemme":
        hjemmeList.appendChild(li);
        break;
      case "Fritid":
        fritidList.appendChild(li);
        break;
    }
  });

  function removeTask(taskToRemove) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter(task =>
      !(task.text === taskToRemove.text && task.category === taskToRemove.category)
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
});
