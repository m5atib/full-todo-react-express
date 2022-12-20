import "./App.css";
import AddNewTodo from "./components/AddNew/AddNewTodo";
import { TodoCardData } from "./components/Todos/TodoCard";
import TodoList from "./components/Todos/TodoList";
import { useEffect, useState } from "react";
import Searchbar from "./components/Todos/Searchbar";
import Footer from "./components/Footer/Footer";
import useFetch from "./Hooks/useFetch";
import SpinnerLoading from "./components/SpinnerLoading";
function App() {
  const [data, isFetching] = useFetch();
  const [myTodos, setMyTodos] = useState<TodoCardData[]>([]);
  const [searchMyTodos, setSearchMyTodos] = useState<TodoCardData[]>([]);

  const [status, setStatus] = useState({
    counter: 0,
    doneCounter: 0,
    remCounter: 0,
  });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const pairs = Array.from(formData.entries());

    let todoObj: any = {};
    for (let [name, value] of pairs) {
      todoObj[name.toString()] = value.toString().trim();
    }

    if (todoObj.title === "") return;
    try {
      let res = await fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo: todoObj }),
      });
      let t = await res.json();
      if (res.status === 200) {
        setMyTodos((pre) => [...pre, t.todo]);
      } else if (res.status === 400) {
        alert(t.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const searchHandler = (text: string) => {
    if (text.trim() !== "") {
      setSearchMyTodos(
        myTodos.filter(
          (item) =>
            item.title.toLowerCase().indexOf(text.trim().toLowerCase()) > -1
        )
      );
    } else {
      setSearchMyTodos(myTodos);
    }
  };
  const markAsDoneHandler = async (todoId: string) => {
    try {
      let res = await fetch(`/todo/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoId: todoId }),
      });
      let { todos, dones } = await res.json();
      if (res.status === 200) {
        setSearchMyTodos(todos);
        setMyTodos(todos);
        setStatus({
          counter: todos.length,
          doneCounter: dones,
          remCounter: todos.length - dones,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTodo = async (todoId:string) => {
    try {
      let res = await fetch(`/todo/${todoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoId: todoId }),
      });
      let { todos } = await res.json();
      if (res.status === 200) {
        setSearchMyTodos(todos);
        setMyTodos(todos);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setSearchMyTodos(myTodos);
    setStatus((pre) => {
      return {
        counter: myTodos.length,
        doneCounter: pre.doneCounter,
        remCounter: myTodos.length - pre.doneCounter,
      };
    });
  }, [myTodos]);

  useEffect(() => {
    setMyTodos(data);
  }, [data]);
  return (
    <div className="dark:bg-slate-700 relative flex md:flex-row flex-wrap flex-col justify-between md:gap-16 gap-8 divide-slate-100">
      <AddNewTodo addNewHandler={handleSubmit} />
      {isFetching ? (
        <SpinnerLoading />
      ) : (
        <div className="z-40 dark:bg-slate-700 flex-1 flex flex-col items-center gap-4 md:p-16 py-16 px-4">
          <Searchbar searchHandler={searchHandler} />
          <TodoList Todos={searchMyTodos} deleteHandler={handleDeleteTodo} markHandler={markAsDoneHandler} />
        </div>
      )}
      <Footer Status={status} />
    </div>
  );
}

export default App;
