import { type ResolveOptions } from "webpack";

export default function buildResolve(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: ["src", "node_modules"],
    mainFiles: ["index"],
    alias: {}
  };
}