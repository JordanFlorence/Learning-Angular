import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      this.snackBar.open('current version is' + event.current, action, {
        duration: 2000,
      });
      // displays current hash
      this.snackBar.open('available version is' + event.available, action, {
        duration: 2000,
      }); // displays new available hash
    });
    updates.activated.subscribe(event => {
      this.snackBar.open('old version was' + event.previous, action, {
        duration: 2000,
      });
      this.snackBar.open('new version is' + event.current, action, {
        duration: 2000,
      });
    });
  }
}
