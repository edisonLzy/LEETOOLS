const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig  = require('./webpack.base.js');
const merge = require('webpack-merge');
const path = require('path');
const prodConfig = {
    mode:'production',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'library.js',
        library:'leeTools',
        libraryTarget:'umd'
    },
    plugins:[
        new CleanWebpackPlugin({
            root: path.join(__dirname, '../dist')
        }),
    ]
 }
 module.exports = merge(baseConfig,prodConfig);
 