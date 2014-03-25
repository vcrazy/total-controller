var e = {
	init: function(config){
		var available_methods = ['get', 'post'],
			filename = config.common.get_filename(__filename);

		for(var i in available_methods){
			var method = available_methods[i];

			e[method] = require('./' + filename + '/' + method).init(config)[method];
		}

		return e;
	}
};

module.exports = e;
