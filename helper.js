var helper = {
	get_url_filtered: function(url){
		url = decodeURIComponent(url).split('/');

		// remove the first '/' and the empty strings
		url.shift();
		url = url.filter(function(e){
			return e;
		});

		return url;
	},

	get_url: function(url){
		url = helper.get_url_filtered(url);

		// version switcher
		if(url[0] === 'v2'){
			url.shift(); // remove the version
		}else if(url[0] === 'v3'){
			url.shift(); // remove the version
			url.shift(); // remove the command
		}

		return url;
	},

	get_endpoint: function(url){
		var endpoint;

		url = helper.get_url_filtered(url);

		endpoint = url[1] || '';

		return endpoint;
	},

	get_version: function(url){
		var version = 1; // by default

		url = helper.get_url_filtered(url);

		// version switcher
		if(url[0] === 'v2'){
			version = 2;
		}else if(url[0] === 'v3'){
			version = 3;
		}

		return version;
	},

	get_method: function(req){
		return req.method.toLowerCase();
	}
};

module.exports = helper;
