var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")


var webpackConfig = {
	entry: {
		"vue-simple-upload": './src/index.js'
	},
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: "[name].js",
		library: "VueUploadFile",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						//'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
						css: ExtractTextPlugin.extract({
							use: 'css-loader',
							fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
						})
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					"eslint-loader"
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false,
				drop_console: true
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new ExtractTextPlugin("vue-simple-upload.css")
	]
}
module.exports = webpackConfig
