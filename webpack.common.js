// -----------------------------------------------------------------------------
// This configuration file is a common config used in development and production
// You can make changes to this file to suit your development and production need
// Please refer to this webpack documentation for further information
// https://webpack.js.org/concepts/configuration/#simple-configuration
// -----------------------------------------------------------------------------

// --> Please make changes to package version number to suit your needs
const packageConfig = require('./package.json');

const { version } = packageConfig; // <-- please refer to this link: https://semver.org/
// -------------------------------------------------------------------------------------

const path = require('path');
const webpack = require('webpack');
// const workboxPlugin = require('workbox-webpack-plugin');
const foldero = require('foldero');
const fs = require('fs');
const chalk = require('chalk');

const dataPath = path.join(path.resolve(__dirname, 'src'), '_data');

let siteData = {};

siteData = foldero(dataPath, {
    recurse: true,
    whitelist: '(.*/)*.+.(json)$',
    loader: function loadAsString(file) {
        let json = {};
        console.log(
            chalk.yellow.bgBlack(
                '==========================================\n',
            ),
        );
        try {
            console.log(
                chalk.yellow.bgBlack(
                    `==== Compiling JSON Files ( ${file} ) ====\n`,
                ),
            );
            json = JSON.parse(fs.readFileSync(file, 'utf8'));
        } catch (e) {
            console.log(`Error Parsing DATA file: ${file}`);
            console.log('==== Details Below ====');
            console.log(e);
        }
        return json;
    },
});

module.exports = {
    entry: {
        bundle: './src/index.js',
        dev: './src/index-dev.js',
        xnamespace: './src/index-global.js',
    },
    output: {
        filename: `js/[name].${version}.js`,
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                enforce: 'pre',
                use: 'webpack-import-glob-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: 'webpack-import-glob-loader',
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'file-loader?name=[name].html',
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'html-loader?interpolate=require!./file.ftl',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                            exports: false,
                            data: {
                                jsonData: siteData,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: path.resolve(__dirname, './src/img'),
                            name: '[path][name].[ext]',
                            useRelativePath: false,
                            outputPath: 'img/',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: path.resolve(__dirname, './src/img'),
                            name: '[path][name].[ext]',
                            useRelativePath: false,
                            outputPath: 'img/',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            useRelativePath: false,
                        },
                    },
                ],
            },
            {
                test: path.resolve(__dirname, './src/script/xnamespace'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'XNamespace',
                    },
                ],
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: 'jQuery',
                    },
                    {
                        loader: 'expose-loader',
                        options: '$',
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules', 'src'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        // new workboxPlugin.GenerateSW({
        //   swDest: 'sw.js',
        //   clientsClaim: true,
        //   skipWaiting: true,
        // }),
    ],
};
