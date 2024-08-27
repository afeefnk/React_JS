
import { useSelector } from 'react-redux';
import './App.css';
// import Counter from './Components/Counter/Counter';

// import ThemeSwitcher from './Components/Theme Switcher/ThemeSwitcher';


import Form from './Components/Form/Form';

function App() {

  const {name,email,password}=useSelector((state=>state.form))
  return (
    <div className="App">
      {/* <Counter/> */}

      {/* <ThemeSwitcher/>*/}

      <Form/>
    
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}

export default App;
