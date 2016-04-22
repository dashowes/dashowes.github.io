// PRESSIN' BUTTONS
$('.usertypebtn').click(function() {
	$(this).addClass('smashed');
});

// BROWSING FUNCTIONALITY
$('#stop').click(function() {
	$('.browsevitals').removeClass('liked');
	$('.browsevitals').addClass('noped');
	$('.matchblurbgood, .matchblurbbad').addClass('liked-noped');
});
$('#play').click(function() {
	$('.browsevitals').removeClass('noped');
	$('.browsevitals').addClass('liked');
	$('.matchblurbgood, .matchblurbbad').addClass('liked-noped');
});
$