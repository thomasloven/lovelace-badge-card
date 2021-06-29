import { LitElement, html, css } from "lit";
import pjson from "../package.json";

class BadgeCard extends LitElement {
  static get properties() {
    return {
      hass: {},
    };
  }

  setConfig(config) {
    this._config = config;

    this.badges = [];
    this._addBadges();
  }

  updated(changedProperties) {
    if (changedProperties.has("hass")) {
      for (const b of this.badges) b.hass = this.hass;
    }
  }

  firstUpdated() {
    this._addBadges();
  }

  async _addBadges() {
    const cardHelpers = await window.loadCardHelpers();
    await this.updateComplete;
    const root = this.shadowRoot.querySelector("#badges");
    if (!root) return;
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    if (!this._config.entities && !this._config.badges) return;
    for (const b of this._config.entities || this._config.badges) {
      const badge = cardHelpers.createBadgeElement(
        typeof b === "string" ? { entity: b } : b
      );

      if (this.hass) badge.hass = this.hass;

      root.appendChild(badge);
      this.badges.push(badge);
    }
  }

  render() {
    return html` <div id="badges"></div> `;
  }

  static get styles() {
    return css`
      #badges {
        font-size: 85%;
        text-align: center;
      }
    `;
  }
}

if (!customElements.get("badge-card")) {
  customElements.define("badge-card", BadgeCard);
  console.info(
    `%cBADGE-CARD ${pjson.version} IS INSTALLED`,
    "color: green; font-weight: bold",
    ""
  );
}
