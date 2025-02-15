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

1. [ ] SSR pages / prerender
1. [ ] API routes
1. [ ] client side / typescript plugin
  - as long as it has `application/javascript` header ?

### Open Items / Questions

1. [ ] Rollup will break on _.ts.
1. [ ] _logo.js_ is missing from production build(s)
1. [ ] `WARNING: customElement <x-logo> is not defined.  You may not have imported it.`
1. [ ] how will `servePage` know, just accept _.ts_ in page by default? 
1. [ ] hot reload / live server on _.ts_ content

### Other runtimes

1. [ ] Bun
1. [ ] Deno