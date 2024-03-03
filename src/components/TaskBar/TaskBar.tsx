import React, { useState } from "react";
import { Task } from "../../types/Task";
import "./TaskBar.scss";

type TaskBarProps = {
  task: Task;
};

export const TaskBar = ({ task }: TaskBarProps) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const updateTask = () => {
    setCompleted(!completed);
  };

  const taskClassName = completed ? "task-bar__task task-bar__task--completed" : "task-bar__task"

  return (
    <section className="task-bar">
      <input onClick={updateTask} className="task-bar__checkbox" type="checkbox" />
      <h1 className={taskClassName}>{task.task}</h1>
      <h2 className="task-bar__date">{task.dateCreated.toDateString()}</h2>
    </section>
  );
};
