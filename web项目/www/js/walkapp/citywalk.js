requirejs(['../lib/common'],function(common){
	requirejs(['jquery','app/search','app/ajax','app/ajax2','walkapp/list','app/ajax5'],function($,search,nav,menu,list,sear){
		var root=document.querySelector('#nav>ul');
		nav(root);
		var find=document.querySelector('#top .right li:first-of-type');
		search(find);
		var left=document.querySelector('#nav #menu ul');
		menu(left);
		var listt=document.querySelector('#list');
		list(listt);
		var serh=document.querySelector('#search');
		sear(serh);
		
	})
})