var app = {
	pow1: function (a, n) {

function pow (a, n) {
	var result = a;

	for (var i = 1; i < n; i++) {
	result *= a;
	}
	console.log(result);
	return result;
}

while (n < 1) {
	return('Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
	n = +prompt('Enter n', '');	
}

return( pow(a, n) );
}
}

module.exports = app;

	







