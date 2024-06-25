import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import TaskItem from './component/TaskItem';

function App() {
  const [tasks, setTasks]=useState([])
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])
  const addTask =(Task)=>{
    setTasks([...tasks,Task])
  }

  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>task.id != id))
  }

  const updateTask=(newTask)=>{
    setTasks(tasks.map((el)=>el.id === newTask.id? newTask:el))

  }

  const doneTask =(idDone)=>{
    setTasks(tasks.map((el)=>el.id ===idDone ? {...el,done:!el.done}:el))
  }


  return (
    <div className="App">
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} doneTask={doneTask}/>
    </div>
  );
}

export default App;
