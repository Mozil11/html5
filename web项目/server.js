const express = require("express");
var app = express();
var fs = require("fs");
var http= require('http');
var ndata=null;
var bdata=null;
var mdata=null;
var fdata=null;
var cdata=null;
fs.readFile("data/nav.json",(err,data)=>{
	if (err) {

		console.log("错了。");
	}else{
		ndata=data;
		fs.readFile('data/banner.json',(err,data1)=>{
			if (err) {
				console.log("错了。。。");
			}else{
				bdata=data1;
				fs.readFile('data/menu.json',(err,data2)=>{
					if (err) {
						console.log("错了。。。。");
					}else{
						mdata=data2;
						fs.readFile('data/freeWalk.json',(err,data3)=>{
							if (err) {
								console.log('错了。。。。。');

							}else{
								fdata=data3;
								fs.readFile('data/citywalk/cityWalkList.json',(err,data4)=>{
									if (err) {
										console.log('错了。。。。。。')
									}else{
										cdata=data4
										app.listen(7000);
										console.log('启动');
									}
								})
								
							}
						})
					}
				})
			}
		})
	
	}
})
app.use(express.static('www'))
app.all('/*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.get('/nav',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(ndata);
})


app.get('/banner',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(bdata);
})
app.get('/menu',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(mdata);
})
app.get('/freeWalk',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(fdata);
})
app.get('/cityWalkList',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(cdata);
})
app.get('/ajax/:keyword' , function (req , res) {
	var url = req.params.keyword;
	console.log(url);
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
app.get('/ajax/search/:keyword' , function (req , res) {
	var url = req.params.keyword;
	console.log(url);
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/?action=new_search&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});

