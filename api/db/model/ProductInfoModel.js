const mongoose=require('mongoose');
let ProductInfoSchema=new mongoose.Schema({
    tit:{required:true,type:String},
    state:{required:true,type:String},
    price:{required:true,type:String},
    imgPath:{required:true,type:String},
    detail:{required:true,type:String},//详情
    parameter:{required:true,type:String},//参数
    service:{required:true,type:String}//售后
});
let productInfo=mongoose.model('productInfo',ProductInfoSchema);
module.exports=productInfo;