import { type RuleSetRule } from "webpack";
import { styleLoader } from "./loaders/styleLoader";

export default function buildLoaders(isDev: boolean): RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  };

  const sassLoader = styleLoader(isDev);

  const typeScriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    sassLoader
  ];
}