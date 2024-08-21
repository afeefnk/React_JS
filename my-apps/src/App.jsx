// import { useEffect, useRef, useState } from "react";
// import "./App.css";





// import FoodKeys from "./Components/FoodKeys";
// import Keys from "./Components/Keys.jsx";
// import Form from "./Components/Form";~
// import MyForm from "./Components/MyForm";
// import Prop from "./Components/Prop";
// import PropData from "./Components/PropData";
// import ChildA from "./Components/useContext/ChildA";
// import ProductData from "./Components/ProductData";


// import Header from "./Components/useContext/Header";
// import Layout from "./Components/useContext/Layout";
// import MainContext from "./Components/useContext/MainContext";





// import CartProvider from "./Components/E-Commerce/CartProvider";
// import Navbar from "./Components/E-Commerce/Navbar";
// import ProductList from "./Components/E-Commerce/ProductList";




// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavbarRouting from "./Components/Routing/NavbarRouting";
// import Home from './Components/Routing/Home';
// import About from './Components/Routing/About';
// import Contact from './Components/Routing/Contact';
// import Service from './Components/Routing/Service';
// import Login from "./Components/Routing/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Task Commerce Site/Home";
import Navbar from "./Components/Task Commerce Site/Navbar";
import Shop from "./Components/Task Commerce Site/Shop";
import About from "./Components/Task Commerce Site/About";
import Login from "./Components/Task Commerce Site/Login";





function App() {
  // const [count, setCount] = useState(0);
  // const [preCount, setPreCount] = useState(0);
  
  // const inputRef = useRef(null);
  // function handleClick() {
  //   inputRef.current.style.padding = "10px";
  //   inputRef.current.style.backgroundColor = "yellow";
  //   inputRef.current.style.border = "none";
  //   inputRef.current.focus();
  //   console.log(inputRef.current.value);
  // }
  // useEffect(() => {
  //   if (count > preCount) {
  //     console.log("Value is Incremented");
  //   } else if (count < preCount) {
  //     console.log("Value is Decremented");
  //   }
  //   setPreCount(count);
  // }, [count, preCount]);

  // let increment = () => {
  //   setCount(count + 1);
  // };

  // let decrement = () => {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  //   // console.log(count);
  // };

  return (
    <>
     {/* <nav className="navbar">
        <div className="head1">
          <h1>Softroniics</h1>
        </div>
        <div>
          <a href="$" className="btn">
            Home
          </a>
          <a href="$" className="btn">
            About
          </a>
          <a href="$" className="btn">
            Portfolio
          </a>
          <a href="$" className="btn">
            Services
          </a>
          <a href="$" className="btn">
            Contact
          </a>
        </div>
      </nav> */}
      <div className="main">
        {/* <button onClick={increment} className="btn1">
          Increment
        </button>
        <button onClick={decrement} className="btn1">
          Decrement
        </button>
        <h1>{count}</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick} className="btn1">
          Click
        </button> */}
        {/* <Keys/> */}
        {/* <FoodKeys/> */}



        {/* <Form/> */}



        {/* <MyForm/> */}



        {/* <PropData/> */}



        {/* <ChildA name={'Hello World'}/> */}



        {/* <ProductData/> */}






        {/* <MainContext>
          <Header/>
          <Layout/>
          </MainContext> */}






{/* <CartProvider>
      <div>
        <Navbar/>
        <div className="container">
          <ProductList />
        </div>
      </div>
    </CartProvider> */}




    {/* <BrowserRouter>
    <NavbarRouting/>
    <Routes>
      <Route path="/" element = {<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element = {<About/>}></Route>
      <Route path="/contact" element = {<Contact/>}></Route>
      <Route path="/service" element = {<Service/>}></Route>
    </Routes>
    </BrowserRouter> */}

<BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element = {<Home/>}></Route>
    <Route path="/shop" element = {<Shop/>}></Route>
    <Route path="/about" element = {<About/>}></Route>
    <Route path="/login" element = {<Login/>}></Route>
    


    </Routes>
</BrowserRouter>




      </div>
    </>
  );
}

export default App;
