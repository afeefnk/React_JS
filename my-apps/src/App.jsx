import { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount]=useState(0);
  
  let increment=()=>{
    setCount(count+1);
    console.log(count);
  }

  let decrement=()=>{
    if(count!==0){
      setCount(count-1);
  }
  console.log(count);
  
}

  return (
    <>
    <nav className="navbar">
      <div className="head1">
        <h1>Softroniics</h1>
      </div>
      <div>
        <a href="$" className="btn">Home</a>
        <a href="$" className="btn">About</a>
        <a href="$" className="btn">Portfolio</a>
        <a href="$" className="btn">Services</a>
        <a href="$" className="btn">Contact</a>
      </div>
    </nav>
     <div className='main'>
    <button onClick={increment} className='btn1'>Increment</button>
    <button onClick={decrement} className='btn1'>Decrement</button>
    <h1>{count}</h1>
    </div>
    </>
  );
}

export default App;
