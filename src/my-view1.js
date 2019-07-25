/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-card/paper-card.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style">

    .content {
      display: block;
      position: relative;
      max-width: 1000px;
      margin: 5px auto;
    }

    .card-container {
      display: inline-block;
      width: 33.33%;
      color: black;
      text-decoration: none;
    }

    paper-card {
      display: block;
      margin: 5px;
      --paper-card-header-image: {
        height: 200px;
      }
    }

    paper-card {
      display: block;
      margin: 5px;
      --paper-card-header-image: {
        height: 200px;
      }
    }

    paper-card h2 {
      margin: 4px;
      font-weight: normal;
    }

    paper-card p {
      margin: 4px;
      color: #999;
    }

    @media (max-width: 960px) {
      .content {
        max-width: 800px;
      }
      .card-container {
        width: 50%;
      }
    }

    @media (max-width: 719px) {
      .content {
        max-width: 400px;
      }
      .card-container {
        width: 100%;
      }
    }


  </style>
  
  <div class="content">
        <template is="dom-repeat" items="{{articles}}"><!-- No empty text node
        --><a href="#/detail/{{item.id}}" class="card-container">
            <paper-card image="{{item.imageUrl}}">
              <div class="card-content">
                <h2>{{item.name}}</h2>
                <p>By <span>{{item.author}}</span></p>
              </div>
            </paper-card>
          </a><!-- No empty text node
      --></template>
      </div>
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      articles: {
        value() {
          return [
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 1},
            {imageUrl: 'https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg', author: 'Andrew Steinmetz', name: 'Some Article', id: 10},
          ]
        }
      }
    }
  }
}

window.customElements.define('my-view1', MyView1);
