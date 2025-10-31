import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/main.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    module: true,
    library: {
      type: 'module'
    },
    environment: {
      module: true,
      dynamicImport: true
    },
    clean: true // 清理dist目录，避免旧文件干扰
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false, // 保持ES模块结构，支持tree shaking
                  targets: {
                    node: 'current'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  mode: 'production', // production模式会自动启用tree shaking
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    usedExports: true, // 标记未使用的导出，用于tree shaking
    minimize: true, // 压缩代码，移除未使用的部分
    sideEffects: false // 假设所有模块都没有副作用，除非在package.json中明确指定
  }
};