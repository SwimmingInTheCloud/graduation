const newProductModel=require('../model/NewProductModel');
const util=require('../../util/util');
let getNewProduct=function (req,res) {
    newProductModel.find()
        .then((data)=>{
        res.send({err:0,msg:"获取成功",data:data})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"获取失败"});
            console.log(err)
        })
};
let addNewProduct=function (req,res) {
    let {imgPath,tit,price,num,proNum}=req.body;
    newProductModel.insertMany({imgPath:imgPath,tit:tit,price:price,num:num,proNum:proNum})
        .then((data)=>{
        res.send({err:0,msg:"添加成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"添加失败"});
            util.log(msg);
        })
};
let delNewProduct=function (req,res) {
    let {_id}=req.body;
    newProductModel.deleteOne({_id:_id})
        .then((data)=>{
        res.send({err:0,msg:"删除成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"删除失败"});
            util.log(err);
        })
};
let changeNewProduct=function (req,res) {
    let {_id,tit,price,imgPath}=req.body;
    newProductModel.findOneAndUpdate({_id:_id},{price:price,tit:tit,imgPath:imgPath})
        .then((data)=>{
        res.send({err:0,msg:"修改成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"修改失败"});
            util.log(err);
        })
};
let findByIdNewProduct=function (req,res) {
    newProductModel.find({_id:req.body._id})
        .then((data)=>{
        res.send({err:0,msg:"获取成功",data:data})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"获取失败"});
            util.log(err);
        })
};
module.exports={
    getNewProduct,
    addNewProduct,
    delNewProduct,
    changeNewProduct,
    findByIdNewProduct
};