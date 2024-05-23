const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskForm = document.getElementById('add-task-form');

function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerText = task;
    // Add functionality to remove the task item (optional)
    listItem.addEventListener('click', function() {
        this.remove();
    });
    todoList.appendChild(listItem);
    newTaskInput.value = ''; // Clear the input field after adding the task
}

addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const newTask = newTaskInput.value.trim(); // Get the new task text and trim whitespace
    if (newTask) {
        addTask(newTask);
    }
});