const util=require('../../util/util');
const productInfoModel=require('../model/ProductInfoModel');
let addProductInfoModel=function (req,res) {
    let {num,tit,state,price,imgPath,detail,parameter,service}=req.body;
    productInfoModel.insertMany({num:num,tit:tit,state:state,price:price,imgPath:imgPath,detail:detail,parameter:parameter,service:service})
        .then((data)=>{
        res.send({err:0,msg:"添加成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"添加失败"});
            util.log(err);
        })
};
let delProductInfoModel=function (req,res) {
    let {_id}=_id;
    productInfoModel.remove({_id:_id})
        .then((data)=>{
        res.send({err:0,msg:"删除成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"删除失败"});
            util.log(err);
        })
};
let changeProductInfoModel=function (req,res) {
    productInfoModel.findByIdAndUpdate({_id:_id},{num:num,tit:tit,state:state,price:price,imgPath:imgPath,detail:detail,parameter:parameter,service:service})
        .then((data)=>{
        res.send({err:0,msg:"修改成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"修改失败"});
            util.log(err)
        })
};
let getProductInfoModel=function (req,res) {
    productInfoModel.find()
        .then((data)=>{
        res.send({err:0,msg:"获取成功",data:data});
        })
        .catch((err)=>{
        res.send({err:-1,msg:"获取失败"});
        util.log(err);
        })
};
module.exports={
    addProductInfoModel,
    delProductInfoModel,
    changeProductInfoModel,
    getProductInfoModel
};