module.exports = {
  dev: {
    files: [{
      src: 'src/templates/**/*.dust',
      dest: 'src/build/scripts/views.js'
    }],
    options: {
      runtime: false,
      basePath: 'src',
      useBaseName: true,
      wrapper: 'amd',
      wrapperOptions: {
        packageName: null,
        deps: {
          dust: 'dust.core'
        }
      }
    }
  }
};
