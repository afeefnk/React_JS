import React, { useState } from 'react'

const TodoInput = ({addTask}) => {

    const [task,setTask]=useState('');

    function handleInputValue(e){
        setTask(e.target.value);
    }

    function handleAddTask(e){
        e.preventDefault();
        if(task.trim()==='') return;
        addTask(task);
        setTask('');
    }


  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input type="text" value={task} placeholder='Add Task' onChange={handleInputValue}/>
        <button>+</button>
    </form>
  )
}

export default TodoInput