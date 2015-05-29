module.exports=function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:['dist'],
        less:{
            build:{
                src: 'less/bootstrap.less',
                dest: 'dist/<%= pkg.name %>.css'
            }
        },
        cssmin:{
            options:{
                keepSpecialComments: false
            },
            build:{
                src: 'dist/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.registerTask('default',['clean','less','cssmin']);
}