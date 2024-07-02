import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildMode, BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === BuildMode.DEVELOPMENT;

  const assetsLoader = { // loader для картинок
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const cssLoaderWithModule = { // для работы с css модулями
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
        //вид наименованя css классов для конкретного типа сборки,
        // в первом случае название класса состоит из связки путь до файла(src-components-App-module) + искомый css класс(className)
        // = src-components-fileName-module__className
        // во втором случае генерируется абракадабра
      },
    }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // создает 'style' из JS строк + добавляет в билд
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // переводит CSS в CommonJs
      cssLoaderWithModule,
      // компилит Sass в CSS
      "sass-loader"
    ],
  };

  const tsLoader = { // настройки для TS, так же ts-loader умеет работать с JSX, если бы не использовали TS нужен был бы babel-loader
    test: /\.tsx?$/, //обрабатывает ts и tsx
    use: 'ts-loader', // нахвание лоадера
    exclude: /node_modules/, // то что не обрабатывается
  };

  return [
    assetsLoader,
    scssLoader,
    tsLoader,
  ];
}