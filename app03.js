var express = require('express');
var app = express();

app.use(express.static('public'))
//这是路由
app.get('/', function (req, res) {
    res.sendfile(__dirname+"/"+"index.html")
    // res.send('Hello World');
})
// 通过接口返回  接口json
app.get('/process_get',function (req, res) {
    console.log({
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    })
    res.send({
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    })
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})