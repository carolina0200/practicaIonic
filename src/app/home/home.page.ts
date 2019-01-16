import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  settings: any;
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {
    this.settings = [
      {name: 'Predial', color: 'pink', icon: 'home', img: '../../assets/predial.png'},
      {name: 'Valorización', color: 'blue', icon: 'trending-up', img: '../../assets/valo.png'},
      {name: 'Impuesto', color: 'yellow', icon: 'logo-usd', img: '../../assets/impuesto.png'},
      {name: 'IVA', color: 'purple', icon: 'pricetag', img: '../../assets/iva.png'}
    ];
  }
}
