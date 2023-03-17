/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sharedConfig = {
  target: 'web',
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  watch: true,
  devtool: 'inline-source-map',
};

const wagtailAceEditorConfig = {
  ...sharedConfig,
  entry: './src/dashboard/widgets/ace-editor.ts',
  output: {
    path: path.resolve(__dirname, 'dashboard/static/dashboard/widgets/js'),
    filename: 'ace-editor.js',
    library: 'WagtailAceEditor',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './dashboard/static/dashboard/widgets/css/ace-editor.css',
    }),
  ],
};

const chartsConfig = {
  ...sharedConfig,
  entry: ['./src/dashboard/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dashboard/static/dashboard/js'),
    filename: 'chart.js',
    publicPath: '/assets/dashboard/js/',
    chunkFilename: 'chart[chunkhash].js',
    libraryTarget: 'umd',
  },
  externals: ['jquery', 'echarts'],
};
chartsConfig.module.rules[0].loader = 'babel-loader';

const diChartsConfig = {
  ...sharedConfig,
  entry: './src/dashboard/library/index.ts',
  output: {
    path: path.resolve(__dirname, 'dashboard/static/dashboard/js'),
    filename: 'dicharts.js',
    library: 'DICharts',
  },
  externals: ['echarts'],
};

const pivotTableConfig = {
  ...sharedConfig,
  entry: './src/dashboard/widgets/pivot-table.ts',
  output: {
    path: path.resolve(__dirname, 'dashboard/static/dashboard/widgets/js'),
    filename: 'pivot-table.js',
    publicPath: '/assets/dashboard/widgets/js/',
    chunkFilename: 'table[chunkhash].js',
    libraryTarget: 'umd',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './dashboard/static/dashboard/widgets/css/ace-editor.css',
    }),
  ],
};

const appConfig = {
  ...sharedConfig,
  entry: {
    state: './src/state/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'src/assets/'),
    filename: '[name]/js/bundle.js',
    publicPath: '/assets/',
    chunkFilename: (pathData) => {
      const { runtime: name } = pathData.chunk;

      return `${name}/js/${name}[chunkhash].bundle.js`;
    },
  },
};

module.exports = [appConfig, wagtailAceEditorConfig, pivotTableConfig, diChartsConfig, chartsConfig];
