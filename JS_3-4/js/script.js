'use strict'
var body = document.querySelector('body');

var header = document.createElement('div');
header.classList.add('header');
header.innerHTML = 'Тест по программированию';

body.insertBefore(header, null);

var form = document.createElement('form');
	body.appendChild(form);

var question1 = document.createElement('p');
	question1.classList.add('question');
	question1.innerHTML = '1. Вопрос №1';
	form.appendChild(question1);

var answerBlock = {
	answer: function() {
		for (var i = 1; i < 4; i++) {
			var a = document.createElement('label');
			form.appendChild(a);

			var b = document.createElement('input');
			b.classList.add('answer');
			b.setAttribute('type', 'checkbox');
			b.setAttribute('name', 'checkbox');
			a.appendChild(b);
			
			var c = document.createElement('span');
			a.appendChild(c);
			c.innerHTML = 'Вариант ответа №' + i;
		}
	},
}

answerBlock.answer ();

var question2 = document.createElement('p');
	question2.classList.add('question');
	question2.innerHTML = '2. Вопрос №2';
	form.appendChild(question2);

answerBlock.answer ();

var question3 = document.createElement('p');
	question3.classList.add('question');
	question3.innerHTML = '3. Вопрос №3';
	form.appendChild(question3);

answerBlock.answer ();

var submit = document.createElement('input');
	submit.setAttribute('type', 'submit');
	submit.setAttribute('value', 'Проверить мои результаты');
	submit.classList.add('submit');
	form.appendChild(submit);



