const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BabelMinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const webpack = require('webpack')

module.exports = {
	mode: "development",
	entry: {
		app: path.join(__dirname, "src/index.js"),
		analytics: path.join(__dirname, "src/js/analytics.js"),
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].bundle.js",
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|gulp)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|ico)$/,
				use: {
					loader: "file-loader",
					options: {
						outputPath: "img",
						name: "[name].[ext]",
					},
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new HtmlWebpackPlugin({
			title: "Js Training Page",
			favicon: "./src/img/favicon.ico",
			meta: {
				charset: "utf-8",
				viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
			},
			minify: false,
			cache: true,
			scriptLoading: "defer",
		}),
        new BabelMinifyPlugin(),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true
        }),
        new webpack.ProgressPlugin()
	],
};
