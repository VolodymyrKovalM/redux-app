const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	compress: true,
	// to prevent page from reloading when entering url manually
	historyApiFallback: true,
	hot: true,
	port: 9000,
	stats: 'errors-only',
	clientLogLevel: 'warning',
}).listen(9000, 'localhost', (err, result) => {
	console.log('Listening ... ');

	if (err) {
		return console.log(err);
	}
});
