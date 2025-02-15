export const customExternalSourcePlugin = () => {
  return {
    type: "source",
    name: "source-plugin-external-page",
    provider: () => {
      return async function () {
        return [{
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