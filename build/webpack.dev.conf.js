var path = require('path')
var webpack = require('webpack')

var FriendlyErrors = require('friendly-errors-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackConfig = {
	entry: {
		example: ['./example'],
	},

	output: {
		path: './dist',
		publicPath: '/dist/',
		filename: "[name].js",
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'vue-simple-upload.js'
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
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new FriendlyErrors(),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index.html',
			inject: true
		})

	],
	devtool: '#eval-source-map'
}

module.exports = webpackConfig
