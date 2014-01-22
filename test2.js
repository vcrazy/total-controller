var express = require('express'),
	app = express(),
	fs = require('fs'),
	data_file = './get_data/data5.txt';

fs.readFile(data_file, 'utf8', function(err, data) {
	data = JSON.parse(data);

	var new_data = {},
		p = false,
		a = 0;

	for(var i in data){
		a++;

		if(a >= 10 && !p){
			new_data['agabonga'] = {
				'TV': {
					14122: {
						'Power On/Off': {
							frequency: 38000,
							code: [169, 168, 21, 63, 21, 63, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 63, 21, 63, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 63, 21, 63, 21, 63, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 63, 21, 63, 21, 63, 21, 63, 21, 63, 21, 1794, 169, 168, 21, 21, 21, 3694]
						}
					}
				}
			};

			p = true;
		}

		new_data[i] = data[i];
	}

	fs.writeFile('./get_data/data5.txt', JSON.stringify(new_data));
});
