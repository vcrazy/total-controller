/**
 * This module loads its methods using loader's load_methods in the context of
 * this object here.
 * The load_modules will make keys on this object with the
 * supported methods whose value will be the method itself.
 */

var e = {
	init: function(config){
		var module = config.common.get_filename(__filename),
			methods = ['get'];

		config.loader.load_methods.apply(e, [module, methods, config]);

		return e;
	}
};

module.exports = e;
