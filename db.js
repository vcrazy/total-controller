/**
 * Common functions for versions 3+
 */

var db,
	mysql = require('mysql');

var e = {
	init: function(){
		db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'totaldata'
		});

		db.connect();

		return db;
	}
};

module.exports = e;
