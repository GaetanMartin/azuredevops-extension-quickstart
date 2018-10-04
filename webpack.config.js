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
        libraryTarget: "amd",
        filename: '[name].js',
        publicPath: '/dist'
    }, 
    externals: [
        /^VSS\/.*/, /^TFS\/.*/
    ],
    devtool: "source-map",
};