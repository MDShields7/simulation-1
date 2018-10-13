const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
// // import * as serviceWorker from './serviceWorker';
const app = express ();
app.use(bodyParser.json());
const controller = require('./controller');

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
  }).catch( err => console.log(err) );

app.get('/api/inventory', controller.read);

const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`Leeeeroy Jenkins! ${port}`);
})