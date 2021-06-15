// -------------------------------------------------------------------
// This configuration file is for production use
// You can make changes to this file to suit your production need
// Please refer to this webpack documentation for further information
// https://webpack.js.org/guides/production/
// -------------------------------------------------------------------

// --> Please make changes to package version number to suit your needs
const packageConfig = require('./package.json');

const { version } = packageConfig; // <-- please refer to this link: https://semver.org/
// -------------------------------------------------------------------------------------

const merge = require('webpack-merge');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack');
const common = require('./webpack.common.js');
const path = require('path');
// const glob = require('glob');
const autoprefixer = require('autoprefixer');

// const extractCSS = new ExtractTextPlugin(`css/style.${version}.css`);
// const extractCSSPrint = new ExtractTextPlugin(`css/print.${version}.css`);
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    module: {
        rules: [
            // Load all scss files excluding font-awesome&print and extract to style.css
            {
                test: /\.(scss)$/,
                exclude: [
                    path.resolve(__dirname, 'src/style/print/print.scss'),
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
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
            // Load only print.scss and extract to print.css
            {
                test: /\.(scss)$/,
                include: [
                    path.resolve(__dirname, 'src/style/print/print.scss'),
                ],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            filename: `print.${version}.css`,
                        },
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
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: `css/[name].${version}.css`,
            moduleFilename: ({ name }) =>
                `css/${
                    name.replace('/js/', '/css/').indexOf('bundle') > -1
                        ? `style.${version}`
                        : `${name}.${version}`
                }.css`,
        }),
        // new PurifyCSSPlugin({
        //   // Give paths to parse for rules. These should be absolute!
        //   paths: glob.sync(path.join(__dirname, 'dist/*.html')),
        //   minimize: true,
        //   purifyOptions: {
        //     whitelist: ['*fa*'],
        //   },
        // }),
    ],
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    compress: true,
                    output: {
                        comments: false,
                        beautify: false,
                    },
                },
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true,
            }),
            new CompressionPlugin({
                test: /\.(js|css)$/,
            }),
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         print: {
        //             test: /print\.s?css$/,
        //             name: 'print',
        //             chunks: 'initial',
        //             enforce: true,
        //         },
        //     },
        // },
    },
    // disable source map for production
    // devtool: 'source-map',
});
