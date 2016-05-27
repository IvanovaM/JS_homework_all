'use strict'
$(function(){
	var tmpl = _.template($('#test--template').html());
	$('body').html(tmpl(QBase));
	$('.test__button').on('click',function() {
		var $chBox = $('input:checked');
		var answer = [0, 0];
		var userName = $('.test__userName').val()  || 'defaultUser';
		var test_res = JSON.parse(localStorage.getItem('user'+userName)) || [];
		for (var k = 0; k < $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var i = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			answer[+QBase.question[i].answer[j].check]++;
		};
		$chBox.prop('checked', false);
		test_res.push(110 + ( (2*answer[1] - answer[0]) * 45 / (QBase.question.length) ) >> 0);
		alert('Правильных ответов: ' + answer[1] +
			'\nНеправильных ответов: ' + answer[0] +
			'\nБаллов набрано: ' + test_res[test_res.length-1]);
		console.log('История прохождения теста пользователем ',userName,':',test_res);
		localStorage.setItem('user'+userName,JSON.stringify(test_res));
	});
	$('.test__clear').on('click', function() {
console.log($(this).prop('checked'));
		var str = $(this).attr('id');
		
		str = str.substr(str.indexOf('_')+1);
		var i = +str.substr(0,str.indexOf('_'));
		if ($(this).prop('checked') && QBase.question[i].alone) {
			$(this).closest('.test__questionblock').find('[type=checkbox]').prop('checked', false);
			$(this).prop('checked', true);
		};
	});
});