// JavaScript Document
;(function($){
	window.app={};
	var nowpage;
	function init(){
		nowpage=0;
		$("#roll").css("top","0px");
		$("#app,.page").height($(window).height());
		$(window).resize(function(){
			$("html").css("font-size",$(window).width()/10);
			$("#app,.page").height($(window).height());
			});
		}
	app.up=function(){
		if(nowpage<$(".page").length-1){
			nowpage++;
			$("#roll").animate({"top":-1*$(window).height()*nowpage});
			}
		};
	window.app.down=function(){
		if(nowpage>0){
			nowpage--;
			$("#roll").animate({"top":-1*$(window).height()*nowpage});
			}
		};
	window.app.run=function(){
		init();
		};
	})($);