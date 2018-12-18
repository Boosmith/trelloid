import webpack from 'webpack';
import path from 'path';

export default {
	mode: "development",
	devtool: 'inline-source-map',
	entry: {
		app: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
		// new webpack.NoErrorsPlugin()
	]
};
