const list = document.getElementById('task_list');
const button = document.getElementById('add_btn');
let input = document.getElementById('task_input');
let tasks_array = []
if(localStorage.getItem("task") == null){
  tasks_array = [];
}else{
  tasks_array = JSON.parse(localStorage.getItem("task"))
}
console.log(tasks_array)



function createTaskElement(task_text){
  let new_task = document.createElement('li');
  new_task.textContent = task_text;
  list.appendChild(new_task);
  new_task.classList.add("tasks");
  let del_btn = document.createElement('button');
  del_btn.textContent = "Done";
  new_task.appendChild(del_btn)
  del_btn.classList.add("delete");
  del_btn.addEventListener('click', function () {
    new_task.remove()
    let index = tasks_array.indexOf(task_text);
    tasks_array.splice(index, 1);
    console.log(tasks_array);
    localStorage.setItem("task", JSON.stringify(tasks_array));
  })
}
tasks_array.forEach(createTaskElement);

function addTask(){
  let task_text = input.value;
  if (task_text.trim() == ""){
    return
  }else{
  createTaskElement(task_text);
  tasks_array.push(task_text);
  console.log(tasks_array);
  input.value = '';
  localStorage.setItem("task", JSON.stringify(tasks_array));
  }

  
}

button.addEventListener('click', addTask)
input.addEventListener('keypress', function (event){
  if(event.key == "Enter"){
    addTask();
  }
})