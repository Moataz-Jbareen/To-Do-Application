let input =document.querySelector(".input");
let submit = document.querySelector(".add");
let taskDiv = document.querySelector(".tasks");

//Empty array to store the tasks

let arrayOfTasks = [];

// check if theres tasks in local storage

if(localStorage.getItem("tasks")){
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage()

// add task

submit.onclick=function(){
    if(input.value !==""){
        addTaskToArray(input.value);//Add Task To Array Of Tasks
        input.value=""; // Empty Input Field
    }
}

//Click On Task Element

taskDiv.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){

        //remove task from local storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        //Remove Elemnt from page
        e.target.parentElement.remove();
        
    }
})


function addTaskToArray(taskText){
    
    const task={
        id:Date.now(),
        title: taskText,
        completed:false
    };

    //push task to array of tasks
    arrayOfTasks.push(task);

    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);

    // Add Tasks to local storage
    addDataToLocalStorage(arrayOfTasks);
    //
}






function addElementsToPageFrom(arrayOfTasks){
// Empty the tasks div
taskDiv.innerHTML="";
//looping on the array of tasks
arrayOfTasks.forEach(task => {
    //create main div
    let div=document.createElement("div");
    div.className="task";

    //check if the task is done
    if(task.completed){
        div.className="task done";
    }
    div.setAttribute('data-id',task.id);
    div.appendChild(document.createTextNode(task.title));

    //create delete button
    let span = document.createElement("span");
    span.className="delete";
    span.appendChild(document.createTextNode("Delete"));
    //Apprnd button to the main div
    div.appendChild(span);
    // Add tasks div to tasks container 
    taskDiv.appendChild(div);

});
}



function addDataToLocalStorage(arrayOfTasks){
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}


function getDataFromLocalStorage(){
    let data =window.localStorage.getItem("tasks");
    if(data){
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
       
    }
}


function deleteTaskWith(taskId){
    // localStorage.removeItem(taskIdS);
    arrayOfTasks = arrayOfTasks.filter((task)=>task.id != taskId)
    addDataToLocalStorage(arrayOfTasks);
    
    
}