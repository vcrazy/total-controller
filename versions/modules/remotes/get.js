var common,
	db,
	print;

var e = {
	init: function(config){
		common = config.common;
		db = config.db;
		print = config.print;

		return e;
	},

	get: function(){
		var args = common.get_arguments(arguments),
			manufacturer = args[0],
			device_type = args[1];

		switch(args.length){
			case 0:
				// get all manufacturers
				e.get_manufacturers();
				break;
			case 1:
				// get devices (by manufacturer)
				e.get_devices(manufacturer);
				break;
			case 2:
				// get codes (by manufacturer & device)
				e.get_codes(manufacturer, device_type);
				break;
			default:
				break;
		}
	},

	get_manufacturers: function(){
		db.query("SELECT manufacturer_name FROM manufacturers ORDER BY manufacturer_name;", function(err, data){
			if(err){
				print.json([]);
				return;
			}

			data = data.map(function(d){
				return d.manufacturer_name;
			});

			print.json(data);
		});
	},

	get_devices: function(manufacturer){
		db.query("SELECT device_type FROM codesets WHERE manufacturer_id = (" +
			"SELECT manufacturer_id FROM manufacturers WHERE manufacturer_name LIKE ? LIMIT 1" +
		") GROUP BY device_type ORDER BY codeset_id", [manufacturer], function(err, data){
			if(err){
				print.json([]);
				return;
			}

			data = data.map(function(d){
				return d.device_type;
			});

			print.json(data);
		});
	},

	get_codes: function(manufacturer, device_type){
		db.query("SELECT codeset_id, codeset FROM codesets WHERE manufacturer_id = (" +
			"SELECT manufacturer_id FROM manufacturers WHERE manufacturer_name LIKE ? LIMIT 1" +
		") AND device_type LIKE ? ORDER BY codeset_id;", [manufacturer, device_type], function(err, data){
			if(err){
				print.json({});
				return;
			}

			var new_data = {};
			for(var i in data){
				new_data[data[i].codeset_id] = JSON.parse(data[i].codeset);
			}

			print.json(new_data);
		});
	}
};

module.exports = e;
