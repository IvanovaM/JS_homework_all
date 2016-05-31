'use strict'
var res;
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function (data) {
	data = _.uniq(_.flattenDepth(_.map(data, 'skills'))).sort();
	res=data;
	console.log(data);
});
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function (data) {
	data = _.flatten(_.map(data, 'name'));
	res=data;
	console.log(data);
});
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", function (data) {
	data = _.uniq(_.flatten(_.map(data, 'friends')));
	res=data;
	console.log(data);
});