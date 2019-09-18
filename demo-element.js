import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js';
import '../icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --icon-toggle-color: lightgrey;
          --icon-toggle-outline-color: black;
          --icon-toggle-pressed-color: yellow;
        }
      </style>


      <center>
      <h3>Simple rating bar Web component</h3>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <!-- <icon-toggle toggle-icon="add"></icon-toggle> -->

      <icon-toggle thing-count=5></icon-toggle>
      </center>


      <!-- Other icons -->
      <!-- <icon-toggle toggle-icon="star" pressed></icon-toggle>
      <icon-toggle toggle-icon="add" pressed></icon-toggle>
      <icon-toggle toggle-icon="menu" ></icon-toggle>
      <icon-toggle toggle-icon="settings" pressed></icon-toggle> -->

      <!-- <h3>Data-bound icon-toggle</h3> -->

      <!-- use a computed binding to generate the message -->
      <!-- <div><span>[[_message(isFav)]]</span></div> -->

      <!-- curly brackets ({{}}} allow two-way binding -->
      <!-- <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle> -->
    `;
  }
  _message(fav) {
    if (fav) {
      console.log("Favourite: "+ fav )
      return 'You really like me!';
    }
    else {
      console.log("Favourite: "+ fav)
      return 'Do you like me?';
    }
  }
}
customElements.define('demo-element', DemoElement);
