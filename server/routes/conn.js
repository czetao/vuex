var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '666666',
  database : 'vue'
});
 
//将这个模块暴露出去
module.exports = connection;