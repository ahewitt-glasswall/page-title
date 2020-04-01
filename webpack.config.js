const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./src/page-title.jsx"),
    // entry: path.join(__dirname, "./src/page-title-local.jsx"),
    // devServer: {
    //     contentBase: './dist',
    // },
    module: {
        rules: [{
                test: /\.(css|scss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',                        
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
    ],
    output: {
        path: path.join(__dirname, "./"),
        filename: "index.js",
        library: pkg.name,
        libraryTarget: "umd",
        publicPath: "/",
        umdNamedDefine: true
    },
};