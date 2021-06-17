const inputEl = document.getElementById('input')
const submit = document.getElementById('submit');
const deleteEl = document.getElementById('delete');
const toDoList = document.getElementById('todo');
let toDoItem = document.getElementsByTagName('li');

submit.addEventListener('click', () =>{
   
    let newToDo = document.createElement('li');
    newToDo.innerHTML = `${inputEl.value}`;
    toDoList.appendChild(newToDo);
    inputEl.value = "";
})

for (let i = 0; i < toDoItem.length; i++) {
    let currentToDoItem = toDoItem[i]
    currentToDoItem.addEventListener('click', () => {
        if (currentToDoItem.classList.length  === 0) {
            currentToDoItem.classList.add("done");
        } else {
            currentToDoItem.classList.remove("done");
        }
    })
}

deleteEl.addEventListener('click', () => {
    toDoList.innerText = "";
})
