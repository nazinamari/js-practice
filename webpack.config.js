const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],  
    }, 
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    devServer: {
        port: 4444,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true,
            },
    },
    },
}; 