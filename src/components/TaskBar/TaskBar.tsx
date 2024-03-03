import React, { useState } from "react";
import { Task } from "../../types/Task";

type TaskBarProps = {
  task: Task;
};

export const TaskBar = ({ task }: TaskBarProps) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const taskComplete = () =>{
    setCompleted(!completed);
  }

  return (
    <section className="task-bar">
      <h1 className="task-bar__task">{task.task}</h1>
      <h2>{task.dateCreated.toDateString()}</h2>
      <button onClick={taskComplete}>Done 😃</button>
    </section>
  );
};
