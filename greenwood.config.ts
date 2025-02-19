import { customExternalSourcePlugin } from "./external-content-source-plugin.ts";
import { builtInTypeScriptPlugin } from "./built-in-typescript-plugin.ts";

const port: number = 8181;

export default {
  devServer: {
    port
  },
  port,
  prerender: true,
  plugins: [
    builtInTypeScriptPlugin(),
    customExternalSourcePlugin()
  ]
}