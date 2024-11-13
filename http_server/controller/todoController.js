exports.getAllTodos = (req, res) => {
    res.send("get all todos");
}

exports.getTodoById = (req, res) => {
    res.send("get todo by id");
}

exports.createTodo = (req, res) => {
    res.send("create todo");
    console.log(req.body);
}

exports.updateTodo = (req, res) => {
    res.send("update todo");
}

exports.deleteTodo = (req, res) => {
    res.send("delete todo");
}