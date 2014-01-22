var fs = require('fs'),
	file = '../get_data/data5.txt',
	data,
	connection;

fs.readFile(file, 'utf8', function(err, json_data) {
	if(err){
		return;
	}

	data = JSON.parse(json_data);

	import_data();
});

var connect = function(){
	var mysql = require('mysql');

	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'totaldata'
	});

	connection.connect();
};

var disconnect = function(){
	connection.end();
};

var import_data = function(){
	connect();

//	var manufacturers = Object.keys(data);
//	save_manufacturers(manufacturers);

//	var devices = {};
//
//	for(var i in data){
//		var manufacturer = data[i];
//
//		for(var j in manufacturer){
//			devices[j] = 1;
//		}
//	}
//
//	devices = Object.keys(devices);
//	save_devices(devices);

	for(var i in data){
		var manufacturer = data[i];

		for(var j in manufacturer){
			var device = manufacturer[j];

			for(var k in device){
				// manufacturer
				// device type
				// codeset id
				// codeset data
				save_codeset(i, j, k, device[k]);
			}
		}
	}

	save_codesets();

	disconnect();
};

var save_manufacturers = function(manufacturers){
	manufacturers = manufacturers.map(function(e){
		return '("' + e + '")';
	}).join(', ');

	connection.query("INSERT INTO manufacturers (manufacturer_name) VALUES " + manufacturers + ";", function(err, result){
		console.log(err, result);
	});
};

var save_devices = function(devices){
	devices = devices.map(function(e){
		return '("' + e + '")';
	}).join(', ');

	connection.query("INSERT INTO devices (device_type) VALUES " + devices + ";", function(err, result){
		console.log(err, result);
	});
};

var save_codeset = function(manufacturer_name, device_type, codeset_id, codeset_data){
	console.log(arguments);
	process.exit();
};

