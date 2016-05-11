'use strict'

$(function () {
	var $firstP = $('.first_p');
	var $secondP = $('.second_p');
	var $thirdP = $('.third_p');

	var $firstLi = $('.first_li');
		$firstLi.on('click', function(e) {
		e.preventDefault();
		$firstP.show();
		$secondP.hide();
		$thirdP.hide();
		$firstLi.css({background: 'white'});
		$secondLi.css({background: '#c0bfc2'});
		$thirdLi.css({background: '#c0bfc2'});
	});

	var $secondLi = $('.second_li');
		$secondLi.on('click', function(e) {
		e.preventDefault();
		$firstP.hide();
		$secondP.show();
		$thirdP.hide();
		$firstLi.css({background: '#c0bfc2'});
		$secondLi.css({background: 'white'});
		$thirdLi.css({background: '#c0bfc2'});
	});

	var $thirdLi = $('.third_li');
		$thirdLi.on('click', function(e) {
		e.preventDefault();
		$firstP.hide();
		$secondP.hide();
		$thirdP.show();
		$firstLi.css({background: '#c0bfc2'});
		$secondLi.css({background: '#c0bfc2'});
		$thirdLi.css({background: 'white'});
	});

});

