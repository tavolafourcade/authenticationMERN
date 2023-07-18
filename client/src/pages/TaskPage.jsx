import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"

const TaskPage = () => {

  const { getTasks, tasks } = useTasks()
  console.log('TASKS', tasks)

  useEffect(()=> {
    getTasks()
  },[])

  if(tasks.length === 0) return (<h1>No tasks</h1>)
  return (
    <>
      {
        tasks.map((task) => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </>
  )
}
export default TaskPage