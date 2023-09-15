import path from "path";
import { type Configuration } from "webpack";
import buildLoaders from "./config/build/buildLoaders";
import buildPlugins from "./config/build/buildPlugins";
import buildResolve from "./config/build/buildResolve";
import buildDevServer from "./config/build/buildDevServer";

export default (env: Record<string, any>): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const config: Configuration = {
    mode,
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js",
      clean: true
    },
    module: {
      rules: buildLoaders(isDev)
    },
    resolve: buildResolve(),
    plugins: buildPlugins(isDev),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer() : undefined
  };

  return config;
};