var e = {
	init: function(config){
		var module = config.common.get_filename(__filename),
			methods = ['get', 'post'];

		config.loader.load_methods.apply(e, [module, methods, config]);

		return e;
	}
};

module.exports = e;
