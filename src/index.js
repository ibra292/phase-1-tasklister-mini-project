document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('new-task-description');
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
      tasksList.appendChild(taskItem);
      taskInput.value = '';
    }
  });
});
