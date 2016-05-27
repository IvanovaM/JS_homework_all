'use strict'

$(function (){

	var html = $('#test').html();
	var profile = [
		{
			question: 'ФИО',
			answer: 'Иванова М.С.'
		},
		{
			question: 'Образование',
			answer: 'Студент курса GoForIT'
		},
		{
			question: 'Хочу учить фронтенд, потому что:',
			answer: 'Необходимо изменить сферу профессиональной деятельности',	
		},
		{
			answer: 'Хочется новых знаний/умений и возможностей',
		},
		{
			answer: 'Не хватает интересного общения'
		},
		{
			question: 'Контактный телефон',
			answer: '+380509054333'
		},
		{
			question: 'Профиль вконтакте',
			answer: '<a>vk.com</a>'
		}
	];

	var content = tmpl(html, {
		image: 'img/vvv.jpg',
		data: profile
	});

	$('body').append(content);
});