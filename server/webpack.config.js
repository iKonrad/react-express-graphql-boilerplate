const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  entry: ['webpack/hot/poll?1000', './index.js'],
  watch: true,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['env', { modules: false }], 'stage-0'],
              plugins: ['transform-regenerator', 'transform-runtime'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { BUILD_TARGET: JSON.stringify('server') },
    }),
  ],
  output: { path: path.join(__dirname, 'build'), filename: 'server.js' },
  resolve: {
    extensions: ['.js'],
    alias: {
      config: path.resolve(__dirname, 'src/config'),
      database: path.resolve(__dirname, 'src/database'),
      libs: path.resolve(__dirname, 'src/libs'),
    },
  },
};
