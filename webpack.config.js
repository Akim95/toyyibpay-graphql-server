const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "node": "current",
                  },
                },
              ]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
    ]
  },
  externals: ['utf-8-validate', 'bufferutil'],
}
