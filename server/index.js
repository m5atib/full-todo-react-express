const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
var myTodos = [];

app.use(express.json());
app.get("/todos", (req, res) => {
  res.json({ todos: myTodos });
});

app.post("/todos", (req, res) => {
  let todoObj = req.body.todo;
  console.log(todoObj)
  if (todoObj) {
    todoObj["id"] =
      "task" + myTodos.length + "#" + Math.floor(Math.random() * 100000000);
    todoObj["createdDate"] = new Date().toLocaleString();
    todoObj["done"] = false;
    myTodos.push(todoObj);
    res.status(200).send({todo:todoObj});
    res.json({todo:todoObj})
  } else {
    res.status(400).send({message:"Faliure"});
    
  }
});
app.delete('/todo/:id' , (req,res) => {
  let todoId = req.body.todoId;
  myTodos.splice(myTodos.findIndex((i) => i.id === todoId),1)
  res.status(200).send({todos:myTodos,message:"Deleted"});
})
app.put("/todo/:id", (req, res) => {
  const todoId = req.body.todoId;
  let done = 0;
  let newMarked = myTodos.map((item) => {
    (item.id === todoId || item.done) && done++;
    return {
      ...item,
      done: item.id === todoId || item.done,
    };
  });
  myTodos = newMarked;
  res.status(200).send({todos:newMarked,dones:done});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
