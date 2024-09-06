document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Proszę wpisać treść zadania.");
        return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const completeButton = document.createElement('button');
    completeButton.textContent = "✔️";
    completeButton.className = "complete-button";
    completeButton.onclick = function() {
        li.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = "";
}
