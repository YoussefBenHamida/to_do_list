import React, { useState } from 'react'

function TaskForm({addTask}) {

    const [task,settask]=useState({
        name:"",
        description:"",
        done : false
    })
const handleSubmit =(event)=>{

    event.preventDefault()
    if (task.name && task.description){
    addTask({...task,id:Date.now()})}
    else {alert("Both field need to be completed!")}
}
  return (
    <>
    <h1>To do list</h1>
    <form onSubmit={handleSubmit}>
    <input placeholder='Task Name' type='text' onChange={(e)=>{settask({...task,name:e.target.value})}}/>
    <input placeholder='Task Description' type='text'onChange={(e)=>{settask({...task,description:e.target.value})}}/>
    <button type='submit'>Add</button>
    </form>

    </>
  )
}

export default TaskForm