const { alias } = require('react-app-rewire-alias')

module.exports = {
  webpack: config => {
    alias({
      // define these based on your needs
      '@components': './src/components',
      '@containers': './src/containers',
      '@pages': './src/pages',
      '@layouts': './src/layouts',
      '@themes': './src/themes',
      '@styles': './src/assets/jss',
      '@images': './src/assets/images',
      '@utils': './src/utils',
    })(config)

    return config
  },
}
