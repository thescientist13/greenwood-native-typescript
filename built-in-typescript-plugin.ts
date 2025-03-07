// https://satanacchio.hashnode.dev/everything-you-need-to-know-about-nodejs-type-stripping#heading-type-stripping
import amaro from "amaro";
import fs from 'node:fs/promises';
import { checkResourceExists } from "@greenwood/cli/src/lib/resource-utils.js";
import type { Compilation, ResourcePlugin, Resource } from "@greenwood/cli";

const defaultCompilerOptions = {
  target: "ES2020",
  module: "preserve",
  moduleResolution: "bundler",
  allowImportingTsExtensions: true,
  erasableSyntaxOnly: true,
  noEmit: true,
  verbatimModuleSyntax: false,
};

async function getCompilerOptions(projectDirectory) {
  const userConfigUrl = new URL("./tsconfig.json", projectDirectory);
  let options = defaultCompilerOptions;

  if (await checkResourceExists(userConfigUrl)) {
    // @ts-expect-error see https://github.com/microsoft/TypeScript/issues/42866
    const userConfig = (await import(userConfigUrl, { with: { type: "json" } })).default;

    options = userConfig.compilerOptions;
  }

  return options;
}


class NativeTsPlugin {
  compilation: Compilation;
  extensions: string[];
  contentType: string;

  constructor(compilation: Compilation) {
    this.compilation = compilation;
    this.extensions = ["ts"];
    this.contentType = "text/javascript";
  }

  async shouldServe(url: URL): Promise<boolean> {
    return url.pathname.endsWith(`.${this.extensions[0]}`);
  }

  async serve(url: URL): Promise<Response> {
    const { useTsc } = this.compilation.config;
    const body = await fs.readFile(url, "utf-8");
    let code = "";

    if (useTsc) {
      console.log('USE TSC!', url);
      const compilerOptions = await getCompilerOptions(this.compilation.context.projectDirectory);
      const tsc = (await import("typescript").then((mod) => mod)).default;

      // @ts-expect-error
      code = tsc.transpileModule(body, { compilerOptions }).outputText;
    } else {
      code = amaro.transformSync(body).code;
    }

    return new Response(code, {
      headers: {
        "Content-Type": this.contentType,
      },
    });
  }
}

export const builtInTypeScriptPlugin = (): ResourcePlugin => {
  return {
    type: "resource",
    name: "native-ts-plugin",
    provider: (compilation): Resource => new NativeTsPlugin(compilation)
  }
}