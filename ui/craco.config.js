/** @format */
const webpack = require('webpack');
const CracoAlias = require('craco-alias');

const path = require('path');

const resolvePath = dirPath => path.resolve(__dirname, dirPath);

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
    ],
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                stream: require.resolve('stream-browserify'),
                buffer: require.resolve('buffer/'),
                assert: require.resolve('assert/'),
                url: require.resolve('url/'),
                os: require.resolve('os-browserify/browser'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
            };
            webpackConfig.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                })
            );
            return webpackConfig;
        },
    },
};
