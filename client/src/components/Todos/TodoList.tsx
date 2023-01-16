import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import SpinnerLoading from "../SpinnerLoading";
import Searchbar from "./Searchbar";
import TodoCard, { TodoCardData } from "./TodoCard";

type CardListProps = {
  Todos: TodoCardData[];
  markHandler: (todoId: string) => void;
  deleteHandler: (todoId: string) => void;
};
const Toggle = ({Toggle,setToggle}:{Toggle:boolean,setToggle:React.Dispatch<React.SetStateAction<boolean>>}) => {
  
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={Toggle} onChange={(e) => setToggle(!Toggle)} />
      <div className="w-11 h-6 bg-gray-200 rounded-full  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {Toggle===true?"Hide":"Show"} Todos
      </span>
    </label>
  );
};
const TodoList = (props: CardListProps) => {
  const [toggle,setToggle] = useState(true)
  
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Toggle Toggle={toggle} setToggle={setToggle}/>
      {toggle && props.Todos.map((item) => (
        <TodoCard Data={item} key={item.id} handleDelete={props.deleteHandler} MarkAsDone={props.markHandler} />
      ))}
    </div>
  );
};

export default TodoList;
