const mongoose=require('mongoose');
let NewProductSchema=new mongoose.Schema({
    imgPath:{required:true,type:String},
    tit:{required:true,type:String},
    price:{required:true,type:String},
    num:{required:true,type:String},
    proNum:{required:true,type:String,unique:true}
});
let newProduct=mongoose.model("newproduct",NewProductSchema);
module.exports=newProduct;