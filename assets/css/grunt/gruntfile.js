module.exports = function( grunt ) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    watch: {
      files: '../src/scss/*.scss',
      tasks: [ 'sass', 'concat_css', 'cssmin' ]
    },
    sass: require( './custom_modules/sass' ).task,
    concat_css: require( './custom_modules/concat').task,
    cssmin: require( './custom_modules/cssmin' ).task
  });

  grunt.registerTask('default', ['watch', 'sass', 'concat_css', 'cssmin']);
};
