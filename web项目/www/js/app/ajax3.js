define(['jquery','app/myfn'],function($,base){
	return function(walk){
		$.ajax({
			type:"get",
			url:base.getbaseUrl()+'/freeWalk',
			success:function(data){
				var d=data;
				
				var ul=document.createElement('ul');
				d.forEach(function(elem){
					
					var li=document.createElement('li');
					li.innerHTML=elem['title'];
					ul.appendChild(li);
					walk.appendChild(ul);
					var div=document.createElement('div');
					li.appendChild(div)
					
					elem['data'].forEach(function(ele){
						var a=document.createElement('a');
						div.appendChild(a);
						var img=document.createElement('img');
						img.setAttribute('src',ele.imgUrl);
						a.appendChild(img);
						var span=document.createElement('span');
						span.innerHTML=ele.price;
						
						a.appendChild(span);
						var span1=document.createElement('span');
						
						span1.innerHTML=ele['title'];
												
						a.appendChild(span1);
						var span2=document.createElement('span');
						a.appendChild(span2);
						if(ele['time']!=undefined){
							
							span2.innerHTML=ele['time'];
							
						}
					})
				})
				$('#sell #walk ul li').on('mouseenter',function(){
					$(this).siblings().children('div').css('display','none')
					$(this).children('div').css('display','block').on('mouseleave',function(){
						$(this).siblings().children('div').css('display','none')
					});
					
				})
			}
		});
		
	}
})