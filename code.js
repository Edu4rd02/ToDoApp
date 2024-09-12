const txtTask = document.getElementById('txtTask');
const containerTask = document.getElementById('containerTasks');
let cont = 1

function getTask()
{
    if (txtTask.value){
        createTask(txtTask.value)
    }
    txtTask.value="";
}

function createTask(txt){
    containerTask.innerHTML+=`
        <div class="task" id=task${cont}>
            <p> ${txt} </p>
            <button onclick=document.getElementById("task${cont}").classList.add("taskComplete")> Complete </button>

            <button onclick=document.getElementById("task${cont}").remove()> Delete </button>
        </div>
    `
    cont=cont+1;
}