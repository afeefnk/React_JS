import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import Cart from "./Cart";
import "../../App.css";

const Navbar = () => {
  const { cart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
     <nav className="navbar">
        <h1 className="logo">E-commerce App</h1>
        <div className="cart-icon-container" onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </nav>

      {isCartVisible && <Cart onClose={toggleCart} />}
    </>
  );
};

export default Navbar;
