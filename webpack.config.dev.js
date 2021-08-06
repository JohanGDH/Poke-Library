const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: "development",
    resolve: {
        extensions: [ '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                inject: true,
                template:'./public/index.html',
                filename: './index.html',
            }
        ),

    ],
    devServer: {
        port: 6969,
        open: true,
    }
}