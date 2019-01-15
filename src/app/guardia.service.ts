import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuardiaService implements CanActivate {

  constructor(private storage: Storage, private navCtrl: NavController) { }

  canActivate(): Promise<boolean> {
    return new Promise(
      res => {
        this.storage.get('user').then(resp => {
          console.log(resp);
          if (resp != null) {
            res(true);
          } else {
            this.navCtrl.navigateForward('/login');
            res(false);
          }
        }, err => {
          this.navCtrl.navigateForward('/login');
          res(false);
        });
      }
    );
  }
}
