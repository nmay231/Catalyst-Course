const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./app.ts'],

	output: {
		path: __dirname,
		filename: 'app.js',
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
		template: path.join(__dirname, 'index.html')
	})],

	module: {
		rules: [{
			test: /.tsx?$/,
			loader: 'ts-loader',
			include: [__dirname], // This was a pain figuring out how to work
			exclude: /node_modules/,
			options: {
				configFile: 'tsconfig.json'
			}
		}]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true,
	},

};