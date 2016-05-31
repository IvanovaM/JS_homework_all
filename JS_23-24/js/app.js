requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
		/*'tmpl': 'tmpl.js'*/
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		/*'tmpl': {
			exports: 'tmpl'
		}*/
	}
});

require(
	[		
		'jquery',
		/*'tmpl',*/
		'model',
		'view',
		'controller',
	],

	function ($, Model,  View, Controller) {
		$(function () {
			var firstToDoList = ['learn javascript', 'learn html', 'make coffee'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
		});
	}
);