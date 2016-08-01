var path = require('path'),
    node_modules=path.resolve(__dirname,'node_modules'),
    pathReact=path.resolve(node_modules,'react/dist/react.min.js'),
    pathReactDom=path.resolve(node_modules,'react-dom/dist/react-dom.min.js');



var config = {
    debug:true,1
    devtool:'inline-source-map',
    entry: ['webpack/hot/dev-server',path.resolve(__dirname,'demo/menu-route.jsx')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',
            query: {
                presets: ['react', 'es2015'],
                plugins: ["transform-class-properties"]
            }
        },{
            test:/\.less$/,
            loader:'style!css!less'
        },{
            test:/\.(jpg|png)$/,
            loader:'url?limit=25000'
        }],
        noParse:[pathReact,pathReactDom]
    }
};

module.exports = config;