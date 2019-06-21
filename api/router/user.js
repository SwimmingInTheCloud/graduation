const express = require('express');
const router = express.Router();
const userControl = require('../db/controller/userController');
router.post('/checkemail',userControl.checkEmail);
router.post('/checkusername',userControl.checkUserName);
router.post('/login',userControl.login);
router.post('/reg',userControl.reg);
router.post('changeuserinfo',userControl.changeUserInfo);
router.post('/getcode',userControl.getCode);
router.post('/getinfobyusername',userControl.getInfoByUserName);
module.exports = router;