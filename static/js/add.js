document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const inputField = document.getElementById("myInput");
   
    addButton.addEventListener("click", function () {
      const taskText = inputField.value.trim();
      if (taskText === "") return;
   
      // Save task to localStorage
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
   
      inputField.value = "";
    });
  });
  