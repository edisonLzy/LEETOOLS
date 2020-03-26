const merge = require('webpack-merge');
const path = require('path');
const baseConfig  = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
   mode:'development',
   devtool: 'cheap-module-inline-source-map',
   devServer:{
    contentBase: 'dist', // 指定一个本地服务器路径，否则会默认为根目录
    hot: true,
    open:true,
},
plugins:[
]
}
module.exports = merge(baseConfig,devConfig);
