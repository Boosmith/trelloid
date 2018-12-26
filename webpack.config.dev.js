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
	],
	module: {
		rules: [
			{test: /\.js$/,
				include: path.join(__dirname, 'src'),
				use: ['babel-loader', 'eslint-loader']
			},
			{test: /(\.css)$/, use: ['style-loader', 'css-loader']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
		]
	}
};

