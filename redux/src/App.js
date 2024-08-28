import React from 'react';
// import { useSelector } from 'react-redux';
import './App.css';
// import Counter from './Components/Counter/Counter';

// import ThemeSwitcher from './Components/Theme Switcher/ThemeSwitcher';


// import Form from './Components/Form/Form';


import { Provider } from 'react-redux';
import store from './Components/Store.js/Store';
import UserForm from './Components/Add User Task/UserForm';
import UserList from './Components/Add User Task/UserList';

function App() {
  // const {name,email,password}=useSelector((state=>state.form))
  

  return (
    <Provider store={store}>
    <div className="App">
      {/* <Counter/> */}

      {/* <ThemeSwitcher/>*/}

      {/* <Form/>
    
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p> */}

       <h1>User Management</h1>
        <UserForm />
        <UserList />
    </div>
    </Provider>
  );
}

export default App;
