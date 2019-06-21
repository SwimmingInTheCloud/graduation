const express=require('express');
const router=express.Router();
const adminControl=require('../db/controller/adminController');
router.post('/reg',adminControl.adminReg);
router.post('/login',adminControl.adminLogin);
module.exports=router;