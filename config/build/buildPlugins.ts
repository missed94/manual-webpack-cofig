import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildMode, BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === BuildMode.DEVELOPMENT;
  const isProd = options.mode === BuildMode.PRODUCTION;

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: options.paths.html }), // plugin для сборки html, подставляет нужные скрипты в результате сборки
  ]

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({ // плагин для сборки стилей в отдельный файла
        filename: 'css/[name].[contenthash:8].css', // кофигурация имени файла и в какую папку его складывать
        chunkFilename: 'css/[name].[contenthash:8].css'
      }),
    );
  }

  if (isDev) {
    plugins.push(
      new webpack.ProgressPlugin(), // для того чтоб видеть прогресс сборки - процент
    )
  }

  if(options.analyzer) {
    plugins.push(new BundleAnalyzerPlugin()); // для того чтоб анализировать бандл и его чанки
  }

  return plugins;
}