const webpack = require('webpack');

const vendors = [
	'react',
	'react-dom',
	'react-router',
	'react-redux',
	'redux',
	'antd'
];

module.exports = {
	output:{
		path : 'build',
		filename : '[name].js',
		library :'[name]'
	},
	entry : {
		'lib' : vendors
	},
	plugins : [
		new webpack.DllPlugin({
			path: 'manifest.json',
			name: '[name]',
			context:__dirname
		})
	]
}