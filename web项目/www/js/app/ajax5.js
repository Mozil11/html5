define(function(require,exports,module){
	var $=require('jquery');
	var base=require('app/myfn');
	return function getsearch(serh){
		
		$('#search input').on('focus',function(){
			
			var ul=document.createElement('ul');
			serh.appendChild(ul);
			
			var li=document.createElement('li');
			ul.appendChild(li);
			var a = document.createElement('a');
			li.appendChild(a);
			a.setAttribute('href','http://z.qyer.com/all_0_0_0_0_0_0_0/?keyword=%E6%97%A5%E6%9C%AC');
			a.innerHTML='日本';
			var li1=document.createElement('li');
			ul.appendChild(li1);
			var a1 = document.createElement('a');
			li1.appendChild(a1);
			a1.setAttribute('href','http://z.qyer.com/all_0_0_0_0_0_0_0/?keyword=%E6%B8%85%E8%BF%88');
			a1.innerHTML='清迈';
			var li2=document.createElement('li');
			ul.appendChild(li2);
			var a2 = document.createElement('a');
			li2.appendChild(a2);
			a2.setAttribute('href','http://z.qyer.com/all_0_0_0_0_0_0_0/?keyword=%E6%B5%B7%E5%B2%9B');
			a2.innerHTML='海岛';
			var li3=document.createElement('li');
			ul.appendChild(li3);
			var a3 = document.createElement('a');
			li3.appendChild(a3);
			a3.setAttribute('href','http://z.qyer.com/all_0_0_0_0_0_0_0/?keyword=%E6%B3%95%E5%9B%BD');
			a3.innerHTML='法国';
			var li4=document.createElement('li');
			ul.appendChild(li3);
			var a4 = document.createElement('a');
			li4.appendChild(a4);
			a4.setAttribute('href','http://z.qyer.com/all_0_0_0_0_0_0_0/?keyword=%E5%8F%B0%E6%B9%BE');
			a4.innerHTML='台湾';
			
		}).on('focusout',function(){
			$('#search>ul').remove();
		})
		$('#search input').on('keyup',function(){
			$('#search>ul').remove();
			var keyword=$('#search input').val();
			$.ajax({
				url:base.getbaseUrl()+'/ajax/search/'+keyword,
				type:'get',
				success:function(data){
					var d=data;
					
					var dd=JSON.parse(d)
					var ul=document.createElement('ul');
					serh.appendChild(ul);
					dd['data'].keywords.forEach(function(elem){
						var li=document.createElement('li');
						ul.appendChild(li);
						var a=document.createElement('a');
						a.setAttribute('href',elem['url']);
						a.innerHTML=elem['title'];
						li.appendChild(a);
					
					})
					
				}
			})
		})
	}
})