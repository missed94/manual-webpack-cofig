import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";
import path from "path";

interface EnvVars {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
}

export default (env: EnvVars) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
  }

  return buildWebpack({
    port: env.port ?? 3000,
    paths,
    mode: env.mode,
    analyzer: env.analyzer ?? false,
  });
}
