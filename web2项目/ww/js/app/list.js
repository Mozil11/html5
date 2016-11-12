define(function(require,exports,module){
	var $ = require('jquery');
	var base= require('app/myfn');
	return function(box){
		$.ajax({
			url:base.getbaseUrl()+'/json1',
			type:'get',
			success:function(data){
				var d = data;
				console.log(d);
				
				d['shop_data'].forEach(function(elem){
					var ul = $('<ul></ul>');
					box.append(ul);
					var li = $('<li></li>');
					ul.append(li);
					var img = $('<img />');
					img.attr('src',elem.shop_ico);
					li.append(img);
					var li1 = $('<li></li>');
					ul.append(li1);
					var a=$('<a></a>');
					a.html(elem.shop_name);
					li1.append(a);
					a.attr('href',elem.shop_addr);
					var p=$('<p></p>');
					p.html('主营：'+elem.main);
					li1.append(p);
					var p1=$('<p></p>');
					li1.append(p1);
					p1.html('地址：'+elem.addr);
					var li2=$('<li></li>');
					ul.append(li2);
					var p2=$('<p></p>'); 
					p2.html('先行赔付');
					li2.append(p2);
					var p3=$('<p></p>'); 
					p3.html('同城帮认证');
					li2.append(p3);
					var p4=$('<p></p>');
					p4.html('人气：'+elem.shop_visit+'次浏览');
					li2.append(p4);
				})
				$('#main>span:first').on('click',function(){
					$('#main>ul:first,#main>ul:eq(1),#main>ul:eq(2),#main>ul:eq(3),#main>ul:eq(4)').css('display','block');
					$('#main>ul:eq(5),#main>ul:eq(6),#main>ul:eq(7),#main>ul:eq(8),#main>ul:eq(9)').css('display','none');
				})
				$('#main>span:last').on('click',function(){
					$('#main>ul:first,#main>ul:eq(1),#main>ul:eq(2),#main>ul:eq(3),#main>ul:eq(4)').css('display','none');
					$('#main>ul:eq(5),#main>ul:eq(6),#main>ul:eq(7),#main>ul:eq(8),#main>ul:eq(9)').css('display','block');
				})
			}
	
		})
	}	
})