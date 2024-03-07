import { Task } from "../../types/Task";
import { TaskBar } from "../TaskBar/TaskBar";
import "./TaskBarList.scss";

type TaskBarListProps = {
  tasks: Task[];
};

export const TaskBarList = ({ tasks }: TaskBarListProps) => {
  return (
    <section className="task-list">
      {tasks.map((task: Task) => (
        <TaskBar key={task.id} task={task} />
      ))}
    </section>
  );
};
