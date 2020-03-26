const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry:{
    main:'./src/index.ts'
   },
   resolve: {
    extensions: ['.tsx', '.ts', '.js']
   },
   externals:{
        _:'lodash',
        react:'react'
   },
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
        template: path.resolve(__dirname, '../src/index.html')
    })
   ]
}
