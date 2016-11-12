requirejs(['../lib/common'],function(common){
	requirejs(['jquery','app/map','app/menu','app/myfn','app/list'],function($,map,menu,base,main){
		map();
		menu();
		var box=$('#main');
		
		main(box);
	})
	
	
})