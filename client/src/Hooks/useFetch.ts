import { useEffect, useState } from "react";
import { TodoCardData } from "../components/Todos/TodoCard";

type Props = {};
const useFetch = () : [TodoCardData[],boolean] => {
  const [data, setData] = useState<TodoCardData[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
        setIsFetching(false)
      }).catch(()=> setIsFetching(false));
  }, []);

  return [data,isFetching];
};

export default useFetch;
