module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
	    shell: {
	        options: {
	            stderr: false
	        },
	        app: {
	            command: '6to5 app.js --modules common --out-file dist/app.js'
	        },
	        modules: {
	        	command: '6to5 modules/ --modules common --out-dir dist/'
	        }
	    }
	});

	grunt.registerTask('default', ['shell']);
}