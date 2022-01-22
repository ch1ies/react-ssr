const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/**
 * mini-css-extract-plugin 导出一个plugin和一个loader
 * plugin: 负责生成css文件
 * loader: 负责记录要生成的css文件的内容，同时导出开启css-module后的样式对象
 */
const clientConfig = {
    devtool: "source-map",
    entry: './src/client',
    output: {
        filename: 'js/bundle.[hash:5].js',
        path: path.resolve(__dirname, './public')
    },
    module: {
        rules: [
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader?modules"] },
          { 
              test: /\.(png)|(jpeg)|(gif)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: 'img/[name].[hash:5].[ext]'
                      }
                  }
              ]
          }
        ]
      },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.[hash:5].css'
        })
    ]
}

module.exports = merge(baseConfig, clientConfig)
