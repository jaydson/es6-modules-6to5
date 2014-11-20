module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	var modules = grunt.option('modules') || 'common';

	grunt.initConfig({
		clean: ['dist'],
		'6to5': {
			options: {
				modules: modules
			},

			main: {
				files: [{
					src: ['./src/app.js'],
					dest: 'dist/sample/' + modules + '/app.js',
				}]
			},

			modules: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['modules/**/*.js'],
					dest: 'dist/sample/' + modules,
				}]
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: './src',
				src: ['sample/**'],
				dest: 'dist'
			}
		}
	});

	grunt.registerTask('default', ['copy', '6to5']);
}