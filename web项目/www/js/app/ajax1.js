define(['jquery','app/myfn'],function($,base){
	return function getbdata(move){
		$.ajax({
				url:base.getbaseUrl()+'/banner',
				type:'get',
				success:function(data){
					var  d=data;
					
					d.forEach(function(elem){
						
						var a=document.createElement('a');
						var img=document.createElement('img');
						a.appendChild(img);
						img.setAttribute('src',elem.imgUrl);
						a.setAttribute('href',elem.href);
						move.appendChild(a);
						
						
					})
					
					
					$('#banner #move').css('left','0');
					var index=0;
					var timer=setInterval(show,2000);
						function show(){
						var left=$('#banner #move').offset().left;
						
						index++
						$('#banner #move').css('left',left-1920+'px');
						
						
						$('#banner span:eq('+index+')').css('background','red').siblings().css('background','black')
						
						if(index==4){
							index=0;
							$('#banner span:first').css('background','red').siblings().css('background','black')
						}
						if(left==-5760){
							$('#banner #move').css('left','0');
						}
					}
					$('#banner span:first').on('mouseenter',function(){
						index=0;
						clearInterval(timer);
						var left=$('#banner #move').offset().left=0;
						$('#banner #move').css('left',left+'px');
						$('#banner span:first').css('background','red').siblings().css('background','black')
						
					})
					$('#banner span:eq(1)').on('mouseenter',function(){
						index=1;
						clearInterval(timer);
						var left=$('#banner #move').offset().left=-1920;
						$('#banner #move').css('left',left+'px')
						$('#banner span:eq(1)').css('background','red').siblings().css('background','black')
					})
					$('#banner span:eq(2)').on('mouseenter',function(){
						index=2;
						clearInterval(timer);
						var left=$('#banner #move').offset().left=-3840;
						$('#banner #move').css('left',left+'px')
						$('#banner span:eq(2)').css('background','red').siblings().css('background','black')
						
					})
					$('#banner span:last').on('mouseenter',function(){
						index=3;
						clearInterval(timer);
						var left=$('#banner #move').offset().left=-5760;
						$('#banner #move').css('left',left+'px')
						$('#banner span:last').css('background','red').siblings().css('background','black')
						
					})
					$('#banner span').on('mouseout',function(){
						timer=setInterval(show,2000)
					})

				}
		})
	}
	
})