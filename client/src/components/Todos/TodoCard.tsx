import CompletedBadge from "./CompletedBadge";

export type TodoCardData = {
  id: string;
  title: string;
  desc: string;
  createdDate: string;
  done: boolean;
};

type TodoCardProps = {
  Data: TodoCardData;
  MarkAsDone: (todoId: string) => void;
  handleDelete : (todoId: string) => void;
};

const TodoCard = (props: TodoCardProps) => {
  const shadow = props.Data.done === true ? "" : "shadow-2xl";

  return (
    <li
      className={
        shadow +
        "p-2 bg-slate-50 rounded-lg flex flex-row w-full shadow-slate-300  bg-slate-50 dark:bg-slate-800 dark:border-slate-600  items-stretch justify-between p-4 rounded-lg hover:outline-sky-300 light:hover:outline"
      }
    >
      <div className="h-full flex flex-col justify-between max-w-2xl gap-1">
        {props.Data.done && <CompletedBadge />}

        <h2 className="text-lg font-medium text-sky-500">{props.Data.title}</h2>

        <p className="font-light text-slate-700 dark:text-slate-300">
          {props.Data.desc}
        </p>

        <p className="text-sm text-slate-500">{props.Data.createdDate}</p>
      </div>

      <div className=" flex flex-col gap-2 items-center justify-between">
        <button onClick={(e)=> props.handleDelete(props.Data.id)} className="px-4 p-2 rounded bg-white dark:bg-slate-500 text-slate-500 dark:text-white hover:text-red-500">
          <i className="text-xl fa-solid fa-trash"></i>
        </button>
        {props.Data.done === false && (
          <button
            onClick={(e) => {
              props.MarkAsDone(props.Data.id);
              props.Data.done = true;
            }}
            className="px-4 p-2 rounded dark:bg-slate-500 dark:text-white bg-white text-slate-500 hover:text-green-500"
          >
            <i className="text-xl fa-solid fa-circle-check"></i>
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoCard;
