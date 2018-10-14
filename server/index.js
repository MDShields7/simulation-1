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
app.get('/api/inventory/:id', controller.readOne);
app.post('/api/inventory', controller.post);
app.delete('/api/inventory/:id', controller.delete);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Leeeeroy Jenkins! ${port}`);
})