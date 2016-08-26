var path = require('path'),
    webpack = require('webpack');


var config = {
    cache:true,
    devtool: 'eval',  //or cheap-module-eval-source-map
    entry: {
        // index:['webpack/hot/dev-server', path.resolve(__dirname, 'Learn/examples/main.jsx')]  增删改查DEMO
        index:['webpack/hot/dev-server', path.resolve(__dirname, 'Poss/main')]
    },
    // entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'Learn/examples/main.jsx')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings : false
            }
        }),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendor-manifest.json')
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets: ['react', 'es2015'],
                plugins: ["transform-class-properties"],
                cacheDirectory: true
            },
            include:__dirname
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url?limit=25000'
        }],
        plugins:['antd',{
            style:'css'
        }]
    }
};

module.exports = config;
