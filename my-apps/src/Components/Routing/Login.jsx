import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[name,setName]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
alert('submitted')
navigate('/')
    }
  return (
    <div>
   <form>
   <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input>
   <button onClick={handleSubmit}>submit</button>
   </form>
    </div>
  )
}

export default Login
