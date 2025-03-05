import styles from "./header.module.css";

export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="${styles.container}">
        <ul class="${styles.navBarMenu}">
          <li class="${styles.navBarMenuItem}">
            <a href="/" title="Home">Home</a>
          </li>
          <li class="${styles.navBarMenuItem}">
            <a href="/external/" title="External">External</a>
          </li>
        </ul>
      </header>
    `;
  }
}

customElements.define("app-header", Header);