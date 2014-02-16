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
		}

		return url;
	},

	get_version: function(url){
		var version = 1; // by default

		url = helper.get_url_filtered(url);

		// version switcher
		if(url[0] === 'v2'){
			version = 2;
		}

		return version;
	}
};

module.exports = helper;
