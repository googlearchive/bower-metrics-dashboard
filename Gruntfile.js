module.exports = function(grunt) {

  grunt.initConfig({

    // pkg: grunt.file.readJSON('package.json'),

    vulcanize: {
      options: {
        // excludes: {
        //   imports: [
        //     "polymer.html$"
        //   ]
        // },
        strip: true,
        csp: false,
        inline: true
      },
      build: {
        files: {
          'components/elements.vulcanize.html': 'components/elements.html'
        },
      }
    },

  });

  // Plugin and grunt tasks.
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['vulcanize:build']);
};
