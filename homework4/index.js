var total = 0;

$('#entry').submit(makeNewEntry);

function makeNewEntry() {
	event.preventDefault();
	var newEntry = $('#newEntry').val();
	newEntry = parseFloat(newEntry);
	var currency = convertToCurrency(newEntry);
	$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
	total += newEntry;
	$('#total').html(convertToCurrency(total));
	$('#newEntry').val('');
};

function convertToCurrency(newEntry) {
	var currency = parseFloat(newEntry);
	currency = currency.toFixed(2);
	currency = '$' + currency;
	return currency;
};