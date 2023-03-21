const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        // publicPath: '/',
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                paths: [
                                    path.join(__dirname, './public/images'),
                                ],
                                strictUnits: true,
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    // devServer: {
    //     contentBase: "./build",
    //     historyApiFallback: true
    // },
    // mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}