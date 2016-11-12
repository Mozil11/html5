const express = require('express');
var app = express();
var fs = require('fs');
var getdata1=null;
var getdata2=null;
var getdata3=null;
var getdata4=null;
var getdata5=null;
fs.readFile('data/1.json',(err,data1)=>{
		if (err) {
			console.log('错了');
		}else{
			getdata1=data1;
			fs.readFile('data/2.json',(err,data2)=>{
				if (err) {
					console.log('错了。');
				}else{
					getdata2=data2;
					fs.readFile('data/3.json',(err,data3)=>{
						if (err) {
							console.log('错了。。');
						}else{
							getdata3=data3;
							fs.readFile('data/4.json',(err,data4)=>{
								if (err) {
									console.log('错了。。。');
								}else{
									getdata4=data4;
									fs.readFile('data/5.json',(err,data5)=>{
										if (err) {
											console.log('错了。。。。')
										}else{
											getdata5=data5;
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
app.use(express.static('ww'));
app.all('/*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.get('/json1',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(getdata1);
})


app.get('/json2',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(getdata2);
})
app.get('/json3',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(getdata3);
})
app.get('/json4',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(getdata4);
})
app.get('/json5',(req,res)=>{
	
	res.header("Content-type","application/json");
	res.send(getdata5);
})