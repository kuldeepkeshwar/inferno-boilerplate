const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
        path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
