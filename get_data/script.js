var all_data = {},
	start = + new Date,
	sequence = 0,
	min = 100,
	waiting = 100,
	total_requests = 0,
	received_requests = 2; // 2 requests failed; there are 125 better ways to do this but I don't have time to do so

var step1 = function(){
	console.log('Started on:', new Date);

	$.get('https://irdatabase.globalcache.com/v1/manufacturers', function(data){
//		console.log(data);

		var l = data.length;
		total_requests += l;
		for(var i = 0; i < l; i++){
			all_data[data[i].Key] = {};

			sequence++;
			setTimeout(step2, get_time(), data[i].Key);
		}
	});
};

var step2 = function(manufacturer){
	$.get('https://irdatabase.globalcache.com/v1/manufacturers/'+ manufacturer + '/devicetypes', function(data){
		received_requests++;
//		console.log(data);

		var l = data.length;
		total_requests += l;
		for(var i = 0; i < l; i++){
			all_data[manufacturer][data[i].Key] = {};

			sequence++;
			setTimeout(step3, get_time(), manufacturer, data[i].Key);
		}
	});
};

var step3 = function(manufacturer, device){
	$.get('https://irdatabase.globalcache.com/v1/manufacturers/'+ manufacturer + '/devicetypes/' + device + '/codesets', function(data){
		received_requests++;

		// here we should get the codeset only
		// and we don't need to get all codesets because their differences
		// are in a part that we don't use

		var l = data.length;
		total_requests += l;
		for(var i = 0; i < l; i++){
			all_data[manufacturer][device][data[i].Key] = {};

			sequence++;
			setTimeout(step4, get_time(), manufacturer, device, data[i].Key);
		}
	});
};

var step4 = function(manufacturer, device, codeset){
	$.get('https://irdatabase.globalcache.com/v1/manufacturers/'+ manufacturer + '/devicetypes/' + device + '/codesets/' + codeset, function(data){
		received_requests++;
//		console.log(data);

		var l = data.length;
		for(var i = 0; i < l; i++){
			var code = data[i].IRCode.split(',').map(function(e){
					return e * 1;
				}),
				frequency = code[0];

			code.splice(0, 3); // remove the frequency and two ones (1)

			all_data[manufacturer][device][codeset][data[i].KeyName] = {
				frequency: frequency,
				code: code
			};
		}

		if(total_requests == received_requests){
			console.log('Ready on:', new Date);
			all_data = JSON.stringify(all_data);
			console.log(all_data);
//			window.localStorage.all_data = all_data; // too much information
			$('body').append('<audio autoplay="autoplay"><source src="http://ganev.bg/v/DavidGuetta-YoureNotAlone.mp3" type="audio/mp3" /></audio>');
		}

	});
};

function get_time(){
	return Math.max(min, start + sequence * waiting - + new Date);
}

// start
step1();
