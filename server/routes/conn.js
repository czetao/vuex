//引入mysql
var mysql = require('mysql');

//创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '666666',
  database : 'vue'
});
 
//将这个模块暴露出去
module.exports = connection;