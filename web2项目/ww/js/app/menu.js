define(function(require,exprots,module){
	var $=require('jquery');
	return function(){
		$('#banner>ul li').on('mouseenter',function(){
			$(this).children('div').show();
			$(this).siblings().children('div').hide()
		}).on('mouseleave',function(){
			$('#banner>ul li>div').hide();
		})
		$('#banner #move').css('left','0');
		var timer=setInterval(function(){
			var left=$('#banner #move').offset().left;
			$('#banner #move').css('left',left-1274.5+'px');
			
			if(left==-4725.5){
				$('#banner #move').css('left','0');
			}
		},2000)
	}
})