/* 
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myInput');
    const addButton = document.getElementById('addButton');
    const ulList = document.getElementById('ulList');

    // Add a new task
    addButton.addEventListener('click', () => {
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;

            // Add a close button
            const closeButton = document.createElement('span');
            closeButton.textContent = 'X';
            closeButton.className = 'close';
            closeButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(closeButton);
            ulList.appendChild(li);
            input.value = ''; // Clear the input field
        }
    });
}); */

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const inputField = document.getElementById("myInput");
    const list = document.getElementById("ulList");
  
    addButton.addEventListener("click", addTodo);
  
    function addTodo() {
      const taskText = inputField.value.trim();
      if (taskText === "") return;
  
      const li = document.createElement("li");
      li.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(deleteBtn);
      list.appendChild(li);
      inputField.value = "";
    }
  });
  