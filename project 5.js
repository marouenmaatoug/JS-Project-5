const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("check-task");
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert("please enter a task");
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkBtn.addEventListener("click", function () {
        var parent = checkBtn.parentElement;
        if (parent.style.textDecoration === "line-through") {
            parent.style.textDecoration = "none";
            checkBtn.style.backgroundColor = "";
            checkBtn.style.color = "green";
        } else {
            parent.style.textDecoration = "line-through";
            checkBtn.style.backgroundColor = "green";
            checkBtn.style.color = "white";
        }
    });
    deleteBtn.addEventListener("click", function (e) {
        let target = e.currentTarget;
        target.parentElement.remove();
    });
});
