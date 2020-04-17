const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname,'../src'))
module.exports = {
   entry:{
    main:'./index.ts'
   },
   resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias:{
        '@':path.resolve(__dirname,'../src')
     }
   },
   externals:{ },
   module:{
       rules:[
        {
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node_modules/
        }
       ]
   },
   plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html')
    })
   ]
}
