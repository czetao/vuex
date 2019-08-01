var express = require('express');
var router = express.Router();

//引入数据库连接模块
const connection = require('./conn');


// 测试连接
connection.connect(() =>{
  console.log('数据库连接成功')
})

//接收请求
router.post("/checklogin",(req,res) =>{

  let {username,password} = req.body;

  //数据库执行语句，进行sql查询
  const sql = `select * from users where username='${username}' and password='${password}'`
  //const sql = 'select * from users where username = ? and password = ?'
  connection.query(sql,(err,data) => {
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })


})

router.get('/userlist',(req,res) =>{
  const sql = 'select * from users'
  connection.query(sql,(err,data) =>{
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
})
module.exports = router;
