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
    'isomorphic-fetch'
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
    resolve:{
        //modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json']
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
