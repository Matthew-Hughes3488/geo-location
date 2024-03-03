import { NewTaskBar } from "../../components/NewTaskBar/NewTaskBar"
import { TaskBarList } from "../../components/TaskBarList/TaskBarList"
import { testData } from "../../data/taskData"
import "./Tasks.scss"

export const Tasks = () => {
  return (
    <section className="tasks">
      <h1 className="tasks__title">Task List</h1>
      <NewTaskBar/>
        <TaskBarList tasks={testData}/>
    </section>
  )
}
