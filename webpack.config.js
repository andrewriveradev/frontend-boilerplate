const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BabelMinifyPlugin = require('babel-minify-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, 'src/index.js'),
        analytics: path.join(__dirname, 'src/js/analytics.js')
    },
	output: {
		path: path.join(__dirname, 'build'),
		filename: "[name].bundle.js",
	},
	devtool: "source-map",
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
            /*
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},*/
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
    plugins: [new MiniCssExtractPlugin({ filename: "[name].css" }),
        new HtmlWebpackPlugin({
            title: 'Js Training Page',
            favicon: './src/img/favicon.ico',
            meta: {
                charset: 'UTF-8',
                viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
            },
            minify: true,
            cache: true,
            scriptLoading: 'defer'
        }),
        new BabelMinifyPlugin()],
};
