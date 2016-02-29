module.exports = {
  dev: {
    files: {
      'src/build/scripts/views.js': 'src/templates/**/*.dust'
    },
    options: {
      runtime: false,
      basePath: 'src',
      whitespace: true,
      wrapper: false
      // useBaseName: true,
      // wrapper: 'amd',
      // wrapperOptions: {
      //   packageName: null,
      //   deps: {
      //     dust: 'dust.core'
      //   }
      // }
    }
  }
};
