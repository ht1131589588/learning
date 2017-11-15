const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        index: './src/index.js'
        // another: './src/another-module.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new CleanWebpackPlugin(['dist'],{
            root:resolve('')
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common' //指定公共bundle的名称
        // })
    ]
}