const express= require('express')
const bcrypt=require('bcryptjs')
const router =new express.Router()
const users=require('../schema/users');
router.post('/',async (req,res)=>{
    let {email,firstName, lastName, phoneNumber, zipCode, password, birthday, securityQuestionOne, securityOne, securityQuestionTwo, securityTwo, terms}=req.body
    password=await bcrypt.hash(password,8)
    const newUser =new users({email, firstName, lastName, phoneNumber, zipCode,password, birthday, securityQuestionOne, securityOne, securityQuestionTwo, securityTwo, terms})
    try{
        await newUser.save()
        res.status(200).send(newUser)
    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports=router