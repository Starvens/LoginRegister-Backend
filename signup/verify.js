const express= require('express')
const router =new express.Router()
const otpGenerator = require('otp-generator')
const userStatus=require('../schema/userStatus');
const sendotp=require('../email/sendgrid')

router.post('/email',async (req,res)=>{
    const email=req.body.email
    const otp= otpGenerator.generate(6, { lowerCaseAlphabets:false , upperCaseAlphabets: false, specialChars: false });
    console.log(email)
    let user = await userStatus.findByCred(email)
    console.log(user)
    if(user==0){
        const newUser =new userStatus({email, otp , status:0})
        try{
            await newUser.save()
            sendotp(email,otp)
            res.status(201).send({email})
        }
        catch(e){
            res.status(400).send(e)
        }
    } 
    else{
        user.updateotp(otp)
        sendotp(email,otp)
        res.status(200).send({email})
    }

})

router.post('/otp',async (req,res)=>{
    const {email,otp}=req.body
    const user = await userStatus.findByCred(email)
    console.log(user)
    if(user.otp==otp){
        user.updatestatus(true)
        return res.status(200).send({status:true})
    }
    res.status(401).send({status:false})
})

router.get('/resend',async (req,res)=>{
    const {email}=req.body
    const user = await userStatus.findByCred(email)
    console.log(user.otp)
    sendotp(email,user.otp)
    res.status(200).send({status:true})
})

module.exports=router