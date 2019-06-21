const categoryModel=require('../model/CategoryModel');
let getAllCategory = function (req,res) {
    categoryModel.find()
        .then(data => {
            res.send({err:0,msg:"查找成功",data:data})
        })
        .catch(err => {
            res.send({err:-1,msg:"查找失败"})
        })
};
let changeProState = function (req,res) {
    let {_id,newPro} = req.body;
    console.log(newPro)
    categoryModel.findOneAndUpdate({_id:_id},{newPro:newPro})
        .then(data => {
            res.send({err:0,msg:"修改成功"})
        })
        .catch(err => {
            res.send({err:-1,msg:"修改出错"})
        })
};
let getProductByCategory = function (req,res) {
    let {category} = req.body;
    categoryModel.find({category:category})
        .then(data => {
            res.send({err:0,msg:"查找ok",data:data})
        })
        .catch(err => {
            res.send({err:-1,msg:"查找出错"})
        })
};
let addCategoryProduct = function (req,res) {
    let {imgPath,tit,num,category,proNum,price,allNum,newPro,proImgPath,ensure} = req.body;
    categoryModel.insertMany({imgPath:imgPath,proImgPath:proImgPath,tit:tit,num:num,category:category,ensure:ensure,proNum:proNum,price:price,allNum:allNum,newPro:newPro})
        .then(data => {
            res.send({err:0,msg:"添加成功"})
        })
        .catch(err => {
            res.send({err:-1,msg:"添加失败"})
        })
};
let delCategoryProduct = function (req,res) {
    let {_id} = req.body;
    categoryModel.deleteOne({_id:_id})
        .then(data => {
            res.send({err:0,msg:"删除成功"})
        })
        .catch(err => {
            res.send({err:-1,msg:"删除失败"})
        })
};
let changeCategoryProduct = function (req,res) {
    let {_id,imgPath,tit,num,category,proNum,price,allNum,newPro} = req.body;
    categoryModel.findOneAndUpdate({_id:_id},{imgPath:imgPath,tit:tit,num:num,category:category,proNum:proNum,price:price,allNum:allNum,newPro:newPro})
        .then(data => {
            res.send({err:0,msg:"修改成功"})
        })
        .catch(err => {
            res.send({err:-1,msg:"修改错误"})
        })
};
let getNewPro = function (req,res) {
    categoryModel.find({newPro:"true"})
        .then(data => {
            res.send({err:0,msg:"查找成功",data:data})
        })
        .catch(err => {
            res.send({err:-1,msg:"查找错误"})
        })
};
let getProById = function (req,res) {
    let {_id} = req.body;
    categoryModel.find({_id:_id})
        .then(data => {
            res.send({err:0,msg:"find ok",data:data})
        })
        .catch(err => {
            res.send({err:-1,msg:"find err"})
        })
};
module.exports={
    getProductByCategory,
    addCategoryProduct,
    delCategoryProduct,
    changeCategoryProduct,
    getAllCategory,
    changeProState,
    getNewPro,
    getProById
};
