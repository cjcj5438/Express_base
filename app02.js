//express_demo.js 文件
var express = require('express');
var app02 = express();
// /*
//路由
app02.get('/', function (req, res) {
    console.log(req.path)
    res.json({data:"hello word"});
});
 // */
/*
//路由 拿参数
app02.get('/index/:id', function (req, res) {
    res.send('Hello '+req.params.id);
});
 */
/*
//路由 拿参数
app02.get('/index.html/', function (req, res) {
    res.send('Hello'+req.query.username);
});
 */


//端口监听
var server = app02.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});
// supervisor app02.jsjs  npm install supervisor -g
// 不用每次修改刷新node app0202.js