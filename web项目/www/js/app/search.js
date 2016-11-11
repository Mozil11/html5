define(['jquery','app/myfn'],function($,base){
	return function(find){
		
		
		$('#top .right input').on('keyup',function(){
			$('#top .right li:first ul').remove();
			var keyword=$('#top .right input').val();
			$.ajax({
				type:"get",
				url:base.getbaseUrl()+'/ajax/'+keyword,
				
				success:function(data){
					
					var d=data;
					var dd=JSON.parse(d)
					var ul=document.createElement('ul')
					find.appendChild(ul);
					dd['data'].list.forEach(function(elem){
						console.log(elem);
						if(elem['belong_name']!=undefined){
							var li = document.createElement('li');
							console.log(elem)
							if(elem['src']!=undefined){
							var img=document.createElement('img');
							img.setAttribute('src',elem['src']);
							
							li.appendChild(img);
							}
							var a = document.createElement('a');
							a.setAttribute('href',elem.url);
							a.innerHTML=elem.belong_name;
							li.appendChild(a);
							var a1 = document.createElement('a');
							a1.setAttribute('href',elem.url);
							a1.innerHTML=elem.cn_name;
							li.appendChild(a1);
							var a2 = document.createElement('a');
							a2.setAttribute('href',elem.url);
							a2.innerHTML=elem.en_name;
							li.appendChild(a2);
							ul.appendChild(li);
						}else{
							var li = document.createElement('li');
							var a = document.createElement('a');
							a.setAttribute('href',elem.url);
							a.innerHTML=elem.word;
							li.appendChild(a);
							ul.appendChild(li);
						}
					})
					
					
				}
			});
			$('#top .right li:first').on('mouseleave',function(){
				$('#top .right li:first ul').remove();
			})
		})
		
	}
})