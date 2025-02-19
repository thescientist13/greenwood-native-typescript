# greenwood-native-typescript

A demonstration repo for using Greenwood with native TypeScript support

## Setup

1. Clone the repo
1. Have NodeJS >= `22.6.0` (or run `nvm use`)
1. Run npm ci

## Commands

- `npm run dev` - start the development server
- `npm run start` - generate a production build and serve it

## TODOs

## Native TS

### Use Cases

> Assumes NodeJS - https://nodejs.org/en/learn/typescript/run-natively

1. [x] greenwood config
1. [x] plugins

----

> Could use amaro I suppose...
> https://www.npmjs.com/package/amaro

1. [x] SSR pages
  - this will "just work" since we emit SSR chunks as URL assets that will get executed at runtime due to - https://github.com/ProjectEvergreen/greenwood/discussions/1204
1. [x] API routes
1. [x] client side / typescript plugin
  - as long as it has `application/javascript` header ?
1. [x] hot reload / live server on _.ts_ content
1. [ ] `WARNING: customElement <x-logo> is not defined.  You may not have imported it.` / _logo.js_ is missing from production builds
  - i think this is would be a known issue, would have to include the dependency manually?
  - but then doing `import '../components/logo/logo.js';` creates an asset check for the home page and breaks?
    ```sh
    Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/owenbuckley/Workspace/github/greenwood-native-typescript/public/components/logo/logo.js' imported from /Users/owenbuckley/Workspace/github/greenwood-native-typescript/public/assets/index-Bx_3rb29.ts
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:932:10)
    at defaultResolve (node:internal/modules/esm/resolve:1056:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:654:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:603:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:586:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:242:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/owenbuckley/Workspace/github/greenwood-native-typescript/public/components/logo/logo.js'x
    ```
1. [ ] prerender

### Open Items / Questions

1. [ ] can we get access to amaro directly?
1. [ ] if using Amaro, can we opt-out at the custom loaders level?
1. [ ] Rollup will break on _.ts._ , API routes, etc (assuming no amaro)
1. [ ] how will `servePage` know, just accept _.ts_ in pages by default? 
1. [ ] Other runtimes, e.g Bun, Deno?