define(['jquery','app/myfn'],function($,base){
	return function getlist(listt){
		$.ajax({
			url:base.getbaseUrl()+'/cityWalkList',
			type:'get',
			success:function(data){
				var d = data;
				console.log(d);
				d.forEach(function(elem){
					var div=document.createElement('div');
					listt.appendChild(div);
					var ul =document.createElement('ul');
					div.appendChild(ul);
					var li=document.createElement('li');
					ul.appendChild(li);
					var img=document.createElement('img');
					li.appendChild(img);
					img.setAttribute('src',elem['imgurl']);
					var li1=document.createElement('li');
					ul.appendChild(li1)
					var span=document.createElement('span');
					span.innerHTML=elem['address'];
					li1.appendChild(span);
					var span1=document.createElement('span');
					span1.innerHTML=elem['browseCount']+'　　　　'+elem['soldCount'];
					li1.appendChild(span1);
					var span2=document.createElement('span');
					span2.innerHTML='次浏览'+'　　'+'件已售'
					li1.appendChild(span2);
					var h3=document.createElement('h3');
					h3.innerHTML=elem['title'];
					li1.appendChild(h3);
					var ul1=document.createElement('ul');
					li1.appendChild(ul1);
					elem['introduce'].forEach(function(ele){
						var li2=document.createElement('li');
						li2.innerHTML=ele;
						ul1.appendChild(li2);
					})
					var span3=document.createElement('span');
					span3.innerHTML=elem['oldPrice']+'元'+'　　　　'+'元起';
					li1.appendChild(span3);
					var span4=document.createElement('span');
					span4.innerHTML=elem['newPrice'];
					li1.appendChild(span4);
					var a=document.createElement('a');
					a.innerHTML='立即预定';
					li1.appendChild(a);
				})
				
				
			$('#menu').on('mouseenter',function(){
				$('#menu>ul').css('display','block');
			}).on('mouseleave',function(){
				$('#menu>ul').css('display','none');
			})
				
			}
		})
	}	
})