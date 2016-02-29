'use strict';

module.exports = {
  dist: {
    // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    options: {
      baseUrl: '<%= config.src %>/<%= config.js %>',
      optimize: 'none',
      out: '<%= config.dist %>/<%= config.js %>/boot.js',
      name: 'boot',
      mainConfigFile: '<%= config.src %>/<%= config.js %>/config.js',
      preserveLicenseComments: false,
      useStrict: true,
      wrap: true,
      findNestedDependencies: true
    }
  }
};
