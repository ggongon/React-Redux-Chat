var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './js/index.js',
	output: {
		path: './public',
		filename: 'bundle.js',
		publicPath: '/' },

	//ignore extensions for imported files
	resolve: {
		extensions: ['.scss', '.js', '.jsx']
	},

	devServer: {
	    historyApiFallback: true,
  },
	plugins: [
	  new ExtractTextPlugin('[name].css')
	],
	module: {
		rules: [
			{
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: "css-loader?sourceMap!sass-loader?sourceMap"
					})
      },
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},

        ]

	},

	// for debugging, so you don't have to keep typing webpack when you make a change
	watch: true,
	devtool: 'source-map'


};
