/**
 * Here we load all modules that are allowed to be used.
 * The load_modules in the context of this object will
 * make keys on this for each module whose value will be the module itself =
 * object with keys the rest methods.
 */

var e = {
	init: function(config){
		var modules = ['remotes', 'comments'];

		config.loader.load_modules.apply(e, [modules, config]);
	}
};

module.exports = e;
