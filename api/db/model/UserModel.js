const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    userName:{required:true,type:String},
    email:{required:true,type:String},
    passWord:{required:true,type:String},
    imgPath:{required:false,type:String}
});
let user = mongoose.model('user',UserSchema);
module.exports = user;