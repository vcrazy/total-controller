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
//
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

//	for(var i in data){
//		var manufacturer = data[i];
//
//		for(var j in manufacturer){
//			var device = manufacturer[j];
//
//			for(var k in device){
//				// manufacturer
//				// device type
//				// codeset id
//				// codeset data
//				save_codeset(i, j, k, device[k]);
//			}
//		}
//	}
//
//	save_codesets();

//	var manufacturers_new = ["Abc","Abs","Accurian","Accutek","Adc","ADCOM","Admiral","Advent","Adventura","Aiko","Aiwa","AKAI","Albatron","Alco","ALIENWARE","Allegro","Alphastar","ALTEC Lansing","Amana","Ambassador","America action","American high","Americast","Amino","Amphion Mediaworks","Ampro","Amw","Anam","Anam national","AOC","APEX digital","Apple","Arrgo","Asha","Aspire digital","Audioaccess","AudioTronic","AUDIOVOX","Aventura","Axion","Beaumark","BELLSOUTH","BENQ","BIONAIRE","Bk","BLAUPUNKT","Blue parade","BOSE","Bradford","BROKSONIC","Burmester","California Audio Labs","Calix","Cambridge SoundWorks","Candle","Canon","Capetronic","Carnivale","Carver","Cce","Celebrity","Celera","Century","Changhong","Chaparral","Cinea","CINEVISION","CITIZEN","Clairtone","Clarion","Classic","Clearmaster","CLEARMAX","COBY","Colt","Comfortex","Commercial solutions","Contec","COOLMAX","Craig","CREATIVE","CROSLEY","Crossdigital","CROWN","Curtis Mathes","Cxc","CyberHome","Cybernex","CyberPower","CYTRON","D-Link","DAEWOO","DELL","DELPHI","DENON","Denstar","DESAY","Digeo","Digi","Director","DIRECTV","Disco vision","dish network system","dishpro","Disney","Dkk","DMX electronics","Dual","Dumont","DURABRAND","dvd2000","Dwin","Dynatech","ECHOSTAR","Electroband","Electrograph","Electrohome","Electrophonic","EMEREX","EMERSON","Enterprise","ENVISION","EPSON","esa","ESCIENT","ExpressVu","Fisher","FRIGIDAIRE","FUJI","FUJITSU","FUNAI","Futuretech","Garrard","Gateway","GE","General Instrument","GENEXXA","Gibralter","Glory horse","Go video","Go vision","Goi","Goldstar","gradiente","Greenhill","Grunpy","Haier","Hallmark","Hamlin","HANNSPREE","Harley Davidson","harman/kardon","Harvard","Harwood","Havermy","Helios","Hello Kitty","hewlett packard","Hi-Q","Hisense","HITACHI","Hiteker","Holmes","Howard Computers","hp","HTS","Hughes Network Systems","HUMAX","Hunter Douglas","Hush","HYUNDAI","i3 micro","Ibuypower","Ilo","INFINITY","Initial","INSIGNIA","Integra","Inteq","JBL","JCB","JENSEN","Jerrold","JVC","jWIN","Kawasaki","Kds","KEC","Kenmore","KENWOOD","KLH","Kodak","KONKA","KoolConnect","KOSS","KOST","KRELL","KTV","Landel","LASKO","LASONIC","Left Coast","LENOXX","LG","LIGHTOLIER","LINKSYS","LINN","LITEON","Litetouch","Lloyd\'s","LOEWE","LOGIK","LUTRON","Lxi","MAG","MAGNASONIC","MAGNAVOX","Magnin","malata","marantz","Marta","Matsushita","Maxent","Mcintosh","Mcs","Media center pc","Megapower","Megatron","Mei","Memorex","Mga","MGN Technology","Microsoft","Midland","Mind","MINOLTA","Mintek","MIRO","Mission","MITSUBISHI","MOMITSU","Monivision","MOTOROLA","mtc","MultiTech","Myrio","NAD","Navipod","NEC","NESA","NETGEAR","Nettv","NEXT BASE","Next Level","NEXXTECH","NIKKO","niveus media","NOBLEX","Norcent","Northgate","NOVA","Nsm","NTC","OLEVIA","OLYMPUS","OMNIFI","One For All","ONKYO","Onwa","OPTIMUS","Optoma","OptoMedia Electronics","OPTONICA","ORION","Pace","Panasonic","Panther","Paragon","PARASOUND","Paysat","Pcs","Penney","PENTAX","Petters","PHILCO","PHILIPS","Pilot","Pioneer","Polaroid","polk audio","Portland","PRESIDIAN","Prima","Princeton","Prism","Profitronic","ProScan","Protec","Proton","PROVIEW","Provision","PULSAR","QED","Quad","Quasar","RadioShack","Radix","Randex","Rca","Realistic","Regal","replaytv","Rhapsody","Ricavision","Rio","Roku","ROTEL","Rowa","Royal Sovereign","RUNCO","Russound","SAE","Sampo","SAMSUNG","Sanky","SANSUI","SANYO","SCEPTRE","Scientific Atlanta","Scotch","Scott","SEARS","Security System","SEGA","SEJIN","Sensory Science","SHARP","Sharper Image","Sheng Chia","Sherwood","Shinsonic","Shintom","Shogun","Signet","Simpson","Singer","SIRIUS","SLIM DEVICES","SmartLinc","SMC","Sonic Blue","Sonic Frontiers","SONY","Soundesign","Sova","SPECTRONIQ","Squareview","SSS","Stack 9","STAR CHOICE","StarCom","Starlite","Stereophonics","Sts","Studio Experience","Sunfire","SuperCable","Supermax","SUPERSCAN","Supreme","SureWest","Sva","SYLVANIA","Symphonic","Syntax","Systemax","TAG McLaren","Tagar Systems","Tandy","TASCAM","TATUNG","TEAC","Technics","Technosonic","Techview","TECHWOOD","TECHNIKA","TELEFUNKEN","THETA Digital","Thomas","THOMSON","THORENS","TiVo","TMK","TNCI","Tocom","Torx","TOSHIBA","Tosonic","TOTE VISION","Touch","TREDEX","TriStar","TVS","UltimateTV","Uniden","UNITECH","Universal x10","URBAN Concepts","Us Digital","Us Logic","USDtv","v2","Vector","vector research","Venturer","Victor","Video Concepts","Videomagic","Videosonic","VIDIKRON","vidtech","Viewmaster","ViewSonic","Villain","Vision","VIZIO","Voodoo","Voom","Vortex View","Wards","WayCon","Westinghouse","Whirlpool","White Westinghouse","Windmere","Wyse","X10","XBOX","XM","Xr-1000","YAMAHA","Zenith","Zoece","ZT group"];
//
//	for(var i in manufacturers_new){
//		var manufacturer = manufacturers_new[i];
//
//		update_manufacturer(manufacturer);
//	}

//	var buttons_map = [['Power On/Off', 'Power'],['On, Power On/Off', 'Power On'],['Off, Power On/Off', 'Power Off'],['Channel Up'],['Channel Down'],['Volume Up'],['Volume Down'],['100'],['Menu Down, Adjust Down', 'Menu Down'],['Adjust Up'],['AUX, RGB'],['AV,  TUNER'],['Back'],['CAB, SAT, S-VIDEO'],['Channel Enter ', 'Channel Enter'],['Delimiter'],['Digit 0'],['Digit 1'],['Digit 2'],['Digit 3'],['Digit 4'],['Digit 5'],['Digit 6'],['Digit 7'],['Digit 8'],['Digit 9'],['Display, OSD, Info'],['Exit, Cancel'],['External Antenna'],['Fast Forward'],['Menu Left'],['Format, Wide, 16:9,', '16:9'],['Guide'],['Last Channel'],['Menu (Audio)'],['Menu (Picture)'],['Menu Up, Adjust Up', 'Menu Up'],['Menu Select'],['Mute'],['Pause'],['PIP Channel Down'],['PIP Channel Up'],['PIP Freeze'],['PIP Input'],['PIP Move'],['PIP Multi'],['PIP OFF'],['PIP ON'],['PIP Swap'],['Play'],['Record'],['Rewind'],['SAP, CC'],['Skip Down'],['Skip Up'],['Slow'],['Stop'],['Surround On/Off', 'Surround'],['TV, COMPONENT', 'TV, Component'],['TV/Video'],['VID1, Video, TVp1', 'VID1'],['VID2, TVp2', 'VID2'],['VID3, TVp3', 'VID3'],['VID4, TVp4', 'VID4'],['VID5, AV1, VCR, BNC', 'VID5'],['VID6, AV2, VDP, DVD,DVI', 'VID6'],['Adjust Down'],['Favorite'],['Menu Right']];
//
//	var all_buttons = buttons_map.map(function(e){
//		return e[1] || e[0];
//	}).sort();
//
//	save_buttons(all_buttons);

//	var codesets = {};
//
//	for(var i in data){
//		var manufacturer = data[i];
//
//		for(var j in manufacturer){
//			var device = manufacturer[j];
//
//			for(var k in device){
//				codesets[k] = true;
//			}
//		}
//	}
//
//	for(var i in codesets){
//		save_codeset(i);
//	}
//
//	for(var manufacturer_name in data){
//		var manufacturer = data[manufacturer_name];
//
//		for(var device_type in manufacturer){
//			var device = manufacturer[device_type];
//
//			for(var codeset_id in device){
//				var buttons = device[codeset_id];
//
//				save_device_codeset(manufacturer_name, device_type, codeset_id, buttons);
//			}
//		}
//	}
//	return;
//
//	disconnect();
//};
//
//var save_manufacturers = function(manufacturers){
//	manufacturers = manufacturers.map(function(e){
//		return '("' + e + '")';
//	}).join(', ');
//
//	connection.query("INSERT INTO manufacturers (manufacturer_name) VALUES " + manufacturers + ";", function(err, result){
//		console.log(err, result);
//	});
//};
//
//var save_devices = function(devices){
//	devices = devices.map(function(e){
//		return '("' + e + '")';
//	}).join(', ');
//
//	connection.query("INSERT INTO devices (device_type) VALUES " + devices + ";", function(err, result){
//		console.log(err, result);
//	});
//};
//
//var update_manufacturer = function(manufacturer){
//	connection.query("UPDATE manufacturers SET manufacturer_name = '" + manufacturer + "' WHERE TRIM(LOWER(manufacturer_name)) = TRIM('" + manufacturer + "');", function(err, result){
//		console.log(err, result);
//	});
//};
//
//var save_buttons = function(buttons){
//	buttons = buttons.map(function(e){
//		return '("' + e + '")';
//	}).join(', ');
//
//	connection.query("INSERT INTO buttons (button_name) VALUES " + buttons + ";", function(err, result){
//		console.log(err, result);
//	});
//};
//
//var save_codeset = function(codeset_id_globalcache){
//	connection.query("INSERT INTO codesets (codeset_id_globalcache) VALUES ('" + codeset_id_globalcache + "');", function(err, result){
//		console.log(err, result);
//	});
//};
//
//var save_device_codeset = function(manufacturer_name, device_type, codeset_id_globalcache, buttons){
//	connection.query("INSERT INTO device_codesets (manufacturer_id, device_id, codeset_id) VALUES (" +
//	"(SELECT manufacturer_id FROM manufacturers WHERE TRIM(LOWER(manufacturer_name)) = TRIM(LOWER(?))), " +
//	"(SELECT device_id FROM devices WHERE TRIM(LOWER(device_type)) = TRIM(LOWER('" + device_type + "'))), " +
//	"(SELECT codeset_id FROM codesets WHERE codeset_id_globalcache = '" + codeset_id_globalcache + "')" +
//	");", [manufacturer_name], function(err, result){
//		console.log(err, result);
//
//		var insert_id = result.insertId;
//
//		var buttons_map = [['Power On/Off', 'Power'],['On, Power On/Off', 'Power On'],['Off, Power On/Off', 'Power Off'],['Channel Up'],['Channel Down'],['Volume Up'],['Volume Down'],['100'],['Menu Down, Adjust Down', 'Menu Down'],['Adjust Up'],['AUX, RGB'],['AV,  TUNER'],['Back'],['CAB, SAT, S-VIDEO'],['Channel Enter ', 'Channel Enter'],['Delimiter'],['Digit 0'],['Digit 1'],['Digit 2'],['Digit 3'],['Digit 4'],['Digit 5'],['Digit 6'],['Digit 7'],['Digit 8'],['Digit 9'],['Display, OSD, Info'],['Exit, Cancel'],['External Antenna'],['Fast Forward'],['Menu Left'],['Format, Wide, 16:9,', '16:9'],['Guide'],['Last Channel'],['Menu (Audio)'],['Menu (Picture)'],['Menu Up, Adjust Up', 'Menu Up'],['Menu Select'],['Mute'],['Pause'],['PIP Channel Down'],['PIP Channel Up'],['PIP Freeze'],['PIP Input'],['PIP Move'],['PIP Multi'],['PIP OFF'],['PIP ON'],['PIP Swap'],['Play'],['Record'],['Rewind'],['SAP, CC'],['Skip Down'],['Skip Up'],['Slow'],['Stop'],['Surround On/Off', 'Surround'],['TV, COMPONENT', 'TV, Component'],['TV/Video'],['VID1, Video, TVp1', 'VID1'],['VID2, TVp2', 'VID2'],['VID3, TVp3', 'VID3'],['VID4, TVp4', 'VID4'],['VID5, AV1, VCR, BNC', 'VID5'],['VID6, AV2, VDP, DVD,DVI', 'VID6'],['Adjust Down'],['Favorite'],['Menu Right']];
//
//		for(var button_name in buttons){
//			var new_button = buttons_map.filter(function(e){
//				return e[0] == button_name;
//			})[0],
//				new_button_name = '';
//
//			if(new_button[1]){
//				new_button_name = new_button[1];
//			}else{
//				new_button_name = new_button[0];
//			}
//
//			send(insert_id, new_button_name, buttons[button_name].frequency, buttons[button_name].code.join(','));
//		}
//	});
//};
//
//var send = function(insert_id, new_button_name, frequency, code){
//	connection.query("INSERT INTO device_codeset_buttons (device_codeset_id, button_id, frequency, code) VALUES (" +
//	"'" + insert_id + "', " +
//	"(SELECT button_id FROM buttons WHERE button_name = '" + new_button_name + "'), " +
//	"'" + frequency + "', " +
//	"'" + code + "'" +
//	");", function(err, result){
//		console.log(err, result);
//	});

//	manufacturers = {};
//	devices = {};
//	codeset_ids = [];
//	buttons = {};
//
//	connection.query("SELECT * FROM manufacturers;", function(err, result){
//		for(var a in result){
//			manufacturers[result[a].manufacturer_id] = result[a].manufacturer_name;
//		}
//
//	connection.query("SELECT * FROM devices;", function(err, result){
//		for(var b in result){
//			devices[result[b].device_id] = result[b].device_type;
//		}
//
//	connection.query("SELECT codeset_id FROM codesets_old;", function(err, result){
//		for(var c in result){
//			codeset_ids.push(result[c].codeset_id);
//		}
//
//	connection.query("SELECT * FROM buttons;", function(err, result){
//		for(var d in result){
//			buttons[result[d].button_id] = result[d].button_name;
//		}
//
//		for(var j in codeset_ids){
//
//(function(codeset_id1){
//	connection.query("SELECT DISTINCT manufacturer_id FROM device_codesets WHERE codeset_id = '" + codeset_id1 + "';", function(err, result){
//
//		for(var e in result){
//			var manufacturer_id1 = result[e].manufacturer_id;
//
//(function(codeset_id, manufacturer_id){
//	connection.query(
//	"SELECT * " +
//	"FROM device_codeset_buttons AS dcb " +
//	"JOIN device_codesets AS dc ON dcb.device_codeset_id=dc.device_codeset_id " +
//	"WHERE dc.codeset_id = '" + codeset_id + "' AND dc.manufacturer_id = '" + manufacturer_id + "';", function(err, result){
//
//		var insert_data = [];
//
//		for(var i in result){
//			var button_name = buttons[result[i].button_id],
//				device_type = devices[result[i].device_id],
//				frequency = result[i].frequency,
//				code = result[i].code;
//
//			insert_data.push({
//				button_name: button_name,
//				frequency: frequency,
//				code: code.split(',').map(function(e){
//					return parseInt(e, 10);
//				})
//			});
//
//		}
//
//	connection.query("INSERT INTO codesets (manufacturer_id, device_type, codeset) VALUES (" +
//	"'" + manufacturer_id + "', '" + device_type + "', '" + JSON.stringify(insert_data) + "'" +
//	");");
//
//	});
//
//})(codeset_id1, manufacturer_id1);
//
//		}
//
//	});
//
//})(codeset_ids[j]);
//
//		}
//
//	});
//	});
//
//	});
//
//	});
//
//	connection.query("SELECT codeset_id, codeset FROM codesets;", function(err, data){
//		for(var i in data){
//			var codeset = JSON.parse(data[i].codeset),
//				new_codeset = {};
//
//			for(var j in codeset){
//				new_codeset[codeset[j].button_name] = {
//					frequency: codeset[j].frequency,
//					code: codeset[j].code
//				};
//			}
//
//			new_codeset = JSON.stringify(new_codeset);
//
//			connection.query("UPDATE codesets SET codeset = ? WHERE codeset_id = ?;", [new_codeset, data[i].codeset_id]);
//		}
//	});
//

	fs.readFile('../remotecentral/remotecentral.txt', 'utf-8', function(err, data){
		data = JSON.parse(data);

		for(var i in data){
			(function(m, devices){
				connection.query("SELECT manufacturer_id FROM manufacturers WHERE LOWER(manufacturer_name) LIKE LOWER(?) LIMIT 1;", [m], function(err, matches){
//					if(!matches.length){
//						connection.query("INSERT INTO manufacturers (manufacturer_name) VALUES (?)", [m], function(err, result){
//							console.log(err, result);
//						});
//					}

					var manufacturer_id = matches[0].manufacturer_id;

					for(var j in devices){
						for(var k in devices[j]){
							devices[j][k] = {
								frequency: 38000,
								code: devices[j][k]
							};
						}

						connection.query("INSERT INTO codesets (manufacturer_id, device_type, codeset) VALUES (?, ?, ?)", [manufacturer_id, j, JSON.stringify(devices[j])]);
					}
				});
			})(i, data[i]);
		}
	});

};
