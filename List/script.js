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

let scrollPosition = 0;

function openNav(){
    scrollPosition = window.scrollY;
    document.getElementById("sidebar").style.width = "0";
    window.scrollTo(0, scrollPosition);
}