import type { SourcePlugin, SourcePage } from '@greenwood/cli';

export const customExternalSourcePlugin = (): SourcePlugin => {
  return {
    type: "source",
    name: "source-plugin-external-page",
    provider: (): () => Promise<SourcePage[]> => {
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