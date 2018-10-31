const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: './src/index.jsx'
    },
    output: {
        libraryTarget: 'commonjs2'
    }
});