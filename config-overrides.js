const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@layouts']: path.resolve(__dirname, 'src/layouts')
  })
)