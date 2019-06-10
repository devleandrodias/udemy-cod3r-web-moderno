const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', //modo de desenvolvimento
    entry: './src/principal.js', //Arquivo de entrada
    output: { //Arquivo de saida
        filename: 'principal.js', // Nome do arquivo
        path: __dirname + '/public' //Diretório
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({

            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: { //Diferentes loaders para carregar diferentes tipos de arquivos
        rules: [{
            test: /\.s?[ac]ss$/, //pegar aquivos tanto CSS ou SCSS ou SASS
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', //adiciona css a dom injetando a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}