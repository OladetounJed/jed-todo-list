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

    //Add New Task
    form.addEventListener('submit', addTask);

    //Remove Tasks
    taskCollection.addEventListener('click', removeTask)

    //Clear Tasks
    clearBtn.addEventListener('click', clearTasks)

    //Filter Tasks
    filter.addEventListener('keyup', filterTask)
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

newTask.value = '';
    }


e.preventDefault();

};

//Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-task')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
}
}

//Clear Tasks
function clearTasks(e){
    if(confirm("Are you sure you want to clear your tasks?")){
        taskCollection.innerHTML = "";
    }
}

//Filter Tasks

function filterTask(){
    
}

loadEventListeners();