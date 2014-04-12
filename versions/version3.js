/**
 * Here we load all modules that are allowed to be used.
 * The load_modules in the context of this object will
 * make keys on this for each module whose value will be the module itself =
 * object with keys the rest methods.
 */

var config = {};

var e = {
	configure: function(new_config){
		config = new_config;
	},

	init: function(new_config){
		var modules = ['remotes', 'comments'];

		for(var i in config){
			if(new_config[i] === undefined){
				new_config[i] = config[i];
			}
		}

		new_config.loader.load_modules.apply(e, [modules, new_config]);
	}
};

module.exports = e;
