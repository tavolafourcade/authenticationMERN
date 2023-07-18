import { useAuth } from "../context/AuthContext"

const TaskPage = () => {

  const { user } = useAuth()
  console.log('TASK user', user)
  return (
    <div>TaskPage</div>
  )
}
export default TaskPage