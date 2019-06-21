const adminModel=require('../model/AdminModel');
const util=require('../../util/util');
const jwt=require('../../util/token');
let adminReg=function (req,res) {
    let {userName,passWord}=req.body;
    adminModel.find({userName:userName})
        .then((data)=>{
        if(data.length!==0){res.send({err:-1,msg:"用户名已注册"})}
        return adminModel.insertMany({userName:userName,passWord:passWord})
        })
        .then((data)=>{
        res.send({err:0,msg:"注册成功"})
        })
        .catch((err)=>{
        res.send({err:-1,msg:"注册失败"});
            console.log(err)
        })
};
let adminLogin=function (req,res) {
    let {userName,passWord}=req.body;
    adminModel.find({userName:userName,passWord:passWord})
        .then((data)=>{
        if(data.length!==0){
            let token=jwt.createToken({_id:data[0]._id});
            res.send({err:0,msg:"登陆成功",token:token});
            adminModel.findOneAndUpdate({_id:data[0]._id},{token:token})
            .then((data)=>{

            })
                .catch((err)=>{
                    res.send({err:-1,msg:"登录失败"});
                    console.log(err)
                })
        }else if(data.length===0){
            res.send({err:-1,msg:"用户名或密码错误"})
        }
        })
};
module.exports={
    adminReg,
    adminLogin
};