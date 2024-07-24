import emailicon from '../src/Assets/email.png'
import passwordicon from '../src/Assets/password.png'
import './App.css';


function App() {
  return (
    <>
   
    <div className='main'>
    <div className='header'>
      <div className='text'>Login</div>
      <div className='underline'></div>
    </div>
    <div className='inputs'>
      <div className='input'>
        <img src={emailicon} alt="" />
        <input type="email" placeholder='Email Id' required />
      </div>
      <div className='input'>
        <img src={passwordicon} alt="" />
        <input type="password" placeholder='Password' required />
      </div>
    </div>
     <div className="button">
      <div className="submit">Login</div>
     </div>
   </div>
   </>
  );
}

export default App;
