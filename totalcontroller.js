var express = require('express'),
	app = express(),
	defaults = {
		port: 9119
	},
	Request,
	Response;

// start the drums
app.listen(defaults.port);

// GET '/*' (all)
app.get('/*', function(req, res){
	var url = req.url.split('/'),
		data = [];

	url.shift(); // remove the first /

	if(url.length === 0){
		// get all manufacturers

	}else if(url.length === 1){
		// get devices by manufacturer

	}else if(url.length === 2){
		// get codes by manufacturer & device

		// temp test data as you may suppose
		data = [{ // key1:
			key: 'On, Power On/Off',
			manufacturer: 'LG',
			device: 'TV',
			codes: [{ // codeset1:
				frequency: 38343,
				code: [343,172,21,22,21,22,21,65,21,22,21,22,21,22,21,22,21,22,21,65,21,65,21,22,21,65,21,65,21,65,21,65,21,65,21,22,21,22,21,65,21,22,21,22,21,22,21,65,21,65,21,65,21,65,21,22,21,65,21,65,21,65,21,22,21,22,21,4907]
			}, { // codest2:
				frequency: 38226,
				code: [343,171,21,22,21,22,21,65,21,22,21,22,21,22,21,22,21,22,21,65,21,65,21,22,21,65,21,65,21,65,21,65,21,65,21,22,21,22,21,65,21,22,21,22,21,22,21,65,21,65,21,65,21,65,21,22,21,65,21,65,21,65,21,22,21,22,21,4892]
			}]
		}];
	}

	res.send(JSON.stringify(data));
});
