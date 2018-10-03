const path = require('path');

module.exports = {
    entry: {
        app: './src/app.ts',
        config: './src/configuration.ts'
    },
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
        filename: '[name].js',
        publicPath: '/dist'
    }, 
    devtool: "source-map",
};