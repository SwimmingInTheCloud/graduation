const orderModel = require('../model/OrderModel');
let getOrders = function (req,res) {
    orderModel.find()
        .then(data =>{
            res.send({err:0,msg:"查找成功",data:data})
        })
        .catch(err =>{
            res.send({err:-1,msg:"查找失败"})
        })
};
let getOrderByUserName = function (req,res) {
    let {userName} = req.body;
    orderModel.find({userName:userName})
        .then(data =>{
            res.send({err:0,msg:"查找成功",data:data})
        })
        .catch(err =>{
            res.send({err:-1,msg:"查找失败"})
        })
};
let changeOrderSend = function (req,res) {
    let {_id} = req.body;
    orderModel.findOneAndUpdate({_id:_id},{send:true})
        .then(data =>{
            res.send({err:0,msg:"发货成功"})
        })
        .catch(err =>{
            res.send({err:-1,msg:"发货失败"})
        })
};
let delOrder = function (req,res) {
    let {_id} = req.body;
    orderModel.deleteOne({_id:_id})
        .then(data =>{
            res.send({err:0,msg:"删除成功"})
        })
        .catch(err =>{
            res.send({err:-1,msg:"删除失败"})
        })
};
let addOrder = function (req,res) {
    let {order,userName} = req.body;
    let orderId = (new Date()).getTime()+parseInt(Math.random()*99);
    orderModel.insertMany({order:order,userName:userName,orderId:orderId})
        .then(data =>{
            res.send({err:0,msg:"订单创建成功"})
        })
        .catch(err =>{
            res.send({err:-1,msg:"订单创建失败"})
        })
};
module.exports = {
    getOrders,
    changeOrderSend,
    delOrder,
    addOrder,
    getOrderByUserName
};