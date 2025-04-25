import type { SourcePlugin, ExternalSourcePage } from '@greenwood/cli';
import { unified } from 'unified';
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import fs from 'fs/promises';

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
      console.log('Running provider function of my source plugin!')

      return async function () {
        const unifiedPageMarkdown = await fs.readFile(new URL('./unified.md', import.meta.url), 'utf-8');
        const unifiedPageHtml = await unified()
          .use(remarkParse)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeStringify)
          .process(unifiedPageMarkdown);

        return [{
          id: "my-external-page",
          title: 'My custom external page',
          body,
          route: '/external/',
          label: 'External',
        }, {
          id: "my-unified-page",
          title: 'My custom unified page',
          body: String(unifiedPageHtml),
          route: '/unified/',
          label: 'Unified',
        }];
      }
    },
  };
};