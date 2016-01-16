exports.task = {
    concat_css: {
		options: {
			// Task-specific options go here.
		},
		files: {
		  '../bundle.css': ['../src/bootstrap.css', '../src/theme_compiled.css']
		}
	}
};
