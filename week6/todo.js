//Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
document.getElementById('all').addEventListener('click', handleAll);
document.getElementById('active').addEventListener('click', handleActive);
document.getElementById('completed').addEventListener('click', handleCompleted);

// Event handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    let name = e.target.getAttribute('name');
    if (name == 'checkButton')
        {checkTodo(e);}
    if (name == 'deleteButton') 
        deleteTodo(e); 
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

function handleAll(e) {
    document.querySelector('ul').innerHTML = ul;
}

function handleActive(e) {
    //
}

function handleCompleted(e) {
    //
}

//Helpers
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <button name="checkButton"><i class="fa-solid fa-square"></i></button>
        <span class="todo-item">${todo}</span>
        <button name="deleteButton"><i class="fa-solid fa-trash"></i></button>
        `;
    li.classList.add('todo-list-item');    
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') 
        item.style.textDecoration = 'none';
    else 
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}

function filterById(task) {
    if (task.isCompleted(task.id)) {
        return true
    }
    else
    return false;
}