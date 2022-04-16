const express=require('express');
const bodyParser = require('body-parser');
require('./mongoos');

const app=express()
app.use(bodyParser.json()); 
app.use(express.json())

const verify=require('./signup/verify')
const signup=require('./signup/signup')

app.use('/verify',verify)
app.use('/signup',signup)

app.listen(8082,()=>console.log('listning....'))