var config = require('./webpack.config.js');

config.module.loaders.push(
    { test: /\.jsx?$/, loaders: ['react-hot', 'babel'] }
);

config.devServer = {
    hot:true,
    inline: true
};

module.exports = config;