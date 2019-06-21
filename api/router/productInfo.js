const express=require('express');
const util=require('../util/util');
const router=express.Router();
const productInfoController=require('../db/controller/productInfoController');
router.post('/addProductInfo',util.verify,productInfoController.addProductInfoModel);
router.post('/delProductInfo',util.verify,productInfoController.delProductInfoModel);
router.post('/changeProductInfo',util.verify,productInfoController.changeProductInfoModel);
router.post('/getProductInfo',productInfoController.getProductInfoModel);
module.exports=router;