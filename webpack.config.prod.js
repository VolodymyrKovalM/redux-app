const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
	context: SRC_DIR,
	entry: [
		'babel-polyfill',
		'./index.js',
	],
	output: {
		path: DIST_DIR,
		filename: 'js/[name].bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: SRC_DIR,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				include: SRC_DIR,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true } },
					],
				}),
			},
			{
				test: /\.(jpe?g|png)$/i,
				include: SRC_DIR,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]?[hash]',
							outputPath: 'img/',
							limit: 10000,
						},
					},
					{
						loader: 'img-loader',
					},
				],
			},
			{
				test: /\.svg$/i,
				include: SRC_DIR,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true,
							svgo: {
								plugins: [
									{ removeTitle: true },
									{ cleanupIDs: false },
									{ convertPathData: false },
								],
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [SRC_DIR, 'node_modules'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Star Wars',
			template: './index.ejs',
			favicon: './favicon.png',
			inject: true,
			hash: true,
		}),
		new ExtractTextPlugin({
			filename: 'css/styles.min.css',
			allChunks: true,
			disable: false,
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true,
			comments: false,
		}),
		new webpack.LoaderOptionsPlugin({ minimize: true }),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
	devtool: 'eval-source-map',
};
