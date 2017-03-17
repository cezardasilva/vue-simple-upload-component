var path = require('path')
var webpack = require('webpack')

var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var webpackConfig = merge(baseWebpackConfig, {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'vue-simple-upload.js',
		library: 'VueUploadFile',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
					}
				}
			}
		]
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
		new ExtractTextPlugin({
		    filename: "[name].[contenthash].css",
		    disable: process.env.NODE_ENV === "development"
		})
	]
})
module.exports = webpackConfig
