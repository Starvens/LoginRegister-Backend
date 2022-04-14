const mongoose=require('mongoose')
require('dotenv').config()

const url="mongodb+srv://awsLambda:"+process.env.mongo_pass+"@starvvenssimplefileshar.ruwbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,
{   
    useNewUrlParser: true,
    useUnifiedTopology: true 
})