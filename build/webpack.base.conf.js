var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '../',
		filename: 'vue-super-autocomplete.js'
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
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`
		})
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	devtool: '#eval-source-map'
}
