// -------------------------------------------------------------------
// This configuration file is for development use
// You can make changes to this file to suit your development need
// Please refer to this webpack documentation for further information
// https://webpack.js.org/guides/development/
// -------------------------------------------------------------------

const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader', // provide autoprefixer in compiled CSS
                        options: {
                            plugins: () => [autoprefixer],
                        },
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                    },
                ],
            },
        ],
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['dist'] },
            browser: 'chrome',
        }),
        new CleanWebpackPlugin(['dist']),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
});
