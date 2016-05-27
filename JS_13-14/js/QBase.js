'use strict'
var QBase={
	title: 'Тест',
	hint: '(За правильный ответ получаете баллы, за неправильный - теряете)',
	question: [
		{
			text: 'Дмитрий Нехлюдов - герой произведения:',
			alone: true,
			answer: [
				{text: 'Тихий Дон', check: false},
				{text: 'Воскресение', check: true},
				{text: 'Война и мир', check: false}
			],
		},
		{
			text: 'Главный герой романа Ф.М. Достоевского "Идиот" имел титул:',
			alone: false,
			answer: [
				{text: 'Герцог', check: false},
				{text: 'Князь', check: true},
				{text: 'Граф', check: false}
			],
		},
		{
			text: 'Б.Л. Пастернак стал лауреатом Нобелевской премии за произведение:',
			alone: true,
			answer: [
				{text: 'Зимняя ночь', check: false},
				{text: 'Доктор Живаго', check: true},
				{text: 'Девятьсот пятый год', check: false}
			],
		},
	],
};