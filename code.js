const txtTask = document.getElementById('txtTask'); //This contain the string from the input task
const containerTask = document.getElementById('containerTasks'); //This contain the div that will contain all the task 
let cont = 1 //A counter, this will be use for add a unique ID in all the tasks that we add

//*This function get the Sting for the input task, if the String is not empty, it call the function createTask and remove the text from the input
function getTask()
{
    if (txtTask.value.trim()){
        createTask(txtTask.value)
    }
    txtTask.value="";
}

//*This function create the task, the both buttons include the instructions for mark it complete or remove it
function createTask(txt){
    containerTask.innerHTML+=`
        <div class="task" id=task${cont}>
            <p> ${txt} </p>
            <button class="completebtn" onclick=document.getElementById("task${cont}").classList.add("taskComplete")> 
                <i class="fa-solid fa-check"></i> Complete
            </button>

            <button class="deletebtn" onclick=document.getElementById("task${cont}").remove()> 
                <i class="fa-solid fa-x"></i> Delete 
            </button>
        </div>
    `
    //When we create the new task, the counter increase one for assign it a new unique ID
    cont=cont+1;
}