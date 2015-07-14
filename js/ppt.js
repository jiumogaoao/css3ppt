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
			$(".page")[nowpage].find(".child").each(function(){
				$(this).attr("class","child"+$(this).attr("outAn"))
				});
			nowpage++;
			$("#roll").animate({"top":-1*$(window).height()*nowpage},function(){
				$(".page")[nowpage].find(".child").each(function(){
				$(this).attr("class","child"+$(this).attr("inAn")+$(this).attr("onAn"))
				});
				});
			}
		};
	window.app.down=function(){
		if(nowpage>0){
			$(".page")[nowpage].find(".child").each(function(){
				$(this).attr("class","child"+$(this).attr("outAn"))
				});
			nowpage--;
			$("#roll").animate({"top":-1*$(window).height()*nowpage},function(){
				$(".page")[nowpage].find(".child").each(function(){
				$(this).attr("class","child"+$(this).attr("inAn")+$(this).attr("onAn"))
				});
				});
			}
		};
	window.app.run=function(){
		init();
		};
	})($);