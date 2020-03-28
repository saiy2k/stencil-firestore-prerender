/**
/// <reference types="firebase" />
declare var firebase: firebase.app.App;
*/

import { Component, h, State } from '@stencil/core';

import { collectionData } from 'rxfire/firestore';

/**
*/
//Method 2: via npm module
import firebase from 'firebase/app';
import 'firebase/firestore';
/**
*/

console.log('AppHome File - Load');

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {


  @State() cats = [];

  componentWillLoad() {

    /**
    //Method 1: via Script
    const ref = firebase.firestore().collection('Category');
    collectionData(ref, 'id').subscribe(cat => {
        console.log(cat);
        this.cats = cat;
    });
    */

    //Method 2: via npm module
    const app = firebase.initializeApp({
        apiKey: "AIzaSyBxT5MFxXvfAGDVcWLhYQ3vSBW7dOnKjBs",
        authDomain: "bazon-india.firebaseapp.com",
        databaseURL: "https://bazon-india.firebaseio.com",
        projectId: "bazon-india",
        storageBucket: "bazon-india.appspot.com",
        messagingSenderId: "928019631782",
        appId: "1:928019631782:web:ea7c413839ee346dac6e67"
    });
    const ref = app.firestore().collection('Category');
    collectionData(ref, 'id').subscribe(cat => {
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
