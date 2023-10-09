const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundle.js',
    },
    module: {
    rules: [
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.ts$/, use: 'ts-loader' },
    ],
    }, 
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