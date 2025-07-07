import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';

const mode = 'development';

export default merge(common(mode), {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: { port: 9001, hot: true },
});
