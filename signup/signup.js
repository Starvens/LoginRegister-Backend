const express= require('express')
const bcrypt=require('bcryptjs')
const router =new express.Router()
const users=require('../schema/users');
router.post('/',async (req,res)=>{
    let {email,firstname, lastname, phone, zip,password}=req.body
    password=await bcrypt.hash(password,8)
    const newUser =new users({email, firstname, lastname, phone, zip,password})
    try{
        await newUser.save()
        res.status(201).send(newUser)
    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports=router