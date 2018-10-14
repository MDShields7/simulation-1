import React from 'react'
import './Product.css'

export default (props) => {
    
  return (
    <div className='product_box'>
        {/* <h1>Product</h1> */}
        <img src={props.image_url} alt=""/>
        <span className='name' value={props.name}>{props.name}</span>
        <span className='price' value={props.price}>${props.price}</span>
        <button onClick={ () => props.getOneMethod(props.id)}>Edit</button>
        <button onClick={ () => props.deleteMethod(props.id)}>Delete</button>
    </div>
  )
}
