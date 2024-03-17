module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'dist/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js',
      },
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat'],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s)
  grunt.registerTask('default', ['watch']);
};