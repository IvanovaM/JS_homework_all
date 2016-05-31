'use strict'
$(function(){
	let tmpl = _.template($('#test--template').html());
	$('body').html(tmpl(QBase));
	$('.test__button').on('click', () => {
		let $chBox = $('input:checked');
		let answer = [0, 0];
		let userName = $('.test__userName').val()  || 'defaultUser';
		let test_res = JSON.parse(localStorage.getItem('user'+userName)) || [];
		for (let k = 0; k < $chBox.length; k++) {
			let str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			let i = +str.substr(0,str.indexOf('_'));
			let j = +str.substr(str.indexOf('_')+1);
			answer[+QBase.question[i].answer[j].check]++;
		};
		$chBox.prop('checked', false);
		test_res.push(110 + ( (2*answer[1] - answer[0]) * 45 / (QBase.question.length) ) >> 0);
		alert(`Правильных 
			ответов: ` + answer[1] +
			`\nНеправильных 
			ответов: ` + answer[0] +
			'\nБаллов набрано: ' + test_res[test_res.length-1]);
		console.log('История прохождения теста пользователем ',userName,':',test_res);
		localStorage.setItem('user'+userName,JSON.stringify(test_res));
	});
	$('.test__clear').on('click', () => {
		console.log($(this).prop('checked'));
		let str = $(this).attr('id');
		
		str = str.substr(str.indexOf('_')+1);
		let i = +str.substr(0,str.indexOf('_'));
		if ($(this).prop('checked') && QBase.question[i].alone) {
			$(this).closest('.test__questionblock').find('[type=checkbox]').prop('checked', false);
			$(this).prop('checked', true);
		};
	});
});