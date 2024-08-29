// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import './App.css';

// import Counter from './Components/Counter/Counter';

// import ThemeSwitcher from './Components/Theme Switcher/ThemeSwitcher';

// import Form from './Components/Form/Form';

// Form------------------------------------------------------------------
// function App() {

// const {name,email,password}=useSelector((state=>state.form))

//   return (
//     <Router>
//     <div></div>
//     </Router>
//   )
// }

// export default App;

// Add User-------------------------------------------------------------------

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import UserList from "./Components/Add User/UserList";
// import UserForm from "./Components/Add User/UserForm";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const App = () => {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <Router>
//       <div className="container mt-5">
//         <nav className="mb-4">
//           <Link to="/" className="btn btn-primary mr-2">
//             Home
//           </Link>
//           <Link to="/users" className="btn btn-secondary">
//             User List
//           </Link>
//           <button
//             className="btn btn-success"
//             onClick={() => setShowForm(!showForm)}
//           >
//             {showForm ? "Hide Form" : "Add User"}
//           </button>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home showForm={showForm} />} />
//           <Route path="/users" element={<UserList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };
  
// const Home = ({ showForm }) => (
//   <div>
//     <h2>Welcome to the User Management System</h2>
//     <p>Select an option from the navigation bar.</p>
//     {showForm && <UserForm />}
//   </div>
// );

// export default App;




// CRUD App-------------------------------------------------------------------

// import React from 'react'
// import Home from './Components/CRUD/Home'
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Create from './Components/CRUD/Create'
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path='/create' element={<Create/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




// CRUD App by own-----------------------------------------------------------

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/CRUD Task/Home'
import Create from './Components/CRUD Task/Create'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

