import React, { useState } from 'react'

const Keys = () => {
    const products = [
        {id: 1, name: "Mobile", brand: "Samsung", qty: 1},
        {id: 2, name: "Mobile", brand: "Apple", qty: 1},
        {id: 3, name: "Mobile", brand: "Moto", qty: 1},
    ]
    const [items, setItems] = useState(products)
    function changeQty(id){
        const newItems = items.map((item)=>item.id === id ? {...item,qty:item.qty + 1} : item)
        console.log(newItems);

        setItems(newItems);    
    }
  return (
    <div>
        {items.map((product)=>(
          <div key={product.id} style={{backgroundColor:"yellow" }} >
          <h1>{product.name}</h1>
          <h2>{product.brand}</h2>
          <h3>{product.qty}</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => changeQty(product.id)}> + </button>
          </div>
      </div>
        ))}
        
    </div>
  )
}

export default Keys
