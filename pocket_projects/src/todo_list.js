let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let todos = [];
let ul = document.getElementsByClassName("todos");
let form_ele = document.getElementsByClassName("add-todo-form");

const addTodo = function(event) {
    let input = document.getElementsByClassName('add-todo-form')[0].elements.namedItem('add-todo').value;
    let todo = {
        input, 
        done: false
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    event.currentTarget.reset();
    

}

form_ele[0].addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo(event);
    populateList(todos);
})

window.todos;

const populateList = function(arr) {
    while (ul[0].firstChild) {
        ul[0].removeChild(ul[0].firstChild);
    }
    arr.forEach(function(ele) {
        let label = document.createElement("label");
        let labelContent = document.createTextNode(ele["input"]);
        label.appendChild(labelContent);
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        label.appendChild(checkbox);
        ul[0].appendChild(label);
        let newLine = document.createElement("br");
        label.appendChild(newLine);
    });
}
