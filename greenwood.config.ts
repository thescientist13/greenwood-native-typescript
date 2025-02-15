import { customExternalSourcePlugin } from "./external-content-source-plugin.ts";

const port: number = 8181;

export default {
  devServer: {
    port
  },
  port,
  plugins: [
    customExternalSourcePlugin()
  ]
}