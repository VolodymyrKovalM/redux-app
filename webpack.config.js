const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
	context: SRC_DIR,
	entry: [
		'babel-polyfill',
		'webpack-dev-server/client?http://0.0.0.0:9000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
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
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
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
						loader: 'file-loader',
						options: {
							name: '[name].[ext]?[hash:5]',
							outputPath: 'img/',
						},
					},
					{
						loader: 'img-loader',
						options: {
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
		new webpack.LoaderOptionsPlugin({ minimize: true }),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	devtool: 'eval-source-map',
};
