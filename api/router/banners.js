const express=require('express');
const router=express.Router();
const util=require('../util/util');
const bannerModel=require('../db/model/BannerModel');
router.get('/getBanners',(req,res)=>{
    bannerModel.find()
        .then((data)=>{
            res.send({err:0,msg:"获取ok",data:data})
        })
        .catch((err)=>{
        console.log(err);
            res.send({err:-1,msg:"获取失败"})
        })
});
router.post('/addBanners',util.verify,(req,res)=>{
    let {imgPath,desc,tit,time}=req.body;
    bannerModel.insertMany({imgPath:imgPath,desc:desc,tit:tit,time:time})
        .then((data)=>{
        res.send({err:0,msg:'banner上传成功'})
        })
        .catch((err)=>{
        console.log(err)
        res.send({err:-1,msg:`banner上传失败${err}`})
        })
});
router.post('/delbanners',util.verify,(req,res)=>{
    let {_id}=req.body;
    bannerModel.remove({_id:_id})
        .then((data)=>{
        res.send({err:0,msg:"删除成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"删除失败"})
        })
});
router.post('/getbannerbyid',(req,res)=>{
    let {_id}=req.body;
    bannerModel.find({_id:_id})
        .then((data)=>{
        res.send({err:0,msg:"by id 获取成功",data:data})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"by id 获取失败"});
            console.log(err)
        })
});
router.post('/updatebanners',util.verify,(req,res)=>{
    let {_id,tit,imgPath,desc,time}=req.body;
    bannerModel.findOneAndUpdate({_id:_id},{tit:tit,imgPath:imgPath,desc:desc,time:time})
        .then((data)=>{
        res.send({err:0,msg:"更新成功"});
        })
        .catch((err)=>{
        res.send({err:-1,msg:"更新失败"});
            console.log(err)
        })
});
router.post('/removeBanners',util.verify,(req,res)=>{
        bannerModel.remove({_id:{$in:req.body.data}})
            .then((data)=>{
            res.send({err:0,msg:"删除成功"})
            })
            .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:"删除失败"});
            })
});
module.exports=router;