import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        setCart([...cart, product]);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
