const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require ('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js' , '.jsx'],
        
    },
    mode: 'production',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    
                ]
            },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
                filename: '[name].css'
         }),
         new WebpackPwaManifest({
            name:'Axie Cards Origin',
            shortname: 'Axie Cards',
            description: 'It is an app when you can find the new axie infinity cards Origin',
            background_color: '#091C38',
            theme_color: '#091C38',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes:[ 96 ,128 ,192 ,256, 384, 512]
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching:[
                {
                    urlPattern:  new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName:'images'
                    }
                },
                {
                    urlPattern:  new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName:'api'
                    }
                }
            ]
        }),
         new CleanWebpackPlugin(),

   ],
   optimization: {
       minimize: true,
       minimizer: [
           new CssMinimizerPlugin(),
           new TerserPlugin(),
       ]
    }
   
}