import React, { useState } from 'react';
import "./FoodKeys.css";

const FoodKeys = () => {
    const foods =[
        {id: 1,hotel: 'Grand Hayatt', item: 'Chinese Food', price: '840/-', qty: 0},
        {id: 2,hotel: 'Hotel Sagar', item: 'North Indian Food', price: '570/-', qty: 0},
        {id: 3,hotel: 'Annapoorna', item: 'Sadhya', price: '120/-', qty: 0},
    ]
    const [items,newItems]=useState(foods)
    let handleChangeQty =((id)=>{
        const updatedItems = items.map((singleitem)=>singleitem.id === id ? {...singleitem,qty:singleitem.qty + 1} : singleitem)
        console.log(updatedItems);
        newItems(updatedItems);
    })


  return (
    <div className='container'>
        {items.map((food)=>(
            <div key={food.id} className='food-card'>
            <h1>{food.hotel}</h1>
            <h2>Item: {food.item}</h2>
            <h3>Price: {food.price}</h3>
            <h3>Quantity: {food.qty}</h3>
            <button onClick={ ()=> handleChangeQty(food.id)}> Add Quantity </button>
            </div>
        ))}
    </div>
  )
}

export default FoodKeys
