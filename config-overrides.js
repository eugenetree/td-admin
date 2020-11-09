const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    ['@api']: path.resolve(__dirname, 'src/api'),
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@pages']: path.resolve(__dirname, 'src/pages'),
    ['@layouts']: path.resolve(__dirname, 'src/layouts'),
    ['@store']: path.resolve(__dirname, 'src/store'),
    ['@utils']: path.resolve(__dirname, 'src/utils')
  })
)