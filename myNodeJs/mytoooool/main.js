function handleDate(){
	
	var now = new Date();
	var result = now.getFullYear() + "-" +
	 (now.getMonth() + 1) + "-" +  now.getDate();
	return result;
}
exports.handleDate=handleDate;