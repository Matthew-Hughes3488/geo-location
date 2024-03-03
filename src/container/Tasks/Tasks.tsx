import { TaskBarList } from "../../components/TaskBarList/TaskBarList"
import { testData } from "../../data/taskData"

export const Tasks = () => {
  return (
    <div>
        <TaskBarList tasks={testData}/>
    </div>
  )
}
