var express = require('express'),
	app = express(),
	versions = {},
	defaults = {
		port: 9119
	};

// start the drums
app.listen(defaults.port);

// GET '/*' (all)
app.get('/*', function(req, res){
	var url = decodeURIComponent(req.url).split('/'),
		version = 1; // be default

	// remove the first '/' and the empty strings
	url.shift();
	url = url.filter(function(e){
		return e;
	});

	// version switcher
	if(url[0] === 'v2'){
		url.shift(); // remove the version

		version = 2;
	}

	var manufacturer = url[0],
		device_type = url[1];

	versions[version].configure({
		res: res
	});

	switch(url.length){
		case 0:
			// get all manufacturers
			versions[version].get('manufacturers');
			break;
		case 1:
			// get devices (by manufacturer)
			versions[version].get('devices', manufacturer);
			break;
		case 2:
			// get codes (by manufacturer & device)
			versions[version].get('codes', manufacturer, device_type);
			break;
		default:
			break;
	}
});

var reload = function(){
	versions['1'].init();
};

versions['1'] = require('./versions/version1');
versions['2'] = require('./versions/version2');

// start
reload();

setInterval(reload, 1 * 60 * 60 * 1000);
