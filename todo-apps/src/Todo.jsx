import React, { useState } from 'react'
import './Todo.css'
import TodoInput from './TodoInput'
import TaskItem from './TaskItem';

const Todo = () => {

    const [toDoList,setToDoList]=useState([]);

    const addTask=(taskName)=>{
        const newTask={taskName,checked:false};
        setToDoList([...toDoList,newTask]);
    };

    function deleteTask(deleteTaskName){
        setToDoList(toDoList.filter(task=>task.taskName!==deleteTaskName));
    }

    function toggleCheck(taskName){
        setToDoList((prevToDoList)=>prevToDoList.map(task=> task.taskName=== taskName ? {...task,checked: !task.checked}:task),);
    }

  return (
    <>
    <div className="container">
        <h1>ToDo App</h1>

        <TodoInput addTask={addTask}/>

        <div className="toDoList">
            <span>To Do</span>
            <ul className="list-items">
                {toDoList.map((task, key) =>(
                    <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
                ))}

            </ul>

        </div>
    </div>
    </>
  )
}

export default Todo
