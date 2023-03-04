const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = function override(config, env) {
    config.resolve = {
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            net: require.resolve('net'),
            tls: require.resolve('tls'),
            stream: require.resolve('stream-browserify'),
            timers: require.resolve('timers-browserify'),
            fs: false,
        },
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
    };
    config.plugins.push(new NodePolyfillPlugin());
    return config;
};