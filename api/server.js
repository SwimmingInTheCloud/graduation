const express=require('express');
const app=express();
const path=require('path');
const util=require('./util/util');
const cors=require('cors');
app.use(cors());
const connect=require('./db/connect');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public', express.static(path.join(__dirname,'./public')));
const uploadImg=require('./router/uploadImg');
const banners=require('./router/banners');
const admin=require('./router/admin');
const newProduct=require('./router/newProduct');
const productInfo=require('./router/productInfo');
const category = require('./router/category');
const User = require('./router/user');
const Order = require('./router/order');


app.use('/banners',banners);
app.use('/admin/upload',uploadImg);
app.use('/admin',admin);
app.use('/newProduct',newProduct);
app.use('/productInfo',productInfo);
app.use('/category',category);
app.use('/user',User);
app.use('/order',Order);

app.listen(3001,()=>{
    util.log('服务器开启 端口：3001')
});