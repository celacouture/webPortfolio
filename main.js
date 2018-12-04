$('.portBtn').click(function(){
	$('header').addClass('scrolled');
})

$('.homeLi').click(function(){
	$('header').removeClass('scrolled');
})

// $('div.portfolio').scrollTop(300);

// $('.portLi').click(function(){
// 	var position=$(window).scrollTop(100);
// 	return position;
	
// })

// $('.homeLi').click(function(){
// 	var position=$(window).scrollTop(0);
// 	return position;
// })

$("a[href*='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1000 );
});