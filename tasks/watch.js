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
  }
};
