var fs = require('fs'),
	all_data = {};
	data_file = './get_data/data5.txt', // v1
	config = {};

e = {
	configure: function(new_config){
		config = new_config;
	},

	init: function(){
		fs.readFile(data_file, 'utf8', function(err, data) {
			if(err){
				return;
			}

			all_data = JSON.parse(data);
		});
	},

	get: function(){
		var args = [],
			func = '',
			data = {};

		for(var a in arguments){
			args.push(arguments[a]);
		}

		func = 'get_' + args.shift();

		data = e[func].apply(e, args);

		e.send(data);
	},

	send: function(data){
		config.res.send(JSON.stringify(data));
		delete config;
	},

	get_manufacturers: function(){
		return Object.keys(all_data);
	},

	get_devices: function(manufacturer){
		return Object.keys(all_data[manufacturer] || {});
	},

	get_codes: function(manufacturer, device_type){
		return all_data[manufacturer] && all_data[manufacturer][device_type] || {};
	}
};

module.exports = e;
