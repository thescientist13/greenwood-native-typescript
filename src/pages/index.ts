import '../components/logo/logo.ts';

const html: string = `
<body>
  <main>
    <h1>Welcome to Greenwood!</h1>

    <x-logo></x-logo>

    <h1>Edit <code>src/pages/index.html</code> to start making changes</h1>

    <div class="card-wrapper">
      <div class="card">
        <h2>Getting Started</h2>
        <p>
          Follow our <a href="https://www.greenwoodjs.dev/guides/getting-started/">guide</a> on
          learning Greenwood for the first time.
        </p>
      </div>

      <div class="card">
        <h2>Docs</h2>
        <p>
          Learn about Greenwood's
          <a href="https://www.greenwoodjs.dev/docs/">features and capabilities</a>.
        </p>
      </div>

      <div class="card">
        <h2>Guides</h2>
        <p>
          Walkthroughs on ways to
          <a href="https://www.greenwoodjs.dev/guides/">build and deploy</a> with Greenwood.
        </p>
      </div>

      <div class="card">
        <h2>Community</h2>
        <p>
          Come join us on <a href="https://github.com/ProjectEvergreen/greenwood">GitHub</a> and
          <a href="https://www.greenwoodjs.dev/discord/">Discord</a> to get involved.
        </p>
      </div>
    </div>
  </main>
</body>
`;

export default class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}