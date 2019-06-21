let Homectrl=require('../control/home.control.js');
const express=require('express');
const router=express.Router();
router.post('/uploadBanner',Homectrl.uploadBanner);
router.post('/getBanner',Homectrl.getBanner);
module.exports=router;