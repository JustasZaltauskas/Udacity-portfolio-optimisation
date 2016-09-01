module.exports = function(grunt) {
    grunt.initConfig({
        // minify JS
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: '*.js',
                    dest: 'js/minified'
                }, {
                    expand: true,
                    cwd: 'views/js/',
                    src: '*.js',
                    dest: 'views/js/minified'
                }]
            }
        },
        // remove unused css
        uncss: {
            dist: {
                files: [{
                    'views/css/bootstrap-grid.css': ['views/pizza.html']
                }]
            }
        },
        //minify HTML
        htmlmin: {
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: '*.html',
                    dest: 'minified-HTML'
                }, {
                    expand: true,
                    cwd: 'views',
                    src: '*.html',
                    dest: 'views/minified-HTML'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    grunt.registerTask('default', ['uncss', 'grunt-contrib-uglify' , 'htmlmin']);
};