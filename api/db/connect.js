const util=require('../util/util');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', (err)=>{
    util.log('数据库连接错误：'+err)
});
db.on('open', function() {
    util.log('数据库连接成功')
});