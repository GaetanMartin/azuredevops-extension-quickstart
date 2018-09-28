const path = require('path');

module.exports = {
    entry: ['./src/app.ts'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: '/dist/',
        filename: 'dist/bundle.js',
        publicPath: '/'
    }, 
    devtool: "inline-source-map",
};