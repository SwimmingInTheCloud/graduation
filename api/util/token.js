const jwt=require('jsonwebtoken');
const scrict='fgr844d1wqfssdfaoisdnacaboa';
function createToken(obj) {
    obj.createTime=Date.now();
    return jwt.sign(obj,scrict)
}
function checkToken(token) {
    return new Promise((reslove,reject)=>{
        jwt.verify(token,scrict,(err,data)=>{
            if(err){reject('token验证失败')}
            reslove(data);
        })
    })
}
module.exports={createToken,checkToken};