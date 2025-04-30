document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const inputField = document.getElementById("myInput");
  const categorySelect = document.getElementById("categorySelect");

  // Disable button by default
  addButton.disabled = true;

  // Enable button only when both fields are valid
  function checkInputs() {
    addButton.disabled = inputField.value.trim() === "" || categorySelect.value === "";
  }

  inputField.addEventListener("input", checkInputs);
  categorySelect.addEventListener("change", checkInputs);

  addButton.addEventListener("click", function () {
    const taskText = inputField.value.trim();
    const selectedCategory = categorySelect.value;

    if (taskText === "" || selectedCategory === "") return;

    const newTask = {
      text: taskText,
      category: selectedCategory
    };

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Tøm input
    inputField.value = "";
    categorySelect.value = "";
    checkInputs();
  });
});
