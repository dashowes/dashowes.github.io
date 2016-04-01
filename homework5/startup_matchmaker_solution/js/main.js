$(window).resize(function() {
	if ($(window).width() <= 768px) {
		$('nav').hide();
		$(this).toClass('mobilenav');
		$(this).addClass('clearfix');
		$('header').append('<button class="hamburger">&#9776;</button>
  			<button class="cross">&#735;</button>');
		$('.cross').hide();
	}
});

$('.hamburger').click(function() {
	$('.mobilenav').slideToggle(function() {
		$('.hamburger').hide();
		$('.cross').show();
	});
});

$('.cross').click(function() {
	$('.mobilenav').slideToggle(function() {
		$('.cross').hide();
		$('.hamburger').show();
	});
});