
var mongoose =require("mongoose");

const stuSchema=new mongoose.Schema({
   empnumber:String,
    empname:String,
    empdep:String,
    empcity:String,
    empsallary:Number,
    email:String,
    pass:String
})
module.exports=mongoose.model("employee",stuSchema);