/// <reference types="firebase" />
declare var firebase: firebase.app.App;

import { Component, h, State } from '@stencil/core';

import { collectionData } from 'rxfire/firestore';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  ref = firebase.firestore().collection('Category');

  @State() cats = [];

  componentWillLoad() {
    collectionData(this.ref, 'id').subscribe(cat => {
        console.log(cat);
        this.cats = cat;
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
        <ion-button href="/profile/angular" expand="block">Angular page</ion-button>
        <ion-button href="/profile/react" expand="block">React page</ion-button>

        {
            this.cats.map((cat: any) => {
                return (
                    <ion-button href="/profile/{cat.name}" expand="block">{cat.name}</ion-button>
                );
            })
        }

      </ion-content>
    ];
  }
}
