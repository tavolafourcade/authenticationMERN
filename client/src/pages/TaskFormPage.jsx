import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm()
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const loadTask = async () => {
      if(params.id) {
        const task = await getTask(params.id)
        console.log('TASK', task)
        setValue('title', task.title)
        setValue('description', task.description)
        setValue('date', dayjs.utc(task.date).utc().format('YYYY-MM-DD'))
      }
    }
    loadTask()
  }, [])

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc()
    }

    if (data.date) dataValid.date = dayjs.utc(data.date).format()

    if (params.id){
      updateTask(params.id, dataValid)
    } else {
      createTask(dataValid)
    }
    navigate('/tasks')
  })

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full bg-zinc-800 max-w-md p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <label htmlFor='title'>title</label>
          <input
          type='text'
          placeholder='Title'
          {...register('title')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus/>
          
          <label htmlFor='description'>description</label>
          <textarea
          rows='3'
          placeholder='Description'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('description')}
          >
          </textarea>

          <label htmlFor='date'>date</label>
          <input
          type='date'
          placeholder='Date'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          {...register('date')}
          />

          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Save</button>
        </form>
      </div>
    </div>
  )
}
export default TaskFormPage