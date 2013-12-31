var express = require('express'),
	app = express(),
	fs = require('fs'),
	data_file = './get_data/data5.txt';

fs.readFile(data_file, 'utf8', function(err, data) {
	var data = JSON.parse(data);

	for(var m in data){
		var k;

		k = Object.keys(data[m]).length;
		if(!k){
			console.log(m, data[m]);
			delete data[m];
		}

		for(var t in data[m]){
			k = Object.keys(data[m][t]).length;
			if(!k){
				console.log(m, t, data[m][t]);
				delete data[m][t];
			}

			for(var c in data[m][t]){
				k = Object.keys(data[m][t][c]).length;
				if(!k){
					console.log(m, t, c, data[m][t][c]);
					delete data[m][t][c];
				}
			}
		}
	}
	
	fs.writeFile(data_file, JSON.stringify(data));
});
