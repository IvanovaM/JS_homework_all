'use strict'

$(function (){

	var $links = $('.menu a');
		$links.on('click', function(e) {

		var $submenu = $(this).siblings('.submenu');
		e.preventDefault();
		
		$submenu.slideToggle(1000);
	});	

	$('.menu li').jquery.color();

	$('.menu li').mouseenter(
		function () {
			$(this).animate({
				background: '#9682ac'
			}, 500);
		});

	$('.menu li').mouseleave(
		function () {
			$(this).animate({
				background: '#7502f7'
			}, 500);
		});	


});	
	

	
	
	


	





	


