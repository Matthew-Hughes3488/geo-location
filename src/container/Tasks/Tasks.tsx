import { FormEvent, useState } from "react"
import { NewTaskBar } from "../../components/NewTaskBar/NewTaskBar"
import { TaskBarList } from "../../components/TaskBarList/TaskBarList"
import "./Tasks.scss"
import { Task } from "../../types/Task"

export const Tasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [numberOfTasksAdded, setNumberOfTasksAdded] = useState(0);

  const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskInput) {
      const newTask: Task = {
        id: numberOfTasksAdded,
        task: taskInput,
        dateCreated: new Date(),
      };
      setNumberOfTasksAdded(numberOfTasksAdded + 1);

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput("");
    }
  };

  const handleInputChange = (event : FormEvent<HTMLInputElement>) =>{
    const input = event.currentTarget.value;
    setTaskInput(input);
  }
  
  return (
    <section className="tasks">
      <h1 className="tasks__title">Task List</h1>
      <NewTaskBar onSubmit={handleNewTask}onInputChange={handleInputChange} taskValue={taskInput}/>
        <TaskBarList tasks={tasks}/>
    </section>
  )
}
