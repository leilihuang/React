const path = require('path');
const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'redux',
    'antd',
    'babel-polyfill',
    'mockjs',
    'isomorphic-fetch',
    'jquery'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname,
        })
    ]
}
