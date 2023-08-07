function onFinishTask(checkbox) {
  const task = checkbox.closest('li');
  task.remove();
}

function onAddTask(event) {
  event.preventDefault();

  const taskInput = event.target.task;
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('A tarefa precisa de um título');
    return;
  }

  const taskHTML = `
    <li>
      <input type="checkbox" onclick="onFinishTask(this)" />
      <span>${taskText}</span>
    </li>
  `;

  document
    .querySelector('#todo-list')
    .insertAdjacentHTML('beforeend', taskHTML.trim());

  taskInput.value = '';
}

document.querySelector('#form-add-todo').addEventListener('submit', onAddTask);
