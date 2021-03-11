var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                use: 'babel-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 8989
    },
    mode: 'development',
    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}