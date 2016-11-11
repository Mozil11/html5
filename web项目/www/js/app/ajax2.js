define(['jquery','app/myfn'],function($,base){
	return function getmdata(left){
		$.ajax({
				url:base.getbaseUrl()+'/menu',
				type:'get',
				success:function(data){
					var  d=data;
					
					d.forEach(function(elem){
						var morecity=document.createElement('div');
						var li = document.createElement('li');
						li.appendChild(morecity);
						left.appendChild(li);
						var p = document.createElement('p');
						p.innerHTML=elem['title'];
						li.appendChild(p)
						elem['mainCity'].forEach(function(ele){
							var a=document.createElement('a');
							a.innerHTML=ele;
							li.appendChild(a);
	
						})
						if(elem['moreCity'].length==1){
							elem['moreCity'].forEach(function(ele){
									var city=document.createElement('div');
									
									morecity.appendChild(city);
									var h3=document.createElement('h3');
									city.appendChild(h3);
									h3.innerHTML=ele.cityName;
								ele['items'].forEach(function(e){
									var im=document.createElement('img');
									im.setAttribute('src',e);
									city.appendChild(im);
								})
							})
							}else{
								elem['moreCity'].forEach(function(ele){
									var city=document.createElement('div');
									morecity.appendChild(city);
									var h3=document.createElement('h3');
									city.appendChild(h3);
									h3.innerHTML=ele.cityName;
									
									ele['items'].forEach(function(el){
										var a=document.createElement('a')
										a.innerHTML=el;
										city.appendChild(a);
									})
								})
							}
						if(elem.moreCityImg!=undefined){
						var img = document.createElement('img');
						
						img.setAttribute('src',elem.moreCityImg);
						morecity.appendChild(img);
						
						}
						
					})
					$('#menu ul li').on('mouseenter',function(){
						$(this).children('div').css('display','block');
						$(this).siblings().children('div').css('display','none');
					})
					$('#menu ul li').on('mouseleave',function(){
						$('#menu ul li>div').css('display','none');
					})
					$('#list>span:first').on('click',function(){
						$('#list>div:nth-of-type(1),#list>div:nth-of-type(2),#list>div:nth-of-type(3)').css('display','block');
						$('#list>div:nth-of-type(4),#list>div:nth-of-type(5),#list>div:nth-of-type(6)').css('display','none');
					})
					$('#list>span:last').on('click',function(){
						$('#list>div:nth-of-type(1),#list>div:nth-of-type(2),#list>div:nth-of-type(3)').css('display','none');
						$('#list>div:nth-of-type(4),#list>div:nth-of-type(5),#list>div:nth-of-type(6)').css('display','block');
						
					})
				}
		})
		
	}
	
})