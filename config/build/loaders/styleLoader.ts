import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const styleLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.scss/,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]"
          }
        }
      },
      "sass-loader"
    ]
  };
};