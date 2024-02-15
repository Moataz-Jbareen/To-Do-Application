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

    console.log(arrayOfTasks)
    

}