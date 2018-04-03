//express_demo.js 文件
var express = require('express');
var app = express();
// /*
//路由
app.get('/index', function (req, res) {
    res.json({data:"hello word"});
});
 // */
/*
//路由 拿参数
app.get('/index/:id', function (req, res) {
    res.send('Hello '+req.params.id);
});
 */
/*
//路由 拿参数
app.get('/index.html/', function (req, res) {
    res.send('Hello'+req.query.username);
});
 */


//端口监听
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
// supervisor app.js  npm install supervisor -g
// 不用每次修改刷新node app.js