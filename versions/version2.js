var db,
	mysql = require('mysql'),
	config = {};

var e = {
	configure: function(new_config){
		config = new_config;
	},

	init: function(){
		db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'totaldata'
		});

		db.connect();
	},

	destroy: function(){
		delete config;

		db.end();
	},

	get: function(){
		e.init();

		var args = [],
			func = '';

		for(var a in arguments){
			args.push(arguments[a]);
		}

		func = 'get_' + args.shift();

		e[func].apply(e, args);
	},

	send: function(data){
		e.destroy();

		config.res.send(JSON.stringify(data));
	},

	get_manufacturers: function(){
		db.query("SELECT manufacturer_name FROM manufacturers;", function(err, data){
			if(err){
				e.send([]);
				return;
			}

			data = data.map(function(d){
				return d.manufacturer_name;
			});

			e.send(data);
		});
	},

	get_devices: function(manufacturer){
		db.query("SELECT DISTINCT device_type FROM codesets WHERE manufacturer_id = (" +
			"SELECT manufacturer_id FROM manufacturers WHERE manufacturer_name LIKE ? LIMIT 1" +
		");", [manufacturer], function(err, data){
			if(err){
				e.send([]);
				return;
			}

			data = data.map(function(d){
				return d.device_type;
			});

			e.send(data);
		});
	},

	get_codes: function(manufacturer, device_type){
		db.query("SELECT codeset_id, codeset FROM codesets WHERE manufacturer_id = (" +
			"SELECT manufacturer_id FROM manufacturers WHERE manufacturer_name LIKE ? LIMIT 1" +
		") AND device_type LIKE ?;", [manufacturer, device_type], function(err, data){
			if(err){
				e.send({});
				return;
			}

			var new_data = {};
			for(var i in data){
				new_data[data[i].codeset_id] = JSON.parse(data[i].codeset);
			}

			e.send(new_data);
		});
	}
};

module.exports = e;
