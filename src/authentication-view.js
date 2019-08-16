import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import firebase from '@firebase/app';
import'@firebase/auth';

class AuthenticationView extends PolymerElement {
  static get template() {
    return html`
      <paper-button raised>[[buttonText]]</paper-button>

      <div class="content">
      </div>
    `;
  }

  constructor() {
    super();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }

  static get properties() {
    return {
      buttonText: {
        type: String,
        value: "Sign in"
      }
    };
  }

}

window.customElements.define('authentication-view', AuthenticationView);
