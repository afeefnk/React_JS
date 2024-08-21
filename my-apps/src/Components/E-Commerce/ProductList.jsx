import React from 'react';
import { useCart } from './CartContext';
import './ECommerce.css';

const ProductList = () => {
    const { addItem } = useCart();

    const products = [
        { 
            id: 1, 
            name: 'OnePlus 12', 
            description: 'Buy OnePlus 12 5G Smartphone Online. Featuring Snapdragon 8th Gen 3, 4th-Gen Hasselblad Camera, Swift Charging, & more.',
            price: 776,
            image: 'https://image01-in.oneplus.net/media/202407/04/6c65a8d000b569dab4d9898c1dde1dfb.png' 
        },
        {   
            id: 2, 
            name: 'Woodland Shoe Men', 
            description: 'High-quality uppers, sturdy soles, and impeccable stitching come together to create products that can withstand diverse rigorous conditions.',
            price: 28, 
            image: 'https://assets.woodlandworldwide.app/compressed/images/FGC0L80R7421Z/CAMEL/FGC0L80R7421Z_010_5.jpg' 
        },
        { 
            id: 3, 
            name: 'Rolex Daytona', 
            description: 'The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist',
            price: 110, 
            image: 'https://img.staticdj.com/653df34954ef6722035076b994c700ea.jpg' 
        
        },
      ];

  return (
    <div className="container">
      
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList
