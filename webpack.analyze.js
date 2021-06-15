// -------------------------------------------------------------------
// This configuration file is for bundle analysis use
// You can make changes to this file to suit your bundle analysis need
// Please refer to this webpack documentation for further information
// https://webpack.js.org/guides/code-splitting/
// https://github.com/webpack-contrib/webpack-bundle-analyzer
// -------------------------------------------------------------------

const merge = require('webpack-merge');
const prod = require('./webpack.prod.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(prod, {
    plugins: [new BundleAnalyzerPlugin()],
    mode: 'production',
    devtool: 'source-map',
});
