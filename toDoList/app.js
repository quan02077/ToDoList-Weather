let addBtn = document.getElementById('addTaskBtn');
let saveBtn = document.getElementById('saveTaskBtn');
let taskNameInput = document.getElementById('taskName');
let closeBtn = document.getElementById('closeTab');
let addTaskForm = document.getElementById('addTaskForm');
let taskList = document.getElementById('taskList');
let formatName = document.getElementById('formatName');
let taskTableBody = document.querySelector('#tasksTable tbody');
let progressContainer = document.querySelector('.custom-progress');
let progressBar = document.querySelector('.custom-progress-bar');
let progressPercentText = document.querySelector('.custom-progress-bar span');
let progressSummaryText = document.querySelector('.progress-summary strong');

let listToDo = JSON.parse(localStorage.getItem('toDoList')) || [];
let editingId = null;
let animatedAddedId = null;
let animatedEditedId = null;

function saveToLocalStorage() {
    localStorage.setItem('toDoList', JSON.stringify(listToDo));
}

function openTaskForm() {
    addTaskForm.classList.remove('d-none');
    taskList.classList.replace('col-lg-12', 'col-lg-8');
}

function closeTaskForm() {
    addTaskForm.classList.add('d-none');
    taskList.classList.replace('col-lg-8', 'col-lg-12');
    resetForm();
}

function resetForm() {
    editingId = null;
    taskNameInput.value = '';
    formatName.innerHTML = '<strong>Thêm công việc</strong>';
    saveBtn.innerHTML = ' LƯU';
}

function getNextId() {
    if (listToDo.length === 0) {
        return 1;
    }

    return Math.max(...listToDo.map(task => Number(task.id))) + 1;
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function renderTaskList() {
    let html = '';

    listToDo.forEach((taskItem, index) => {
        const taskId = String(taskItem.id);
        const animationClass = taskId === animatedAddedId
            ? 'task-row-enter'
            : taskId === animatedEditedId
                ? 'task-row-edit'
                : '';

        html += `
            <tr class="${animationClass}">
                <td>${index + 1}</td>
                <td>${escapeHtml(taskItem.name)}</td>
                <td><span class="badge bg-${taskItem.completed ? 'success' : 'warning'} fw-bold">${taskItem.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}</span></td>
                <td class="text-center task-actions">
                    <button class="deleteBtn btn btn-sm btn-danger bi bi-trash task-action-btn" data-id="${taskItem.id}"></button>
                    <button class="editBtn btn btn-sm btn-warning bi bi-pencil task-action-btn" data-id="${taskItem.id}"></button>
                    <button class="completeBtn btn btn-sm btn-success bi bi-check-circle task-action-btn" data-id="${taskItem.id}"></button>
                </td>
            </tr>
        `;
    });

    taskTableBody.innerHTML = html;
    animatedAddedId = null;
    animatedEditedId = null;
    updateProgress();
}

function updateProgress() {
    const totalTasks = listToDo.length;
    const completedTasks = listToDo.filter(task => task.completed).length;
    const percent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    progressBar.style.width = percent + '%';
    progressContainer.setAttribute('aria-valuenow', percent);
    progressPercentText.innerText = percent + '%';
    progressSummaryText.innerText = `${completedTasks}/${totalTasks} công việc - ${percent}%`;
}

addBtn.addEventListener('click', () => {
    resetForm();
    openTaskForm();
});

closeBtn.addEventListener('click', closeTaskForm);

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const taskName = taskNameInput.value.trim();

    if (taskName === '') {
        alert('Vui lòng nhập tên công việc');
        return;
    }

    if (editingId === null) {
        const newTaskId = getNextId();

        listToDo.push({
            id: newTaskId,
            name: taskName,
            completed: false,
        });

        animatedAddedId = String(newTaskId);
        alert('Thêm công việc thành công!');
    } else {
        const taskToEdit = listToDo.find(task => String(task.id) === editingId);

        if (taskToEdit) {
            taskToEdit.name = taskName;
            animatedEditedId = editingId;
            alert('Cập nhật công việc thành công!');
        }
    }

    saveToLocalStorage();
    renderTaskList();
    closeTaskForm();
});

taskTableBody.addEventListener('click', (e) => {
    const deleteButton = e.target.closest('.deleteBtn');
    const editButton = e.target.closest('.editBtn');
    const completeButton = e.target.closest('.completeBtn');

    if (deleteButton) {
        const taskId = deleteButton.dataset.id;
        listToDo = listToDo.filter(task => String(task.id) !== taskId);

        if (editingId === taskId) {
            closeTaskForm();
        }

        saveToLocalStorage();
        renderTaskList();
        return;
    }

    if (editButton) {
        const taskId = editButton.dataset.id;
        const taskToEdit = listToDo.find(task => String(task.id) === taskId);

        if (!taskToEdit) {
            return;
        }

        editingId = taskId;
        taskNameInput.value = taskToEdit.name;
        formatName.innerHTML = '<strong>Cập nhật công việc</strong>';
        saveBtn.innerHTML = ' CẬP NHẬT';
        openTaskForm();
        taskNameInput.focus();
    }

    if (completeButton) {
        const taskId = completeButton.dataset.id;
        const taskToComplete = listToDo.find(task => String(task.id) === taskId);

        if (!taskToComplete) {
            return;
        }

        taskToComplete.completed = !taskToComplete.completed;
        saveToLocalStorage();
        renderTaskList();
    }
});

renderTaskList();
