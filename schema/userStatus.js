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
        type : Boolean
    }
},{
    timestamps:true
})

status.methods.updateotp=async function(otp){
    let user=this
    user.otp=otp
    await user.save()
    return otp;
}

status.methods.updatestatus=async function(status){
    let user=this
    user.status=status
    await user.save()
    return status;
}

status.statics.findByCred= async(email)=>{
    const user = await userStatus.findOne({email:email})

    if(!user){
        return 0
    }
    return user
}

const userStatus=mongoose.model('user_status',status)

module.exports=userStatus