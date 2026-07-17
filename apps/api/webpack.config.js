module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    '@nestjs/microservices': 'commonjs @nestjs/microservices',
    '@nestjs/platform-express': 'commonjs @nestjs/platform-express',
    'class-transformer': 'commonjs class-transformer',
    'class-validator': 'commonjs class-validator',
  },
};
