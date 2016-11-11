requirejs(['../lib/common'],function(common){
		requirejs(['jquery','app/myfn','app/ajax','app/ajax1','app/ajax2','app/ajax3','app/search','app/ajax5'],function($,base,nav,banner,menu,sell,search,sear){
		var root=document.querySelector('#nav ul');
		var move=document.querySelector('#banner #move');
		var left=document.querySelector('#menu ul');
		var walk=document.querySelector('#sell #walk');
		var find=document.querySelector('#top .right li:first-of-type');
		var serh=document.querySelector('#search');
		
		nav(root);
		banner(move);
		menu(left);
		sell(walk);
		search(find);
		sear(serh);
	})
})
