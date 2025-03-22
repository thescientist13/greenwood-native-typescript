import type { SourcePlugin, ExternalSourcePage } from '@greenwood/cli';

const body: string = `
<main>
  <h1>My custom external page</h1>
</main>
`;

export const customExternalSourcePlugin = (): SourcePlugin => {
  return {
    type: "source",
    name: "source-plugin-external-page",
    provider: (): () => Promise<ExternalSourcePage[]> => {
      return async function () {
        return [{
          id: "my-external-page",
          title: 'My custom external page',
          body,
          route: '/external/',
          label: 'External',
          data: {}
        }];
      }
    },
  };
};