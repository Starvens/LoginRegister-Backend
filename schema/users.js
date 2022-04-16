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
    firstname:{
        type : String
    },
    lastname:{
        type : String
    },
    phone:{
        type : String
    },
    zip:{
        type : String
    },
    password:{
        required:true,
        type:String,
        minlength:7,
        trim:true,
    }
},{
    timestamps:true
})



const users=mongoose.model('users',user)

module.exports=users