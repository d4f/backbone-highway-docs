module.exports = {
  images: {
    expand: true,
    cwd: '<%= config.src %>',
    src: '<%= config.img %>/**',
    dest: '<%= config.dist %>/'
  },
  css: {
    expand: true,
    cwd: '<%= config.src %>/<%= config.build %>',
    src: '<%= config.css %>/**',
    dest: '<%= config.dist %>/'
  },
  views: {
    src: '<%= config.src %>/build/scripts/views.js',
    dest: '<%= config.dist %>/scripts/views.js'
  },
  vendor: {
    expand: true,
    cwd: '<%= config.src %>',
    src: '<%= config.js %>/vendor/**',
    dest: '<%= config.dist %>/'
  },
  requirejs: {
    src: '<%= config.src %>/bower_components/requirejs/require.js',
    dest: '<%= config.dist %>/bower_components/requirejs/require.js'
  },
  dust: {
    src: '<%= config.src %>/bower_components/dustjs-linkedin/dist/dust-core.js',
    dest: '<%= config.dist %>/bower_components/dustjs-linkedin/dist/dust-core.js'
  },
  html: {
    src: '<%= config.src %>/index.html',
    dest: '<%= config.dist %>/index.html'
  },
  favicon: {
    src: '<%= config.src %>/favicon.ico',
    dest: '<%= config.dist %>/favicon.ico'
  },
  annotatedSource: {
    expand: true,
    cwd: '<%= config.src %>',
    src: 'docs/**',
    dest: '<%= config.dist %>/'
  }
};
