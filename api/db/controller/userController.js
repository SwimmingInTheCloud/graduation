const usereModel = require('../model/UserModel');
const jwt = require('../../util/userToken');
const sendCode = require('../../util/mail');
let checks = {};
let checkUserName = function (req,res) {
    let {userName} = req.body;
    usereModel.find({userName:userName})
        .then(data =>{
            if(data.length===1){
                res.send({err:1,msg:"用户名重复"})
            }
            res.send({err:0,msg:"用户名可用"})
        })
        .catch(data =>{
            res.send({err:-1,msg:"查找出错"})
        })
};
let checkEmail = function (req,res) {
    let {email} = req.body;
    usereModel.find({email:email})
        .then(data =>{
            if(data.length===1){
                res.send({err:1,msg:"邮箱重复"})
            }
            res.send({err:0,msg:"邮箱可用"})
        })
        .catch(data =>{
            res.send({err:-1,msg:"查找出错"})
        })
};
let login = function (req,res) {
    let {email,passWord} = req.body;
    usereModel.find({email:email,passWord:String(passWord)})
        .then(data =>{
            if(data.length===1){
                let token = jwt.createToken({_id:data[0]._id});
                res.send({err:0,msg:"查找成功",data:data[0].userName,token:token})
            }
            res.send({err:1,msg:"未找到"})
        })
        .catch(err =>{
            res.send({err:-1,msg:"登录失败"})
        })
};
let reg = function (req,res) {
    let {userName,passWord,email,code} = req.body;
    if(checks[email]!=code){
        return res.send({err:2,msg:"验证码错误"})
    }
    usereModel.find({userName:userName})
        .then(data =>{
            if(data.length>=1){
                return res.send({err:4,msg:"用户名已存在"})
            }
            return usereModel.insertMany({userName:userName,passWord:passWord,email:email})
        })
        .then(data =>{
            res.send({err:0,msg:"注册成功"})
        })
        .catch(err =>{
            res.send({err:-1,msg:"注册失败"})
        });
};
let changeUserInfo = function (req,res) {

};
let getCode = function (req,res) {
    let {email} = req.body;
    usereModel.find({email:email})
        .then(data =>{
            if(data.length>=1){
                res.send({err:3,msg:"邮箱已存在"})
            }
        })
        .catch(err =>{
            res.send({err:-1,msg:"邮箱检测失败"})
        });
    let code = parseInt(Math.random()*100000);
    sendCode.send(String(email),code)
        .then(data=>{
            checks[email] = code;
            res.send({err:0,msg:"发送成功"})
        })
        .catch(err=>{

        });
};
let getInfoByUserName = function (req,res) {
    let {userName} = req.body;
    usereModel.find({userName:JSON.parse(userName)})
        .then(data =>{
            console.log(data)
            res.send({err:0,msg:"查找成功",data:data})
        })
        .catch(err =>{
            res.send({err:-1,msg:"查找失败"})
        })
};
module.exports = {
    checkEmail,
    checkUserName,
    login,
    reg,
    changeUserInfo,
    getCode,
    getInfoByUserName
};