let input =document.querySelector(".input");
let submit = document.querySelector(".add");
let taskDiv = document.querySelector(".tasks");

//Empty array to store the tasks

let arrayOfTasks = [];



// add task

submit.onclick=function(){
    if(input.value !==""){
        addTaskToArray(input.value);//Add Task To Array Of Tasks
        input.value=""; // Empty Input Field
    }
}



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