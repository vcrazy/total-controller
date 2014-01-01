var express = require('express'),
	app = express(),
	fs = require('fs'),
	data_file = './get_data/data5.txt',
	defaults = {
		port: 9119
	},
	all_data = {};

// start the drums
app.listen(defaults.port);

// GET '/*' (all)
app.get('/*', function(req, res){
	var url = decodeURI(req.url).split('/'),
		data = []; // by default

	// remove the first '/' and the empty strings
	url.shift();
	url = url.filter(function(e){
		return e;
	});

	var manufacturer = url[0],
		device_type = url[1];

	switch(url.length){
		case 0:
			// get all manufacturers
			data = Object.keys(all_data);
			break;
		case 1:
			// get devices (by manufacturer)
			data = Object.keys(all_data[manufacturer] || {});
			break;
		case 2:
			// get codes (by manufacturer & device)
			data = all_data[manufacturer] && all_data[manufacturer][device_type] || {};
			break;
		default:
			break;
	}

	res.send(JSON.stringify(data));
});

var reload = function(){
	fs.readFile(data_file, 'utf8', function(err, data) {
		if(err){
			return;
		}

		all_data = JSON.parse(data);
	});
};

// start
reload();

setInterval(reload, 1 * 60 * 60 * 1000);
