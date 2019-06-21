const mongoose = require('mongoose');
let OrderSchema = new mongoose.Schema({
    userName:{required:true,type:String},
    order:{required:true,type:Array},
    orderId:{required:true,type:Number},
    send:{required:true,default:false,type:Boolean}
});
let order = mongoose.model('order',OrderSchema);
module.exports = order;