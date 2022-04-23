const mongoose=require('mongoose')

const validator=require('validator')

const user=new mongoose.Schema({
    email:{
        unique:true,
        required:true,
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        },
        trim:true,
        lowercase:true
    },
    firstName:{
        type : String
    },
    lastName:{
        type : String
    },
    phoneNumber:{
        type : String
    },
    zipCode:{
        type : String
    },
    password:{
        required:true,
        type:String,
        minlength:7,
        trim:true,
    },
    birthday:{
        type : String
    },
    securityQuestionOne:{
        type : String
    },
    securityOne:{
        type : String
    },
    securityQuestionTwo:{
        type : String
    },
    securityTwo:{
        type : String
    },
    terms:{
        type : String
    },
},{
    timestamps:true
})



const users=mongoose.model('users',user)

module.exports=users