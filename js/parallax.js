$(window).scroll(function(){
	parallax();
})

function parallax(){
	var wScroll = $(window).scrollTop();
	//console.log(wScroll);

	$('.parallax-bg').css('background-position','center ' + (wScroll*.65) + 'px');
}