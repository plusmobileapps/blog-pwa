import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import './shared-styles.js';
import firebase from '@firebase/app';
import'@firebase/auth';

class MyFirebaseApp extends PolymerElement {
  static get template() {
    return html`
      <paper-button raised>[[buttonText]]</paper-button>
    `;
  }

  constructor() {
    super();
    var firebaseConfig = {
      apiKey: "AIzaSyCeJJV5juKgxekhSKNLE5o-iOMPPxoVBBI",
      authDomain: "plusmobileapps-blog.firebaseapp.com",
      databaseURL: "https://plusmobileapps-blog.firebaseio.com",
      projectId: "plusmobileapps-blog",
      storageBucket: "plusmobileapps-blog.appspot.com",
      messagingSenderId: "647008545206",
      appId: "1:647008545206:web:e9eef36540068f6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

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

window.customElements.define('my-firebase-app', MyFirebaseApp);
