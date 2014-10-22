require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    shell: {
        options: {
            stderr: false
        },
        target: {
            command: 'ls'
        }
    }
});

grunt.registerTask('default', ['shell']);