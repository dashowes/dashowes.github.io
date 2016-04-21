// BROWSING FUNCTIONALITY
$('#stop').click(function() {
	$('.browsevitals').addClass('noped');
	$('.matchblurb').addClass('liked-noped');
});
$('#play').click(function() {
	$('.browsevitals').addClass('liked');
	$('.matchblurb').addClass('liked-noped');
});
