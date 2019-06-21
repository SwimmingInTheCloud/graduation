const express=require('express');
const app=express();
const home=require('./router/home');
app.use('/home',home);