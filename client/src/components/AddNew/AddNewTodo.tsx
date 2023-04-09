import { useState } from "react";

type AddNewProps = { 
    addNewHandler : React.FormEventHandler<HTMLFormElement>
}
const AddNewTodo = ({addNewHandler} :AddNewProps) => {

  
  return (
    <div className="relative dark:bg-slate-800 flex md:h-screen md:p-16 py-16 px-4 bg-slate-100 flex-col items-center gap-8">
      <a
        href="https://github.com/m5atib/todoreact"
        target="_blank"
        className="absolute left-4 top-4 md:bottom-4"
      >
        <i className="text-xl fa-brands fa-github dark:text-white"></i>
      </a>
      <button className="absolute top-4 right-4" id="themeButton">
        <i className="fa-solid fa-moon text-xl dark:text-white"></i>
      </button>
      <h1 className="text-xl font-bold dark:text-white">New Todo</h1>
      <form
        className="flex flex-col items-center justify-between gap-2"
        onSubmit={addNewHandler}
      >
        <input
          className="dark:bg-slate-700 dark:border-slate-600 dark:placeholder-white focus:outline-sky-500 bg-white p-2 border  border-slate-200 w-full rounded-lg"
          type="text"
          name="title"
          id="taskTitle"
          placeholder="What is your next task title?"
          required
        />
        <textarea
          id="taskDesc"
          name="desc"
          className="dark:bg-slate-700 dark:border-slate-600 dark:placeholder-white focus:outline-sky-500 bg-white p-2 border border-slate-200 w-full rounded-lg"
          rows={5}
          cols={35}
          placeholder="Task description..."
        ></textarea>
        <button
          id="addTaskButton"
          className="w-full md:w-fit bg-sky-500 text-white font-semibold rounded-lg px-16 py-2 hover:bg-sky-700"
        >
          <i className="text-white fa-solid fa-circle-plus mr-2"></i>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
};

export default AddNewTodo;
