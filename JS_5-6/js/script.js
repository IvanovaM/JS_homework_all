'use strict'

var init;
var startDate;
var clockTimer;

function clearFields() {
	init = 0;
	clearInterval(clockTimer);
	document.clockform.clock.value='00:00:00.000';
}

function clearALL() {
	clearFields();
	document.getElementById('marker').innerHTML = '';
}

function startTIME() { 
	var targetDate = new Date();
	var t = targetDate.getTime() - startDate.getTime();
	var ms = t%1000; 
	t = Math.floor (t/1000);
	var s = t%60; 
	t = Math.floor (t/60);
	var m = t%60; 
	t = Math.floor (t/60);
	var h = t%60;
	if (h<10) h='0'+h;
	if (m<10) m='0'+m;
	if (s<10) s='0'+s;
	if (ms<100) ms='0'+ms;
	if (init==1) document.clockform.clock.value = h + ':' + m + ':' + s + '.' + ms;
				clockTimer = setInterval("startTIME()",7);
}

function findTIME() {
	if (init==0) {
	startDate = new Date();
	startTIME();
	init=1;
	document.getElementById('starter').value = 'Stop';
	} else { init = 0;
		document.getElementById('starter').value = 'Start';
		document.getElementById('marker').innerHTML = 'Stop: ' + document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
	}
}

function SplitTIME() {
	document.getElementById('marker').innerHTML = 'Split: ' + document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
}
