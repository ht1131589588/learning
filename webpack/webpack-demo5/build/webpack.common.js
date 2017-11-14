const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new CleanWebpackPlugin(['../dist'])
    ]
}