
/* Declaração de constantes */

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const task = inputBox.value;


    /* Botão adicionar tarefas*/

function addTask(){
    if(inputBox.value === ''){
        alert("Você deve escrever alguma coisa!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

document.getElementById("input-box").addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.addEventListener('DOMContentLoaded', (Event) => {
    window.addTesk = function() {
        const inputBox = document.getElementById('input-box');
        const listContainer = document.getElementById('list-container');
        const task = inputBox.value;

        if(task){
            const li = document.createElement('li');
            li.textContent = task;
            listContainer.appendChild(li);
            inputBox.value='';
        }
    }
})

    /*  Botão de abrir menu lateral */

function openNav(){
    ScrollPosition = window.scrollY;
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav(){
    document.getElementById("sidebar").style.width = "0";
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, ScrollPosition);
}
let ScrollPosition = 0;

document.getElementById("openbtn").addEventListener("click", openNav);
document.getElementById("closebtn"),addEventListener("click", closeNav);

    /* Salvar */

function saveTasks(){
    const tasks = [];
    const listContainer = document.getElementById("list-container");
    const taskItems = listContainer.querySelectorAll("li");
}

taskItems.forEach(item => {
    const checkbox = item.querySelector(".task-chechbox");
    tasks.push({text: item.textContent.trim(), completed: checkbox.checked});
});

localStorage.setItem("tasks", JSON.stringify(tasks));
alert("Tarefas salvas com sucesso!");

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const listContainer = document.getElementById
}
