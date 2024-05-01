fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(result => {
    result.forEach( todo => {
      console.log(todo.title);
    })
 
  })
  .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", () => {
  // Get references to the necessary DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Add event listener to the 'Add Task' button
  addTaskBtn.addEventListener("click", () => {
    // Get the trimmed value of the task input
    const taskValue = taskInput.value.trim();

    // Check if the task input is not empty
    if (taskValue !== "") {
      // Create a new list item element
      const li = document.createElement("li");

      // Create a button for checking off tasks
      const checkBtn = document.createElement("button");
      checkBtn.textContent = "✓";
      checkBtn.classList.add("check-btn", "btn", "btn-success", "btn-sm", "me-2");
      // Add event listener to toggle the 'done' class on the list item
      checkBtn.addEventListener("click", () => {
        li.classList.toggle("done");
      });

      // Create a span element for the task text
      const taskText = document.createElement("span");
      taskText.textContent = taskValue;
      // Append the check button and task text to the list item
      li.appendChild(checkBtn);
      li.appendChild(taskText);

      // Create a button for deleting tasks
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.classList.add("delete-btn", "btn", "btn-danger", "btn-sm", "ms-2");
      // Add event listener to remove the list item and horizontal rule when delete button is clicked
      deleteBtn.addEventListener("click", () => {
        li.remove();
        hr.remove(); // Remove the horizontal rule
      });

      // Append the delete button to the list item
      li.appendChild(deleteBtn);
      // Append the list item to the task list
      taskList.appendChild(li);

      // Create a horizontal rule to separate tasks visually
      const hr = document.createElement("hr");
      // Append the horizontal rule to the task list
      taskList.appendChild(hr);

      // Clear the task input field after adding the task
      taskInput.value = "";
    } else {
      // Alert the user if the task input is empty
      alert("Please enter a task.");
    }
  });
});
