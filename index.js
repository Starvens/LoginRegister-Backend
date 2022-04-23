const express=require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

require('./mongoos');

const app=express()

app.use(cors())
app.use(bodyParser.json()); 
app.use(express.json())

const verify=require('./signup/verify')
const signup=require('./signup/signup')
const login=require('./signin/signin')

app.use('/verify',verify)
app.use('/signup',signup)
app.use('/signin',login)

app.listen(8082,()=>console.log('listning....'))