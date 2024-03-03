import { useState } from "react";
import { Task } from "../../types/Task";

export const ToDo = () => {
    
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [numberOfTasksAdded, setNumberOfTasksAdded] = useState(0); // Used as a id and key for each task item component created

  


  return <></>;
};
