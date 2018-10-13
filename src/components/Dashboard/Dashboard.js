import React, { Component } from 'react'
import Product from '../Product/Product';
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
      const {inventory}=this.props;
      console.log(inventory);
    return (
      <div>
            <h1>Dashboard</h1>
            <div className='product_view'>{
                inventory.map( elem => (
                <Product
                name={elem.name}
                price={elem.price}
                image_url={elem.image_url}
                />))
            }</div> 
      </div>
    )
  }
}
