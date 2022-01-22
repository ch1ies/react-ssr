const path = require('path')
const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const serverConfig = {
    devtool: "none",  // webpack5 不支持devtool: "none" 的写法好像
    entry: './src/server',
    target: 'node',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, "./dist")
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            { 
            test: /\.css$/, 
            use: [
                "isomorphic-style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
             ] 
            },
            { 
                test: /\.(png)|(jpeg)|(gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:5].[ext]',
                            emitFile: false
                        }
                    }
                ]
            }
        ]
      }
}

module.exports = merge(baseConfig, serverConfig)
