const config=require('../config');
const jwt=require('./token');
const userJwt = require('./userToken');
let util={
    log:function (msg) {
        if (!config.debug) return false;
        console.log(msg)
    },
    verify:function (req,res,next) {
        let {token}=req.body;
        if(!token){ return res.send({err:-999,msg:"token不存在"})}
        jwt.checkToken(token)
            .then((data)=>{
                if(Date.now()-data.createTime>=config.loginTime){
                    res.send({err:-998,msg:"登录超时 请重新登"})
                }else {
                    next()
                }
            })
            .catch((err)=>{
                res.send({err:-997,msg:"token非法"})
            })
    },
    userVerify:function (req,res,next) {
        let {token}=req.body;
        if(!token){ return res.send({err:-999,msg:"token不存在"})}
        userJwt.checkToken(token)
            .then((data)=>{
                if(Date.now()-data.createTime>=config.loginTime){
                    res.send({err:-998,msg:"登录超时 请重新登"})
                }else {
                    next()
                }
            })
            .catch((err)=>{
                res.send({err:-997,msg:"token非法"})
            })
    }
};
module.exports=util;