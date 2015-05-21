var webpack = require('webpack');

module.exports = {

    // Set 'context' for Rails Asset Pipeline
    context: __dirname + '/webpack/javascripts',

    entry: {
        App: [
            'webpack-dev-server/client?http://0.0.0.0:8080/javascripts/',
            'webpack/hot/only-dev-server',
            './index.jsx'
        ]
    },

    output: {
        filename: '[name]_wp_bundle.js', // Will output App_wp_bundle.js
        path: __dirname + '/app/assets/javascripts/generated', // Save to Rails Asset Pipeline
        publicPath: 'http://0.0.0.0:8080/javascripts' // Required for webpack-dev-server
    },

    // Require the webpack and react-hot-loader plugins
    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        // Load the react-hot-loader
        loaders: [ { test: /\.jsx?$/, loaders: ['react-hot', 'babel'] } ]
    }

};