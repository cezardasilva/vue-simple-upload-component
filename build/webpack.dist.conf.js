var path = require('path')
var webpack = require('webpack')

var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')

var webpackConfig = merge(baseWebpackConfig, {
	entry: {
		app: './src/index.js'
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
		})
	]
})
module.exports = webpackConfig
