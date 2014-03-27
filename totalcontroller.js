var express = require('express'),
	app = express(),
	versions = {},
	helper = require('./helper'),
	port = 9119,
	api_requests;

// start the drums
app.listen(port);

// for the post requests
app.use(require('connect').bodyParser());

// -- new requests handling start --

// handle the new requests
api_requests = function(req, res){
	var request_url = req.url,
		url = helper.get_url(request_url),
		version = helper.get_version(request_url),
		endpoint = helper.get_endpoint(request_url),
		method = helper.get_method(req);

	versions[version].init({
		common: require('./common'),
		loader: require('./loader'),
		db: require('./db').init(),
		print: res
	});

	try{
		// ex: versions[3][comments][get].apply(versions[3], [comments, all])
		versions[version][endpoint][method].apply(null, url);
	}catch(ex){ // catch the ex hohoh
		console.log('invalid request', req.url, req.headers, req.connection.remoteAddress);
		res.json([]);
	}
};

// match /v3 calls; skip potential problems
app.all(/^\/v3(\/|$)/, api_requests);

// -- new requests handling end --

// GET '/*' (all)
app.get('/*', function(req, res){
	var request_url = req.url,
		url = helper.get_url(request_url),
		version = helper.get_version(request_url),
		manufacturer = url[0],
		device_type = url[1];

	if(version > 2){
		return res.json();
	}

	versions[version].configure({
		res: res
	});

	if(url[0] === 'backdoor'){
		url.shift();
		return versions[version].backdoor.apply(versions[version], url);
	}

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

// POST '/*' (all)
app.post('/*', function(req, res){
	var request_url = req.url,
		url = helper.get_url(request_url),
		version = helper.get_version(request_url),
		action = url[0],
		data = req.body;

	if(version > 2){
		return res.json();
	}

	versions[version].configure({
		res: res
	});

	// allowed post urls
	if(['comment'].indexOf(action) > -1){
		versions[version].post(action, data);
	}else{
		res.send({});
	}
});

var reload = function(){
	versions['1'].init();
};

versions['1'] = require('./versions/version1');
versions['2'] = require('./versions/version2');
versions['3'] = require('./versions/version3');

// start
reload();

setInterval(reload, 1 * 60 * 60 * 1000);
