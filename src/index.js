import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from ('axios');
import express from ('express');
import bodyParser from ('body-parser');
import massive from ('massive');
// import * as serviceWorker from './serviceWorker';
const app = express ();
app.use(boydPArser.json());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
