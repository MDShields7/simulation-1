import React, { Component } from 'react'
import Product from '../Product/Product';
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
      const {inventory}=this.props;
    //   console.log(inventory);
    console.log('props.inventory',this.props.inventory)
    return (
      <div>
            {/* <h1>Dashboard</h1> */}
            <div className='product-view'>{
                inventory.map( elem => (
                <Product
                key={elem.key}
                id={elem.id}
                name={elem.name}
                price={elem.price}
                image_url={elem.image_url}

                getOneMethod={this.props.getOneMethod}
                deleteMethod={this.props.deleteMethod}
                />
                ))
            }
            </div> 
      </div>
    )
  }
}
