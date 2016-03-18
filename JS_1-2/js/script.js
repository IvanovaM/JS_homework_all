//1

var a = +prompt('Enter a', '');
var n = +prompt('Enter n', '');

function pow (a, n) {
	var result = a;

	for (var i = 1; i < n; i++) {
	result *= a;
	}
	console.log(result);
	return result;
}



while (n < 1) {
	alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 1');
	n = +prompt('Enter n', '');	
}

alert( pow(a, n) );


//2

var arrName = [];
for (i = 0; i < 5; i++) {
	arrName[i] = prompt('Введите имя', '');
}
console.log(arrName);

var userName = prompt('Введите имя пользователя', '');

var counter = 0;

for (var i = 0; i < arrName.length; i++) {
	if (arrName[i] === userName) {
		counter++;
	}
}

if (counter >= 1) {
	alert(userName + ', вы успешно вошли');
} else {
	alert('Ошибка входа. Пользователь с таким именем не существует.');
}
	

	







