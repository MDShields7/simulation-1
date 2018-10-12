import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='dash-box'>
          <Dashboard/>
        </div>
        <div className='form-box'>
          <Form/>
        </div>
        <div className='header-box'>
          <Header/>
        </div>
      </div>
    );
  }
}

export default App;
