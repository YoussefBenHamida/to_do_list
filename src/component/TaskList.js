import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, deleteTask, updateTask, doneTask}) => {
  return (
    <>
    {tasks.map((task)=>(
        <TaskItem 
        key={task.id}
        task={task} deleteTask={deleteTask} updateTask={updateTask} doneTask={doneTask}/>
    ))}
    </>
  )
}

export default TaskList