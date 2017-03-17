var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: {
		"vue-simple-upload": './src/index.js'
	},
	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
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
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.ems.js'
		}
	}
}
