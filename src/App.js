import React, { Component } from 'react';
import axios from 'axios';
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
      editItem: {},
      editing: false,
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.editStatus = this.editStatus.bind(this);
    this.postMethod = this.postMethod.bind(this);
    this.getOneMethod = this.getOneMethod.bind(this);
    this.updateMethod = this.updateMethod.bind(this);
    this.deleteMethod = this.deleteMethod.bind(this);
  }
  componentDidMount(){
    axios.get('/api/inventory').then(response => {
      // console.log('app.js, componentDidMount, response.data', response.data, 'typeof response.data', typeof response.data)
      this.setState ({inventory: response.data})
    })
  };
  getOneMethod(id){
    // console.log('app.js, getOneMethod, this.state', this.state)
    axios.get('/api/inventory'+`/${id}`).then(response => {      
      console.log('app.js, getOneMethod, response', response.data)
      console.log('app.js, getOneMethod, id', id)
      this.setState ({editItem: response.data[0]})
    })
    this.editStatus()
  };
  postMethod(name, price, image_url){
    console.log('postMethod')
    axios.post('/api/inventory', {name, price, image_url}).then(response => { console.log(response)});
    // this.componentDidMount();
  };
  deleteMethod(id){
    console.log('deleteMethod', 'id', id, );
    // axios.delete('/api/inventory' +`/${id}`)
    axios.delete(`/api/inventory/${id}`)
    // this.componentDidMount();
  };
  updateMethod(id, name, price, image_url){
    console.log('updateMethod');
    axios.put('/api/inventory' +`/${id}`, {name, price, image_url});
  };
  // editItem(id){

  // };
  editStatus(){
    this.setState({
      editing: true,
    })
  };

  render() {
    console.log('app.js, render, this.state', this.state);
    return (

      <body>

          <div className='header-box'>
            <Header/>
            <button onClick={this.componentDidMount}>state</button>
          </div>
          <div className='below_header'>
            <div className='dash-box'>
              <Dashboard
              getOneMethod={this.getOneMethod}
              deleteMethod={this.deleteMethod}
              inventory={this.state.inventory}
              />
            </div>
            <div className='form-box'>
              <Form
              updateMethod={this.updateMethod}
              editing={this.state.editing}
              editItem={this.state.editItem}
              postMethod={this.postMethod}
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