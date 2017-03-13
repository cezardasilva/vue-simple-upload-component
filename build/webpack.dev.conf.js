var path = require('path')
var webpack = require('webpack')

var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')


var webpackConfig = merge(baseWebpackConfig, {
	entry: {
		app: './src/demo.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': "'development'"
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: './demo/index.html',
			template: './demo/index.html',
			inject: true
		}),
		new FriendlyErrors()
	]
})

module.exports = webpackConfig
