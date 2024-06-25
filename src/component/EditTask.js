import React, { useState } from 'react'
import ReactModal from 'react-modal';

function EditTask({task, updateTask}) {
    const [isOpenn , setIsOpen]=useState(false)
    const [name, setName] =useState("")
    const [description, setDescription] =useState("")
    console.log(name)
    console.log(description)
    const handleModal =()=>{
    setIsOpen(!isOpenn)
  } 

  const handleChange =()=>{
const changedTask={name,description}
    updateTask({...task,...changedTask})
    handleModal()
  }

    return (
    <>
    <button onClick={handleModal}>edit</button>
    <ReactModal 
    isOpen={isOpenn}>
        <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder='Description'onChange={(e)=>{setDescription(e.target.value)}}/>
        <button onClick={handleModal}>Close</button>
        <button onClick={handleChange}>submit</button>
    </ReactModal>
    </>
  )
}

export default EditTask