import React from 'react'
import EditTask from './EditTask'

function TaskItem({task, deleteTask,updateTask, doneTask}) {
  console.log(task.done)
  return (

    <>
    <p style={{textDecoration:task.done?"line-through":"none"}} >{task.name}:{task.description}</p>
    <button onClick={()=>(deleteTask(task.id))}>Delete</button>
    <EditTask task={task} updateTask={updateTask}/>
    <button onClick={()=>(doneTask(task.id))}>done</button>
    </>
  )
}

export default TaskItem