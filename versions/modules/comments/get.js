var db,
	print;

var e = {
	init: function(config){
		db = config.db;
		print = config.print;

		return e;
	},

	get: function(){
		db.query("SELECT * FROM comments;", function(err, data){
			print.json(data);
		});
	}
};

module.exports = e;
