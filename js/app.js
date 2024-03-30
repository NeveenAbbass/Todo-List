// variables setting

let theInput = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task i");

let taskContainer = document.querySelector(".task-content");

let taskCount = document.querySelector(".tasks-count span");
let taskComplete = document.querySelector(".tasks-complete span");


window.onload = function(){
  theInput.focus();
};


//adding a task 

addBtn.onclick = function(){
  if(theInput.value ===''){
    console.log("no value")
    input.value = null;
  }

  else{
    console.log(theInput.value);
    let noTasksMsg = document.querySelector(".no-task-span");

    if(document.body.contains(noTasksMsg)){
      noTasksMsg.remove();
    }

    let newTask = document.createElement("span");
    let newTaskText = document.createTextNode(theInput.value);
  
    let deleteBtn = document.createElement("span");
    let deleteText = document.createTextNode("delete");
  
    newTask.textContent = newTaskText.textContent;
    deleteBtn.textContent = deleteText.textContent;
  
    deleteBtn.className = 'delete';
    newTask.className = 'task-box'
  
    newTask.appendChild(deleteBtn);
  
    taskContainer.appendChild(newTask);
  
    theInput.value = "";
    
    theInput.focus();

    claculateTasks();
  }
}

//delete and check task

addEventListener("click", function(e){
  if(e.target.classList.contains("delete")){
    e.target.parentNode.remove(); 

    if(taskContainer.childElementCount === 0){
      createNoTasksMsg();
      
    }
  }
  else{}

  if(e.target.classList.contains("task-box")){
    e.target.classList.toggle("checked");
  }

  claculateTasks();
})


function createNoTasksMsg(){
  let noTasksMsg = document.createElement("span");
  let noTasksText = document.createTextNode("You don't have any tasks");

  noTasksMsg.appendChild(noTasksText);
  noTasksMsg.className = 'no-task-span';

  taskContainer.appendChild(noTasksMsg);
}

//calculate tasks

function claculateTasks(){

  taskCount.innerHTML=document.querySelectorAll(".task-content .task-box").length;

  taskComplete.innerHTML=document.querySelectorAll(".task-content .checked").length;
}