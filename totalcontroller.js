var express = require('express'),
	app = express(),
	fs = require('fs'),
	data_file = './get_data/data3.txt',
	defaults = {
		port: 9119
	},
	Request,
	Response,
	all_data = {};

fs.readFile(data_file, 'utf8', function(err, data) {
	if (err){
		throw err;
	}

	all_data = JSON.parse(data);
});

// start the drums
app.listen(defaults.port);

// called like this /codeset/1272/5
// meaning 'return the first 5 buttons for codeset 1272'
// app.get('/codeset/:codeset/:codes_number', function(req, res){
// 	var codeset = req.params.codeset * 1,
// 		valid_codeset_number = codeset.toString().match(/\d*/)[0].length,
// 		codes_number = req.params.codes_number * 1,
// 		valid_codes_number = codes_number.toString().match(/\d*/)[0].length && codes_number,
// 		data = [],
// 		key_importance = ['Power On/Off', 'On, Power On/Off', 'Off, Power On/Off', 'Channel Up', 'Channel Down', 'Volume Up', 'Volume Down'];

// 	// only if both values are integers
// 	if(valid_codeset_number && valid_codes_number){
// 		// next time do it better
// 		// now I'm tired and sleepy
// 		loops_start:
// 		for(var i in all_data){ // key = manufacturer
// 			for(var j in all_data[i]){ // key = device type
// 				for(var k in all_data[i][j]){
// 					if(k == codeset){
// 						data = Object.keys(all_data[i][j][k]);
// 						break loops_start;
// 					}
// 				}
// 			}
// 		}
// 	}

// 	if(data.length){
// 		data.sort(function(a, b){
// 			var ai = key_importance.indexOf(a),
// 				bi = key_importance.indexOf(b),
// 				result;

// 			if(ai > -1 && bi > -1){
// 				result = ai > bi ? 1 : (ai == bi ? 0 : -1);
// 			}else{
// 				result = ai < bi ? 1 : (ai == bi ? 0 : -1);
// 			}

// 			return result;
// 		});
// 	}

// 	res.send(JSON.stringify(data));
// });

// GET '/*' (all)
app.get('/*', function(req, res){

// for(var i in all_data){
// 	for(var j in all_data[i]){
// 		for(var k in all_data[i][j]){
// 			var l = all_data[i][j][k];
// 			if(!l['Power On/Off'] && !l['On, Power On/Off'] && !l['Off, Power On/Off'] && !l['Play']){
// 				console.log(i,j,k);
// 			}
// 		}
// 	}
// }

	var url = decodeURI(req.url).split('/'),
		data = [];

	// remove the first '/' and the empty strings
	url.shift();
	url = url.filter(function(e){
		return e;
	});

	if(url.length === 0){
		// get all manufacturers
		data = Object.keys(all_data);
	}else if(url.length === 1){
		// get devices (by manufacturer)
		data = Object.keys(all_data[url[0]] || {});
	}else if(url.length === 2){
		// get codes (by manufacturer & device)
		data = all_data[url[0]] && all_data[url[0]][url[1]] || {};
	}

	res.send(JSON.stringify(data));
});
