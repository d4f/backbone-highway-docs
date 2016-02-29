module.exports = {
  dev: {
    files: {
      'src/build/scripts/views.js': 'src/templates/**/*.dust'
    },
    options: {
      runtime: false,
      basePath: 'src',
      // useBaseName: true,
      whitespace: true,
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
