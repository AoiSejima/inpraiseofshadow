$(document).mousemove(function(e){
	x = e.pageX;
	y = e.pageY;
$(".follower").css("transform", "translate3d(" + x + "px, " + y + "px, " + "0)" );
});