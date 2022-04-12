const theme = document.querySelector('.theme img');
const body = document.querySelector('body');
const h1 = document.querySelector('header h1');
const addTaskBtn = document.querySelector('.add-btn');
const addTaskText = document.querySelector('.add-text');
const taskList = document.querySelector('.task-list');
const search = document.querySelector('.search input');
const checkBox = document.querySelectorAll('.cancel-task input');
const hide = document.querySelector('.completed i');


const addTodos = todos => {
    let html = `
    <li class="task-item m-2 bg-light rounded d-flex justify-content-between align-content-center border p-3">
        <div class="cancel-task fw-bold">
            <input type="checkbox" name="done" class = "done me-2">
            <span>${todos}</span>
        </div>
        <i class="fa-solid fa-trash delete"></i>    
    </li>`;

    taskList.innerHTML += html;
};






// Dark and Light mode
theme.addEventListener('click', (e) => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')){
        theme.src = 'asset/sun.png';
        h1.style.color = '#fff';
    } else {
        theme.src = 'asset/moon.png';
        h1.style.color = '#000';
    }
});

// To show add todo input field
addTaskBtn.addEventListener('click', () => {
    addTaskBtn.style.display = 'none';
    addTaskText.classList.remove('d-none');
});

// Submitting the input field
addTaskText.addEventListener('submit', (e) => {
    e.preventDefault();
    let todos = addTaskText.task.value.trim();

    if(todos.length) {
        addTodos(todos);
        addTaskText.reset();
    }
});



taskList.addEventListener('click', e => {
    // Deleting task
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }  
});

// Completing or canceling a task
taskList.addEventListener('change', (e) => {
        if(e.target.checked) {
            e.target.nextElementSibling.style.textDecoration = 'line-through';
        } else {
            e.target.nextElementSibling.style.textDecoration = 'none';
            }
});

// Searching the task list
let filteredTask = (term) => {

    Array.from(taskList.children)
        .filter( task => !task.textContent.toLowerCase().includes(term))
            .forEach( task => task.classList.add('filtered'));

    Array.from(taskList.children)
        .filter( task => task.textContent.toLowerCase().includes(term))
            .forEach( task => task.classList.remove('filtered'));

};

search.addEventListener('keyup', e => {
    let term = search.value.trim().toLowerCase();

    filteredTask(term);
});

hide.addEventListener('click', e => {
    // console.log(e.target);
    e.target.classList.toggle('fa-chevron-up');
    e.target.classList.toggle('fa-chevron-down');
    // if(e.target.classList.contains())

});
