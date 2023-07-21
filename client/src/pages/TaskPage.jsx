import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"

const TaskPage = () => {

  const { getTasks, tasks } = useTasks()

  useEffect(()=> {
    getTasks()
  },[])

  if(tasks.length === 0) return (<h1>No tasks</h1>)
  return (
    <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2'>
      {
        tasks.map((task) => (
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}
export default TaskPage