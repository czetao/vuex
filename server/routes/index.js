var express = require('express');
var router = express.Router();

//引入数据库连接模块
const connection = require('./conn');

//接收请求
router.post("/checklogin",(req,res) =>{

  let {username,password} = req.body;
  console.log(username,password);
  res.send("1111")
})

module.exports = router;
