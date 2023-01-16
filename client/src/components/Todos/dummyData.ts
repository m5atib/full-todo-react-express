import { TodoCardData } from "./TodoCard";

export const FakeTodo:TodoCardData[] = [
  {
    id: "1tdi",
    title: "Woke up at 4:00 am ",
    desc: "Woke up at 4:00 and make a breakfast",
    createdDate: new Date().toLocaleString(),
    done: false,
  },
  {
    id: "2tdi",
    title: "Do some Excersis",
    desc: "doing 30 push-ups",
    createdDate: new Date().toLocaleString(),
    done: false,
  },
];
