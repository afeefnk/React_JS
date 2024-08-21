import React from 'react';
import { useCart } from './CartContext';
import './ECommerce.css';

const Cart = ({ onClose }) => {
  const { cart, removeItem, totalAmount } = useCart();

  return (
    <div className="cart-overlay">
      <div className="cart-content-fullscreen">
        <button className="close-cart" onClick={onClose}>X</button>
        <h2>Your Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <div className="cart-items-fullscreen">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-fullscreen">
                  <img src={item.image} alt={item.name} className="cart-item-image-fullscreen" />
                  <div className="cart-item-details-fullscreen">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h4>${item.price.toFixed(2)}</h4>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total-fullscreen">
              <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
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
