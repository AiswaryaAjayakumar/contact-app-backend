var mongoose=require('mongoose')

var contactSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        ph:{
            type:Number,
            required:true
        }
    }
)

var contactModel= mongoose.model('contacts',contactSchema)

module.exports={contactModel}