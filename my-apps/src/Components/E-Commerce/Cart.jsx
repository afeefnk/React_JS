import React from 'react';
import { useCart } from './CartContext';
import './ECommerce.css';

const Cart = ({ onClose }) => {
  const { cart, removeItem, totalAmount } = useCart();

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-cart" onClick={onClose}>X</button>
        <h3>Your Shopping Cart</h3>
        {cart.length > 0 ? (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <h4>${item.price.toFixed(2)}</h4>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
