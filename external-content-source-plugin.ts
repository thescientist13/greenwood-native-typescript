import type { SourcePlugin } from '@greenwood/cli';

export const customExternalSourcePlugin = (): SourcePlugin => {
  return {
    type: "source",
    name: "source-plugin-external-page",
    provider: () => {
      return async function () {
        return [{
          id: "my-external-page",
          title: 'My custom external page',
          body: '<h1>My custom external page</h1>',
          route: '/external/',
          label: 'External',
          data: []
        }];
      }
    },
  };
};