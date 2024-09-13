const txtTask = document.getElementById('txtTask');
const containerTask = document.getElementById('containerTasks');
let cont = 1

function getTask()
{
    if (txtTask.value.trim()){
        createTask(txtTask.value)
    }
    txtTask.value="";
}

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
    cont=cont+1;
}