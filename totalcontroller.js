var express = require('express'),
	app = express(),
	fs = require('fs'),
	data_file = './get_data/data3.txt',
	defaults = {
		port: 9119
	},
	Request,
	Response,
	all_data = {};

fs.readFile(data_file, 'utf8', function(err, data) {
	if (err){
		throw err;
	}

	all_data = JSON.parse(data);
});

// start the drums
app.listen(defaults.port);

// GET '/*' (all)
app.get('/*', function(req, res){
	var url = req.url.split('/'),
		data = [];

	// remove the first '/' and the empty strings
	url.shift();
	url = url.filter(function(e){
		return e;
	});

	if(url.length === 0){
		// get all manufacturers
		data = Object.keys(all_data);
	}else if(url.length === 1){
		// get devices (by manufacturer)
		data = Object.keys(all_data[url[0]] || {});
	}else if(url.length === 2){
		// get codes (by manufacturer & device)
		data = all_data[url[0]] && all_data[url[0]][url[1]] || {};
	}

	res.send(JSON.stringify(data));
});
