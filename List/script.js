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

    /* Abrir/fechar menu */

function openNav(open){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.background = "white";
    document.getElementById('openButton').style.display ='block';
}
