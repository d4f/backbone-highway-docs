module.exports = {
  options: {
    nospawn: true
  },
  code: {
    files: [
      '<%= config.src %>/**/*.js'
    ],
    tasks: ['lint:code']
  }
};
