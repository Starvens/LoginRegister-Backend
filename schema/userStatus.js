const mongoose=require('mongoose')

const validator=require('validator')



const status=new mongoose.Schema({
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
    otp:{
        type : String
    },
    status:{
        type : String
    }
},{
    timestamps:true
})


const userStatus=mongoose.model('user_status',status)

module.exports=userStatus