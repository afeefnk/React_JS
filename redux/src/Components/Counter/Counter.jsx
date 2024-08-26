import React from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Counter Slice/CounterSlice'

const Counter = () => {
    const {count}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter
