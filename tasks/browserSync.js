var historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  dev: {
    options: {
      watchTask: true,
      logLevel: 'info',
      logConnections: true,
      server: {
        baseDir: [
          '<%= config.src %>',
          '<%= config.src %>/build'
        ]
      },
      middleware: [require('connect-logger')(), historyApiFallback()]
    },
    bsFiles: {
      src: [
        '<%= config.src %>',
        '<%= config.src %>/build'
      ]
    }
  }
};
