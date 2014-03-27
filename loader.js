/**
 * It's important to provide context for the functions here!
 */

var e = {
	load_modules: function(modules, config){
		for(var i in modules){
			var module = modules[i];

			this[module] = require('./versions/modules/' + module).init(config);
		}
	},

	load_methods: function(module, methods, config){
		for(var i in methods){
			var method = methods[i];

			this[method] = require('./versions/modules/' + module + '/' + method).init(config)[method];
		}
	}
};

module.exports = e;
