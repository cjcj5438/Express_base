var express = require('express');
var app = express();

app.use(express.static('public'))
//这是路由
app.get('/', function (req, res) {
    res.sendfile(__dirname+"/"+"index01.html")
    // res.send('Hello World');
})
// 通过接口返回  接口json
app.get('/process_get',function (req, res) {
    console.log(req.query.first_name)
    res.redirect("https://www.baidu.com/s?ie=utf-8&csq=1&pstg=20&mod=2&isbd=1&cqid=a610296100007244&istc=476&ver=R26uHA1_POLaje7bpKTYyO9W2bJrXiqOEIO&chk=5ac4820a&isid=e9ce0aa900006ce0&ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+ req.query.first_name+"&oq=express&rsv_pq=e9ce0aa900006ce0&rsv_t=65a79J7Klgc7DiM%2F%2BaFfuGHjgw4o%2FSGjqBHMO%2BIUgQwDNti5j%2FdYOtJDEmg&rqlang=cn&rsv_enter=0&sug=express&bs=express&f4s=1&_ck=1639.1.97.37.11.598.22&rsv_isid=1428_19036_21115_22074&isnop=0&rsv_stat=-2&rsv_bp=1");
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})