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

	send: function(data){
		e.destroy();

		config.res.send(JSON.stringify(data));
	},

	get_arguments: function(arguments){
		var args = [];

		for(var a in arguments){
			args.push(arguments[a]);
		}

		return args;
	},

	get: function(){
		e.init();

		var args = e.get_arguments(arguments),
			func = 'get_' + args.shift();

		e[func].apply(e, args);
	},

	get_manufacturers: function(){
		db.query("SELECT manufacturer_name FROM manufacturers ORDER BY manufacturer_name;", function(err, data){
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
		db.query("SELECT device_type FROM codesets WHERE manufacturer_id = (" +
			"SELECT manufacturer_id FROM manufacturers WHERE manufacturer_name LIKE ? LIMIT 1" +
		") GROUP BY device_type ORDER BY codeset_id", [manufacturer], function(err, data){
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
		") AND device_type LIKE ? ORDER BY codeset_id;", [manufacturer, device_type], function(err, data){
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
	},

	post: function(){
		e.init();

		var args = e.get_arguments(arguments),
			func = 'post_' + args.shift();

		e[func].apply(e, args);
	},

	post_comment: function(data){
		var is_useful = data.is_useful == 1 ? 1 : 0,
			comment = data.comment,
			db_result = {ok: 0};

		db.query("INSERT INTO comments (app_useful, comment) VALUES (?, ?);", [is_useful, comment], function(err, data){
			if(!err){
				db_result.ok = 1;
			}

			e.send(db_result);
		});
	}
};

module.exports = e;
