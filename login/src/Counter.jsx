import React, { useState } from 'react'
import './Counter.css'
import App from './App'
const Counter = () => {

    const[count,setCount]=useState(0)
    const[data,setData]=useState("value is zero")
    const[toggle,setToggle]=useState(true)

    let increment=()=>{
        setCount(count+1)
        setData("Increment")
    }

    let decrement=()=>{
        if(count!==0){
        setCount(count-1)
        setData("Decrement")
        }
    }

    let toggled=()=>{
        setToggle(!toggle)
    }
    console.log(toggle);


  return (
    <div className='main'>
      <h1>{count}</h1>
      <h2>{data}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggled}>
        {toggle?
         <span>register</span>
        :
         <span>login</span>
        }
        </button>
        {toggle?
        <div>
            <App/>
        </div>
        :
        <div>
            <h2>If you are first time, register on another page</h2>
        </div>
    }
    </div>
  )
}

export default Counter
