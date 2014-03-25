/**
 * Common functions for versions 3+
 */

var e = {
	get_arguments: function(arguments){
		var args = [];

		for(var a in arguments){
			args.push(arguments[a]);
		}

		return args;
	},

	get_filename: function(path){
		return path.split(/(\/|\\)/g).pop().split('.').shift();
	}
};

module.exports = e;
