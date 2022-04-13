const express= require('express')
const router =new express.Router()
const triggerEmail = require('../email/email.js')

router.post('/verify',(req,res)=>{
    const email=req.body.email

    let content={}
    content.to=email
    content.suj
})