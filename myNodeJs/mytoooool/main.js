function print(msg){
	
	var now = new Date();
	var result = now.getFullYear() + "-" +
	 (now.getMonth() + 1) + "-" +  now.getDate();
	 console.log("时间："+result+"打印内容："+msg)；
	
}
exports.print=print;