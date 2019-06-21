const mongoose=require('mongoose');
let AdminSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    passWord:{type:String,required:true},
    token:{type:String}
});
let admin=mongoose.model('admin',AdminSchema);
module.exports=admin;