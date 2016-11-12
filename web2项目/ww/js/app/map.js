define(['jquery'],function($){
	return function(){
		
		$('#top .left li:eq(1)').on('mouseenter',function(){
			$('#top .left #map').slideDown();
		}).on('mouseleave',function(){
			$('#top .left #map').css('display','none')
		});
		$('#top .right>li:eq(8)').on('mouseenter',function(){
			
			$('#top .right>li:eq(8) ul').slideDown();
		}).on('mouseleave',function(){
			$('#top .right>li:eq(8) ul').css('display','none');
		})
	}
})