import styles from "./header.module.css";
import nav from './nav.json' with { type: "json" };

export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="${styles.container}">
        <ul class="${styles.navBarMenu}">
          ${nav.map((item) => {
            const { title, link } = item;
            return `
              <li class="${styles.navBarMenuItem}">
                <a href="${link}" title="${title}">${title}</a>
              </li>
            `
          }).join('')}
        </ul>
      </header>
    `;
  }
}

customElements.define("app-header", Header);