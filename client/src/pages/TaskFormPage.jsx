import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm()
  const { createTask } = useTasks()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
    navigate('/tasks')

  })

  return (
    <div className='w-full bg-zinc-800 max-w-md p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
        type='text'
        placeholder='Title'
        {...register('title')}
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        autoFocus/>
        
        <textarea
        rows='3'
        placeholder='Description'
        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        {...register('description')}
        >
        </textarea>
        <button>Save</button>
      </form>
    </div>
  )
}
export default TaskFormPage