var e = {
	init: function(config){
		var modules = ['remotes', 'comments'];

		for(var i in modules){
			var module = modules[i];

			e[module] = require('./modules/' + module).init(config);
		}
	}
};

module.exports = e;
