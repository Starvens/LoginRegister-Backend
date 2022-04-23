const express= require('express')
const bcrypt=require('bcryptjs')
const router =new express.Router()
const users=require('../schema/users');

router.post('/',async (req,res)=>{
    let {email, password}=req.body

    let user=await users.findByCred(email)
    console.log(user)
    if(user==0){
        return res.status(404).send({msg:'user not found'})
    }
    const ismatch= await bcrypt.compare(password,user.password)
    if(!ismatch){
        res.status(401).send({msg:'incorrect password'})
    }
    else{
        res.status(200).send(user)
    }
})

module.exports=router