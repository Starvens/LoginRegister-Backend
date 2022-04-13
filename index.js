const express=require('express');
const app=express()
app.use(express.json())

const verify=require('./signup/verify')

app.use(verify)

app.listen(8080,()=>console.log('listning....'))