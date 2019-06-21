const express=require('express');
const multer=require('multer');
const upload=multer({dest:'uploads/'});
const app=express();
const router=express.Router();
const fs=require('fs');
const path=require('path');
const util=require('../util/util');
router.post('/img',upload.single('uploadimg'),(req,res)=>{
    fs.readFile(req.file.path,(err,data)=>{
        if(err){
            return res.send({err:-1,msg:"文件读取失败"})
        }
        let name=(new Date()).getTime()+parseInt(Math.random()*9999);
        let type=req.file.mimetype.split('/')[1];
        fs.writeFile(path.join(__dirname,`../public/img/${name}.${type}`),data,'binary',(err)=>{
            if(err){return res.send({err:-1,msg:"图片写入失败"})}
            res.send({err:0,msg:"图片上传成功",data:`/public/img/${name}.${type}`})
        })
    });
});
module.exports=router;