import React from 'react'
import { useCart } from './CartContext'
import './ECommerce.css'

const Cart = ({ onClose }) => {
  const { cart, removeItem, totalAmount } = useCart();

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-cart" onClick={onClose}>X</button>
        <h3>Your Shopping Cart</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
                  <div className="total-amount">Total Amount: ${totalAmount}</div>
          </ul>
          
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart
