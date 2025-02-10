const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();  

    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        newTask.addEventListener('click', toggleTask);

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

function toggleTask(event) {
    const task = event.target;

    task.classList.toggle('completed');
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
