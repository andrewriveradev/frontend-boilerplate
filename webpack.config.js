const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const excludes = [path.join(__dirname, "/node_modules"), path.join(__dirname, "/gulp")];
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;

const getOptimizationConfig = () => {
	return {
		emitOnErrors: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					sourceMap: true,
					ecma: 5,
					parse: {},
					compress: {},
					mangle: true,
					module: false,
					output: null,
					format: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: false,
					safari10: false,
				},
				exclude: excludes,
			}),
		],
	};
};

const getHTMLoptimizationConfig = (isDevelopment) => {
	isDevelopment ? (minify = false) : (minify = true);
	return minify;
};

const getImageOptimizationConfig = () =>
	new ImageMinimizerPlugin({
		test: /\.(jpg|jpeg|png|ico)$/,
		deleteOriginalAssets: false,
		severityError: "warning",
		filename: "[name].webp",
		loader: false,
		minimizerOptions: {
			plugins: [
				["imagemin-webp"],
				["mozjpeg", { quality: 80 }],
				["gifsicle", { interlaced: true, optimizationLevel: 3 }],
				["jpegtran", { progressive: true }],
				["optipng", { optimizationLevel: 5 }],
				[
					"svgo",
					{
						plugins: [
							"imagemin-webp",
							{
								removeViewBox: false,
							},
						],
					},
				],
			],
		},
	});

module.exports = {
	mode: "development",
	entry: {
		app: path.join(__dirname, "src/index.js"),
		analytics: path.join(__dirname, "src/js/analytics.js"),
	},
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].bundle.js",
		publicPath: path.join(__dirname, "build"),
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 9000,
		open: true,
		hot: true,
		overlay: true,
	},
	optimization: getOptimizationConfig(),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: excludes,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|jpeg|png|ico)$/,
				type: "asset/resource",
				use: {
					loader: "file-loader",
					options: {
						outputPath: "img",
						name: "[name].[ext]",
					},
				},
			},
			{
				test: /\.svg$/,
				type: "asset/resource",
				use: "svg-inline-loader",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
		}),
		new HtmlWebpackPlugin({
			title: "Webpack template",
			favicon: "./src/img/favicon.ico",
			meta: {
				charset: "utf-8",
				viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
			},
			template: "src/index.html",
			minify: getHTMLoptimizationConfig(),
			cache: true,
			scriptLoading: "defer",
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProgressPlugin(),
		isProduction ? getImageOptimizationConfig() : false,
	],
};
