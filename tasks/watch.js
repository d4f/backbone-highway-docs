module.exports = {
  options: {
    nospawn: true
  },
  code: {
    files: [
      '<%= config.src %>/**/*.js'
    ],
    tasks: []
  },
  dust: {
    files: [
      '<%= config.src %>/templates/**/*.dust'
    ],
    tasks: ['dust']
  },
  less: {
    files: [
      '<%= config.src %>/styles/**/*.less'
    ],
    tasks: ['less']
  },
  dist: {
    files: ['<%= config.dist/**'],
    tasks: []
  }
};
