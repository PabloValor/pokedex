$(document).on('ready', function() {

	//Show Arrow Scroll
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 200) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	//Click event to scroll top
	$('.back-to-top').click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800);
	});
});