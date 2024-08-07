import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const[count, setCount]=useState(0);
  const[preCount, setPreCount]=useState(0);


  const inputRef = useRef(null);
  function handleClick(){
     inputRef.current.style.padding="10px";
     inputRef.current.style.backgroundColor="yellow";
     inputRef.current.style.border="none";
     inputRef.current.focus();

  }
  useEffect(()=>{
    if(count > preCount) {
      console.log('Value is Incremented');
    } else if(count<preCount) {
      console.log('Value is Decremented');
    }
    setPreCount(count);
    },[count,preCount]);
  
  let increment=()=>{
    setCount(count+1);
  }

  let decrement=()=>{
    if(count!==0){
      setCount(count-1);  
  }
  // console.log(count);


  
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
    <input type="text" ref={inputRef} />
    <button onClick={handleClick} className='btn1'>Click</button>
    </div>
    </>
  );
}

export default App;
