const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "./PageTitle.js",
        library: "Glasswall",
        libraryTarget: "umd",
        publicPath: "/dist/",
        umdNamedDefine: true
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};