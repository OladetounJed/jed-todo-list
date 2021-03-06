//DOM Calling 

const newTask = document.querySelector(".task");
const submitTask = document.querySelector(".submit-btn");
const filter = document.querySelector(".filter");
const form = document.querySelector(".task-form");
const taskCollection = document.querySelector(".task-collection");
const clearBtn = document.querySelector(".clear-task");

//Load All Event Listeners



function loadEventListeners() {
    //All Event Listeners

    //DOM Load Event
document.addEventListener('DOMContentLoaded',  getTasks)

    //Add New Task
    form.addEventListener('submit', addTask);

    //Remove Tasks
    taskCollection.addEventListener('click', removeTask)

    //Clear Tasks
    clearBtn.addEventListener('click', clearTasks)

    //Filter Tasks
    filter.addEventListener('keyup', filterTask)
}

//Get Task from Local Storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(tasks){
        //Ceate li Element 
        const li = document.createElement("li");

        //Add Class Name To Li Element 
        li.className = "collection-item";

        //Create Text Node For Task
        let taskText = document.createTextNode(tasks);

        // Append Text Node into Li element
        li.appendChild(taskText);

        //Create A Element To A Element 
        const link = document.createElement("a");

        //Add Class Name 
        link.className = "delete-task";

        //Add Font to A
        link.innerHTML = '<i class="fas fa-trash-alt"></i>';

        //Append a Element to Li Element
        li.appendChild(link);


        //Append Li to Ul (Task COllection)
        taskCollection.appendChild(li);

    })
}

//Add Task

function addTask(e){
    if (newTask.value === ''){
        alert("Add A New Task")
    }
    else{
    
    
//Ceate li Element 
const li = document.createElement("li");

//Add Class Name To Li Element 
li.className = "collection-item";

//Create Text Node For Task
let taskText = document.createTextNode(newTask.value);

// Append Text Node into Li element
li.appendChild(taskText);

//Create A Element To A Element 
const link = document.createElement("a");

//Add Class Name 
link.className = "delete-task";

//Add Font to A
link.innerHTML = '<i class="fas fa-trash-alt"></i>';

//Append a Element to Li Element
li.appendChild(link);


//Append Li to Ul (Task COllection)
taskCollection.appendChild(li);

//Store In Local Storage 
storeTaskInLocalStorage(newTask.value);

newTask.value = '';
    }


e.preventDefault();

};

//Store Task

function storeTaskInLocalStorage(newTask) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-task')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
}
}

//Remove Tasks From Local Storage 

function removeTaskFromLocalStorage(taskItem){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks =JSON.parse(localStorage.getItem('tasks'));
    
}

tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
        tasks.splice(index, 1);
    }
 })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//Clear Tasks
function clearTasks(e){
    if(confirm("Are you sure you want to clear your tasks?")){
        taskCollection.innerHTML = "";

        clearTasksFromLocalStorage();
    }
}

//Clear Tasks From Local Storage

function clearTasksFromLocalStorage(){

localStorage.clear();
}

//Filter Tasks

function filterTask(e){
    const text = e.target.value.toLowerCase();

   document.querySelectorAll('.collection-item').forEach(function(newTask){
        const item = newTask.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1){
                newTask.style.display = 'block';
        }

       else{
           newTask.style.display = 'none';
       }
   })
}

loadEventListeners();