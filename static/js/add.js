document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const inputField = document.getElementById("myInput");
  const categorySelect = document.getElementById("categorySelect");
  const prioritySelect = document.getElementById("prioritySelect");

  // Disable button by default
  addButton.disabled = true;

  // Enable button only when all fields are valid
  function checkInputs() {
    addButton.disabled =
      inputField.value.trim() === "" ||
      categorySelect.value === "" ||
      prioritySelect.value === "";
  }

  inputField.addEventListener("input", checkInputs);
  categorySelect.addEventListener("change", checkInputs);
  prioritySelect.addEventListener("change", checkInputs);

  addButton.addEventListener("click", function () {
    const taskText = inputField.value.trim();
    const selectedCategory = categorySelect.value;
    const selectedPriority = prioritySelect.value;

    if (taskText === "" || selectedCategory === "" || selectedPriority === "") return;

    const newTask = {
      text: taskText,
      category: selectedCategory,
      priority: selectedPriority,
    };

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear inputs
    inputField.value = "";
    categorySelect.value = "";
    prioritySelect.value = "";
    checkInputs();
  });
});