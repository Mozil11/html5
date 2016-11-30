(function(){
	//存储cookie
		function setCookie(key,value,day){
			
			 //如果无时间
			 if(day==undefined){
			 	if(typeof value == 'object'){
			 	document.cookie=key+'='+JSON.stringify(value);	
				}else{
			 	document.cookie=key+'='+value;}
			 }else{
			 	//如果有时间
			 	var date=new Date();
			 	
			 	date.setDate(date.getDate()+day);
			 	if(typeof value == 'object'){
			 	document.cookie=key+'='+JSON.stringify(value)+';expires='+date.toUTCString();
				}else{
			 	document.cookie=key+'='+value+';expires='+date.toUTCString();}
			 }
		}
		
		function getCookie(key){
			var obj={};
			var cookies=document.cookie.split('; ');
			for(var item of cookies){
				ite=item.split('=')
				
				obj[ite[0]]=ite[1];
				if(key==ite[0]){
					console.log(ite[1]);
				}else{
					console.log(obj);
				}
			}
			
		}
		
		function removeCookie(key){
			setcookie(key,'',-1)
		}
		
		//清除
		function clear(){
			var obj=getcookie();
			for(var key in obj){
				removeCookie(key);
			}
			
		}
		window.setCookie=setCookie;
		window.getCookie=getCookie;
		window.removeCookie=removeCookie;
		window.clear=clear;
	})();