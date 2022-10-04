let btnDOM = document.querySelector("#liveToastBtn");
let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let newTask = taskDOM.value;

btnDOM.addEventListener("click", addTask);

function startConf() {
	const todosStr = localStorage.getItem("todos");
	if (!todosStr) {
		localStorage.setItem("todos", JSON.stringify([]));
	} else {
		const todos = JSON.parse(todosStr);
		todos.forEach((todo) => addHTML(todo));
	}
}

function addHTML(todo) {
	let liDOM = document.createElement("li");
	listDOM.appendChild(liDOM);
	liDOM.innerText = todo;
	let closeBtn = document.createElement("span");
	closeBtn.textContent = "\u00D7";
	closeBtn.classList.add("close");
	closeBtn.onclick = removeTask();
	liDOM.append(closeBtn);
	listDOM.append(liDOM);
	let isActive = true;

	liDOM.addEventListener("click", (element) => {
		if (element.target.matches("li")) {
			switch (isActive) {
				case true:
					liDOM.className = "checked";
					isActive = false;
					break;
				case false:
					liDOM.className = "";
					isActive = true;
					break;
				default:
					console.log("bir şeyler ters gitti");
			}
		}
	});

	closeBtn.addEventListener("click", function () {
		const todosStr = localStorage.getItem("todos");
		const liText = closeBtn.parentElement.innerText;
		const todos = JSON.parse(todosStr);
		todos.forEach((task) => {
			if (task.trim() == liText.slice(0, -2).trim()) {
				todos.splice(todos.indexOf(task), 1);
				localStorage.setItem("todos", JSON.stringify(todos));
				liDOM.remove();
			}
		});
	});
}

document.querySelector("#task").addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addTask();
	}
});

function addTask() {
	if (taskDOM.value.trim() == "") {
		$(".error").toast("show");
	} else {
		$(".success").toast("show");
		addHTML(taskDOM.value);
		let todoList = JSON.parse(localStorage.getItem("todos"));
		todoList.push(taskDOM.value);
		localStorage.setItem("todos", JSON.stringify(todoList));
		taskDOM.value = "";
	}
}

function removeTask() {}

startConf();
