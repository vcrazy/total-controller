var mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'totaldata'
});

connection.connect();

connection.query("SELECT codeset_id, codeset FROM codesets;", function(err, data){
//	var keys = {};
//
//	for(var i in data){
//		var codeset = JSON.parse(data[i].codeset),
//			codeset_keys = Object.keys(codeset);
//
//		for(var j in codeset_keys){
//			keys[codeset_keys[j]] = true;
//		}
//	}
//
//	do_stuff(Object.keys(keys));

//	for(var i in data){
//		var new_codeset = JSON.stringify(do_stuff2(JSON.parse(data[i].codeset)));
//		connection.query("UPDATE codesets SET codeset = ? WHERE codeset_id = ?;", [new_codeset, data[i].codeset_id], function(err, result){
//			console.log(new Date());
//		});
//	}
//
//	for(var i in data){
//		do_stuff3(JSON.parse(data[i].codeset), data[i].codeset_id);
//	}
});

var do_stuff = function(keys){
//	.trim() each key and then sort alphabetically;

	/*
		for(var i in keys){
			foreach key:
			var power = !!keys[i].match(/\b(power)\b/i),
				on = !!keys[i].match(/\b(on)\b/i),
				off = !!keys[i].match(/\b(off)\b/i),
				is_power_on = power && on && !off,
				is_power_off = power && !on && off,
				is_power = power && ((!is_power_on && !is_power_off) || (is_power_on && is_power_off));
			endforeach;
			if each button count === 1
			then show the button;
		}
	*/

	/*
		// same as the power buttons
		for(var i in keys){
			var volume = keys[i].match(/\b(vol(ume)?)\b/i),
				plus = keys[i].match(/(\b(up)\b)|(\+)/i),
				minus = keys[i].match(/(\b(down|dn)\b)|(\-)/i);
		}
	*/

	/*
		// same as the power buttons
		for(var i in keys){
			var program = keys[i].match(/\b(ch|channel|pg)\b/i),
				plus = keys[i].match(/(\b(up)\b)|(\+)/i),
				minus = keys[i].match(/(\b(down|dn)\b)|(\-)/i);
		}
	*/

	/*
		for(var i in keys){
			var mute = keys[i].match(/^(volume)?(\s)?mute$/i);
		}
	*/

	/*
		for(var i in keys){
			var play = keys[i].match(/^\s*play(.*pause)?$/i);
		}
	*/

//	да ъпдейтна всички кодсети с правилни имена на бутони и сортирани по азбучен ред
};

var do_stuff2 = function(codeset){
//	var new_codeset = {},
//		keys = [];
//
//	for(var i in codeset){
//		// remote starting and ending whitespaces
//		// replace multiple spaces with one
//		var key = i.trim().replace(/\s{2,}/g, ' ');
//
//		if(key !== i){
//			codeset[key] = codeset[i];
//			delete codeset[i];
//		}
//	}
//
//	// get all keys
//	for(var i in codeset){
//		keys.push(i);
//	}
//
//	// sort case insentively
//	keys.sort(function(a, b){
//		return a.toLowerCase().localeCompare(b.toLowerCase());
//	});
//
//	// build the new sorted codeset
//	for(var i in keys){
//		new_codeset[keys[i]] = codeset[keys[i]];
//	}
//
//	return new_codeset;
};

var do_stuff3 = function(codeset, codeset_id){
//	for(var i in codeset){
//		var play = i.match(/^\s*play(.*pause)?$/i);
//		if(play){
//			console.log(i, codeset_id);
//		}
//	}
};
