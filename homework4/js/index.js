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







// // Create a global variable for the total
// var total = 0;
// // Create a function you can run when you submit the field Hint: .submit() in jQuery
// function addEntry() {
// // In your enter function, remember we can use .append() in jQuery to add things to HTML elements
// 	var entry = $('#newEntry').val();
// 	entry = parseFloat(entry);
// 	var amountInDollars = convertToCurrency(entry);
// 	$('tbody').append('<tr><th>' + amountInDollars + '</th></tr>');
// 	total += entry;
// 	$('#total').replaceWith(total);
// // Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
// };

// function convertToCurrency(entry) {
// 	var currency = entry.toFixed(2);
// 	currency = "$" + currency;

// 	return currency;
// };

// $('#entry').submit(addEntry)