define(['jquery','app/myfn'],function($,base){
	return function getdata(root){
		$.ajax({
				url:base.getbaseUrl()+'/nav',
				type:'get',
				success:function(data){
					var  d=data;
					
					d.forEach(function(elem){
						var li = document.createElement('li');
						
						root.appendChild(li);
						var a=document.createElement('a');
						a.innerHTML=elem.name;
					
						a.href=elem.url;
						li.appendChild(a);
						if(elem.imgUrl!=''){
						var img=document.createElement('img');
						img.setAttribute('src',elem.imgUrl)
						li.appendChild(img)
						}
					})
					$('#top .right li:first').on('mouseenter',function(){
						$('#top .right input').animate({
							'width':'150px'
						}).on('mouseleave',function(){
							$('#top .right input').animate({
							'width':'0'
							})
						})
					})
					$('#top .left li:eq(3)').on('mouseenter',function(){
						$('#top .left li .fly').slideDown();
						
					})
					$('#top .left li .fly p:first').on('mouseenter',function(){
						$('#top .left li .fly .part').show(500)
					})
					$('#top .left li:eq(3)').on('mouseleave',function(){
						$('#top .left li .fly .part').hide(500)
					})
					$('#top .left li:eq(3)').on('mouseleave',function(){
						$('#top .left li .fly').slideUp()
					})
					$('#top .left li:eq(7)').on('mouseenter',function(){
						$('#top .left li .fly1').slideDown();
					})
					$('#top .left li:eq(7)').on('mouseleave',function(){
						$('#top .left li .fly1').slideUp();
					})
				}
		})
		
	}
})

/*function geturl(url){
	var promise=new promise((resolve,reject)=>{
		var xhr=new XMLHttpRequest();
		xhr.open('get',url);
		xhr.send(null);
		xhr.onreadystatechange = handler;
    	xhr.responseType = "json";
    	xhr.setRequestHeader("Accept", "application/json");
    	function handler(){
    		if(this.readyState !== 4){
    			resolve(this.response);
    		}else{
    			reject(new Error(this.statusText));
    		}
    	}
		
		
	});
	return promise;
}
getJSON('/post.json').then(json=>{
	console.log('Contents: ' + json);
},error=>{
	console.log('笨逼错了吧。。');
})*/
