import type { VercelAdapterOptions } from '@greenwood/plugin-adapter-vercel';
import type { Config } from '@greenwood/cli';
import { greenwoodPluginAdapterVercel } from '@greenwood/plugin-adapter-vercel';
import { greenwoodPluginCssModules } from '@greenwood/plugin-css-modules';
import { greenwoodPluginImportRaw } from '@greenwood/plugin-import-raw';
import { customExternalSourcePlugin } from "./external-content-source-plugin.ts";

const port: number = 8181;
const options: VercelAdapterOptions = {
  runtime: "nodejs18.x"
};

const config: Config = {
  devServer: {
    port
  },
  port,
  prerender: true,
  plugins: [
    greenwoodPluginAdapterVercel(options),
    greenwoodPluginCssModules(),
    greenwoodPluginImportRaw(),
    customExternalSourcePlugin()
  ]
}

export default config;