import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>{props.type}</p>
        <h4>{props.price}</h4>  
      
    </div>
  )
}

export default Product
