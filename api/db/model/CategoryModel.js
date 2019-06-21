const mongoose = require('mongoose');
let CategorySchema=new mongoose.Schema({
    imgPath:{required:true,type:String},
    tit:{required:true,type:String},
    num:{required:true,type:String},
    category:{required:true,type:String},
    proNum:{required:true,type:String,unique:true},
    price:{required:true,type:String},
    allNum:{required:true,type:String},
    newPro:{required:true,type:Boolean},
    proImgPath:{required:true,type:String},
    ensure:{required:true,type:String}
});
let category=mongoose.model('category',CategorySchema);
module.exports=category;