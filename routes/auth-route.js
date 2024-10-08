const express=require('express');
const router=express.Router();
const userSchema=require('../models/user-model');
const {userName}=require('../controllers/user-controller');

router.route('/user').post(userName,userSchema);

module.exports=router;