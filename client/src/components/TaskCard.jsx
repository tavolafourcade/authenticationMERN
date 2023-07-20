import PropTypes from 'prop-types'
import { useTasks } from '../context/TaskContext'

const TaskCard = ({task}) => {
  const { deleteTask } = useTasks()
  return (
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
          <h1 className='text-2xl font-bold'>{task.title}</h1>
          <div className='flex gap-x-2 items-center'>
            <button onClick={() => deleteTask(task._id)}>delete</button>
            <button>editar</button>
          </div>
        </header>
        <p className='text-slate-300'>{task.description}</p>
        <p>{new Date(task.date).toLocaleDateString()}</p>
      </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
}

export default TaskCard