import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function buildDevServer(): DevServerConfiguration {
  return {
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true
  };
}