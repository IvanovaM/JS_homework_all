'use strict'

$(function (){

	$('#show').click(function(e) {
		e.preventDefault();
		$('#modal, #overlay').show();
		$('select').styler();
	});

	$('#overlay').click(function(e) {
		$('#modal, #overlay').hide();
	});
});

