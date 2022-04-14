const express=require('express');
const bodyParser = require('body-parser');
require('./mongoos');

const app=express()
app.use(bodyParser.json()); 
app.use(express.json())

const verify=require('./signup/verify')

app.use(verify)

app.listen(8087,()=>console.log('listning....'))