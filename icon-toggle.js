import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {

  static get template() {
    return html`
    <style>
  :host {
    display: inline-block;
  }
  iron-icon {
    fill: rgba(0,0,0,0);
    stroke: currentcolor;
  }
  :host([pressed]) iron-icon {
    fill: currentcolor;
  }
</style>

      <!-- shadow DOM goes here -->
      <!-- <iron-icon icon="[[toggleIcon]]"></iron-icon><br>-->
      <h1> Web components </h1>
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
      <!-- <iron-icon icon="star"></iron-icon>
      <iron-icon icon="star"></iron-icon>
      <iron-icon icon="star"></iron-icon>
      <iron-icon icon="star"></iron-icon> -->

    `;
  }

  static get properties () {
    return {
      toggleIcon: {
        type: String
      },
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
      this.pressed = !this.pressed;
    }
}

customElements.define('icon-toggle', IconToggle);
