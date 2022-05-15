const addTodoEl = document.getElementById("add-todo-button");

const todos = [
	{
		todoTitle: "JS Class",
		completedStatus: false,
	},
	{
		todoTitle: "Take out dogs",
		completedStatus: true,
	},
	{
		todoTitle: "Rewire Jaguar",
		completedStatus: true,
	},
	{
		todoTitle: "Strain and pack Broth",
		completedStatus: true,
	},
	{
		todoTitle: "Make dinner",
		completedStatus: false,
	},
];

const incompleteTodos = todos.filter(function (todo) {
	return !todo.completed;
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector("body").appendChild(summary);

const buildTodoList = function () {
	todos.forEach(function (todo) {
		const newTodo = document.createElement("p");
		newTodo.textContent = todo.todoTitle;
		document.querySelector("body").appendChild(newTodo);
	});
};

const handleAddTodo = function (e) {
	console.log("handleAddTodo", e);
};

addTodoEl.addEventListener("click", handleAddTodo);

buildTodoList();
