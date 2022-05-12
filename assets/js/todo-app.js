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

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (paragraph) {
	if (paragraph.textContent.match("the")) {
		paragraph.remove();
	}
});

// You have n todos left (<p> element)
//  Add a <p> for each todo above

const summary = document.createElement("p");
summary.textContent = "You have 2 todos left.";
document.querySelector("body").appendChild(summary);

const buildTodoList = function () {
	todos.forEach(function (todo) {
		const newTodo = document.createElement("p");
		newTodo.textContent = todo.todoTitle;
		document.querySelector("body").appendChild(newTodo);
	});
};

buildTodoList();
