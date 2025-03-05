import logoSheet from './logo.css' with { type: 'css'};
import logoSvg from './logo.svg?type=raw';

const template = document.createElement("template");

template.innerHTML = `
  <div class="my-logo">
    <span class="spacer"></span>

    <div>
      ${logoSvg}
    </div>
  </div>
`;

class Logo extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const message: string = "Message from logo component";
      console.log({ message });

      this.attachShadow({ mode: "open" });
      this.shadowRoot?.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = [logoSheet];
  }
}

customElements.define("x-logo", Logo);
