const express= require('express')
const router =new express.Router()
const otpGenerator = require('otp-generator')
const userStatus=require('../schema/userStatus');
// const triggerEmail = require('../email/email.js')

router.post('/verify',async (req,res)=>{
    const email=req.body.email
    const otp= otpGenerator.generate(6, { lowerCaseAlphabets:false , upperCaseAlphabets: false, specialChars: false });
    console.log(email)
    const user =new userStatus({email, otp , status:'unverify'})
    try{
        await user.save()
        res.status(201).send({email})
    }
    catch(e){
        res.status(400).send(e)
    }
    
    // let content={}
    // content.to=email
    // content.suj
})

module.exports=router