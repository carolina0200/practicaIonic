import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor = 'Carolina';

  constructor(private router: Router, private navCtrl: NavController) {}

  pushSegunda() {
    this.router.navigate(['/segunda']);
   // this.router.navigateByUrl('/segunda/${this.valor}');
  }

  pushSegundaNavCtrl() {
    this.navCtrl.navigateForward('/segunda');
  }
}
