// configureWebpack: (config) => {
//     // 设置别名
//     config.resolve.alias['img'] = path.resolve(__dirname, '../src/assets/images');
//     config.resolve.alias['styles'] = path.resolve(__dirname, '../src/assets/styles');

//     // 添加 loader
//     config.module.rules.push({
//         // 处理jquery
//         test: require.resolve('jquery'),
//         use: [{
//             loader: 'expose-loader',
//             options: 'jquery'
//         }, {
//             loader: 'expose-loader',
//             options: '$'
//         }, {
//             loader: 'expose-loader',
//             options: 'jQuery'
//         }]
//     })
// }

// const webpack = require('webpack');

// configureWebpack: { //引入jquery
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: "jquery",
//             jQuery: "jquery",
//             "windows.jQuery": "jquery"
//         })
//     ]
// }


module.exports = {
// options…
    publicPath: './',
// outputDirL:‘dist’,
// assetsDir:‘static’,
    indexPath: 'index.html'
}