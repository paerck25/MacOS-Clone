const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    },

    devServer: {
        publicPath: '/dist'
    }
}