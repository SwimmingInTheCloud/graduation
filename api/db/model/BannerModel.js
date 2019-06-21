const mongoose=require('mongoose');
let BannerSchema=new mongoose.Schema({
    imgPath:{required:true,type:String},
    desc:{required:true,type:String},
    tit:{required:true,type:String},
    time:{required:true,type:String}
});
let banner=mongoose.model('banner',BannerSchema);
module.exports=banner;