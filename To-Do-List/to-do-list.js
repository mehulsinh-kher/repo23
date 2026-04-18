const tasklist = document.getElementById("task-list");
const button = document.getElementById("btn");
const input = document.getElementById("input");

button.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter a task");
    }
    else {
        //    li create
        const task = document.createElement("li");
        task.innerHTML = input.value;

        // li ni inside div create
        const divbtn = document.createElement("div");
        divbtn.className = "div-btn";
        task.appendChild(divbtn);

        // in side div button create
        const delbtn = document.createElement("button");
        delbtn.innerHTML = "Delete";
        delbtn.className = "delete-btn";

        const adibtn = document.createElement("button");
        adibtn.innerHTML = "Adit";
        adibtn.className = "adi-btn";


        divbtn.appendChild(adibtn);
        divbtn.appendChild(delbtn);
        tasklist.appendChild(task);
        input.value = "";
        input.focus();

        // delete button
        delbtn.addEventListener("click", function () {
            tasklist.removeChild(task);
        });

        // adit button
        adibtn.addEventListener("click", function () {
            input.value = task.firstChild.textContent;
            tasklist.removeChild(task);
            input.focus();

        });

        // task list completed
        task.addEventListener("click", function () {
            task.classList.toggle("completed");
        });
    }

});

