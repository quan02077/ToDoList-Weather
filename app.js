let addBtn = document.getElementById('addTaskBtn');
let saveBtn = document.getElementById('saveTaskBtn');
let taskNameInput = document.getElementById('taskName');
let closeBtn = document.getElementById('closeTab');

let listToDo = JSON.parse(localStorage.getItem('toDoList')) || [];

addBtn.addEventListener('click', () => {
    addTaskForm.classList.remove('d-none');
    taskList.classList.replace('col-lg-12', 'col-lg-8');
});

closeBtn.addEventListener('click', () => {
    addTaskForm.classList.add('d-none');
    taskList.classList.replace('col-lg-8', 'col-lg-12');
});

if (saveBtn) {
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const taskName = taskNameInput.value.trim();
        if (taskName === '') {
            alert('Vui lòng nhập tên công việc');
            return;
        }
        const taskObject = {
            id: listToDo.length > 0 ? listToDo[listToDo.length - 1].id + 1 : 0,
            name: taskName,
        };
        listToDo.push(taskObject);
        localStorage.setItem('toDoList', JSON.stringify(listToDo));
        renderTaskList();
        taskNameInput.value = '';
        alert('Thêm công việc thành công!');
    })
}
const taskTableBody = document.querySelector('#tasksTable tbody');
function renderTaskList() {
    let html = '';
    listToDo.forEach((taskItem, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${taskItem.name}</td>
                <td><span class="badge bg-warning fw-bold">Chưa hoàn thành</span></td>
                <td class="text-center task-actions">
                    <button class="btn btn-sm btn-danger bi bi-trash task-action-btn" data-id="${taskItem.id}"></button>
                    <button class="btn btn-sm btn-warning bi bi-pencil task-action-btn" data-id="${taskItem.id}"></button>
                    <button class="btn btn-sm btn-success bi bi-check-circle task-action-btn" data-id="${taskItem.id}"></button>
                </td>
            </tr>
        `;
    });
    taskTableBody.innerHTML = html;
}

renderTaskList();
