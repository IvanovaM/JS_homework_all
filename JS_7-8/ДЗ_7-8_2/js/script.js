'use strict'

$(function (){

	var $Firstname = $('.Firstname');
	var $FirstnameHelp = $('.FirstnameHelp');
		$Firstname.hover(
			function () {
				$FirstnameHelp.show(400);
			},
			function () {
				$FirstnameHelp.hide(400);
			}
		);

	var $Lastname = $('.Lastname');
	var $LastnameHelp = $('.LastnameHelp');
		$Lastname.hover(
			function () {
				$LastnameHelp.show(400);
			},
			function () {
				$LastnameHelp.hide(400);
			}
		);

	var $Adress = $('.Adress');
	var $AdressHelp = $('.AdressHelp');
		$Adress.hover(
			function () {
				$AdressHelp.show(400);
			},
			function () {
				$AdressHelp.hide(400);
			}
		);

	var $button = $('.button');
		$button.on('click', function(e) {
		e.preventDefault();

		$LastnameHelp.show();
		$FirstnameHelp.show();
		$AdressHelp.show();
	});
});

	


