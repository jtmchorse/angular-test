module.exports = function(grunt) {
 

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({


    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ["web"], 
          livereload: true
        }
      }
    },

    watch: {
      all: {
        files: 'web/*',
        options: {
          livereload: true
        }
      },
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      },
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('I noticed an update made on '.cyan.bold + (new Date()).toString().cyan);
          grunt.log.writeln('I have triggered a reload and will contine to keep calm and keep watch for more changes...'.white.bold);
        },
      }
    },
    compass: {
        dist: {
          options: {
            sassDir: 'web/sass',
            cssDir: 'web/css'
          }
        },
        prod: {
          options: {
            sassDir:'web/sass',
            cssDir:'prod/css',
            outputStyle: 'compressed',
            noLineComments : true
          }
        }
      },
      clean: ["prod"],

      copy: {
        // config : {
        //   src:'web',
        //   dest'prod',
        // },
        //CSS task is handled by sass
        js : {
          expand:true,
          flatten: true,
          src: 'web/js/**.*', 
          dest: 'prod/js/',          
          },
        img : {
          expand:true,
          flatten: true,
          src: 'web/img/**/**.*', 
          dest: 'prod/img/',          
          },
        lib : {
          expand:true,
          flatten: true,
          src: 'web/lib/*/*.min.*', 
          dest: 'prod/lib/',          
          },
        markup : {
          expand:true,
          flatten: true,
          src: 'web/index.html', 
          dest: 'prod/',          
          },   
        partialsYO : {
          expand:true,
          flatten: true,
          src: 'web/partials/*.**', 
          dest: 'prod/partials/',          
          },          
      },

      open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>/index.html'
      }
    }
  });
 
  grunt.registerTask('default', [
    'express',
    'open',
    'compass:dist',
    'watch'
  ]);
    grunt.registerTask('build', [
    'clean',
    'compass:prod',
    'copy'
    //'watch'
  ]);
};