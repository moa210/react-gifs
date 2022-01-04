const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/preset-react']
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
