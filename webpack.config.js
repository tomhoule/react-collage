var webpack = require("webpack");

module.exports = {
    entry: {
        bundle: "./src",
        example: "./src/example",
        tests: "./src/tests/",
    },
    output: {
        path: "./dist/",
        publicPath: "/assets/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/,
              exclude: "/node_modules/",
              loader: "babel?presets[]=es2015!ts" },
            { test: /\.scss?$/,
              loader: "style!css!sass" },
        ]
    },
    devServer: {
        contentBase: "./html/",
    },
}
