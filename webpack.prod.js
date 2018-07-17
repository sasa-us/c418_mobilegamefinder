process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: ['babel-polyfill', './index.js'],
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin([
            'dist'
        ],
        {
            root: resolve(__dirname, 'public'),
            exclude: []
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/[name].css'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/sass_[name].css',
            chunkFilename: 'assets/css/[id].css'
        })
    ]
});
