var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);



var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    event.preventDefault();  //evnet object - this is to be sure to override the default, which in this case, stops the browser from refreshing each time you hit 'add task'


  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl); // append child, this basically means enter the elements
};

formEl.addEventListener("submit", createTaskHandler);


