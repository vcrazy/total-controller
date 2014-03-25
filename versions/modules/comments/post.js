var db,
	print;

var e = {
	init: function(config){
		db = config.db;
		print = config.print;

		return e;
	},

	post: function(){
		var is_useful = data.is_useful == 1 ? 1 : 0,
			comment = data.comment,
			db_result = {ok: 0};

		db.query("INSERT INTO comments (app_useful, comment) VALUES (?, ?);", [is_useful, comment], function(err, data){
			if(!err){
				db_result.ok = 1;
			}

			print.json(db_result);
		});
	}
};

module.exports = e;
