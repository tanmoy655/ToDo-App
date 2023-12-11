// selectors
const form =document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskLists = document.getElementById("tasks");

// console.log(form,taskInput,taskLists);



form.addEventListener("submit",function(event){
    // console.log("event");
    event.preventDefault();
 if (taskInput.value){
    const task = taskInput.value;
    console.log(task);
//Creating the task div
    const taskEl =document.createElement("div")
    taskEl.classList.add("task");

    //Creating Content div

    const taskElContent = document.createElement("div")
    taskElContent.classList.add("content");

    //inserting content div to task
    taskEl.appendChild(taskElContent)
    
    //creating input(task)
    const taskElInput =document.createElement("input");
    taskElInput.classList.add("text");
    taskElInput.value = task;
    taskElInput.setAttribute("readonly","readonly");

    
    //Inserting input to content div

    taskElContent.appendChild(taskElInput);


    //creating action div
    const taskElAction = document.createElement("div")
    taskElAction.classList.add("actions");

    taskElContent.appendChild(taskElAction);

    //creating edit button
    const taskElEditBtn = document.createElement("button")
    taskElEditBtn.classList.add("edit");
    taskElEditBtn.innerText ="Edit";

    //creating delete button
    const taskElDeleteBtn = document.createElement("button")
    taskElDeleteBtn.classList.add("delete");
    taskElDeleteBtn.innerText ="Delete";

    //creating complete button
    const taskElCompleteBtn = document.createElement("button")
    taskElCompleteBtn.classList.add("complete");
    taskElCompleteBtn.innerText ="Mark Complete";
    
    //adding all btn to action div
    taskElAction.appendChild(taskElEditBtn)
    taskElAction.appendChild(taskElDeleteBtn)
    taskElAction.appendChild( taskElCompleteBtn)
    
    //Inserting task element to tasks div
    taskLists.appendChild(taskEl)

//clear the input field
    taskInput.value =""
    //edit btn
    taskElEditBtn.addEventListener("click", function(){
        if (taskElEditBtn.innerText.toLowerCase()==="edit"){
            taskElEditBtn.innerText ="Save";
            taskElInput.removeAttribute("readonly");
            taskElInput.focus()
        }else{
            taskElEditBtn.innerText ="Edit";
            taskElInput.removeAttribute("readonly","readonly")
        }
    });
    //complete btn
    taskElCompleteBtn.addEventListener("click", function(){
        if (  taskElCompleteBtn.innerText.toLowerCase()==="mark complete")
        {
            taskElCompleteBtn.innerText ="Completed";
            taskElInput.classList.add("mark-completed");
            taskElCompleteBtn.style.backgroundColor="black"
          
        }else{
            taskElCompleteBtn.innerText ="Mark Complete";
            taskElInput.classList.remove("mark-completed");
            taskElCompleteBtn.style.backgroundColor="#38c238"; 
        }
    });

taskElDeleteBtn.addEventListener("click",function(e){
taskLists.removeChild(taskEl)
})
    
 }else{
    alert("Enter Some Task");
 }
})