import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      inventory: [],
      cart: [],
      newItem: {},
    }
  }
  getServer(){
    axios.get('/api/inventory')
  }

  addToCart (e){
    const {name, price, image_url} = e.target.value;
    // let newItem = {
    //   image_url: '',
    //   name: '',
    //   price: 0,
    // };
    let newCart = this.state.cart
  }

  render() {
    console.log(this.state);
    return (

      <body>
          <div className='header-box'>
            <Header/>
          </div>
          <div className className='below_header'>
            <div className='dash-box'>
              <Dashboard

              inventory={this.state.inventory}/>
            </div>
            <div className='form-box'>
              <Form
              // newItem={newItem}
              />
            </div>
          </div>
      </body>
    );
  }
}

export default App;

// {
//   name: 'laptop',
//   price: 2600,
//   image_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5465/5465502_sd.jpg;maxHeight=640;maxWidth=550',
// },
// {
//   name: 'iPhone',
//   price: 800,
//   image_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5999/5999105_sd.jpg;maxHeight=640;maxWidth=550',
// },
// {
//   name: 'tablet',
//   price: 1000,
//   image_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5505/5505500_sd.jpg;maxHeight=640;maxWidth=550',
// }