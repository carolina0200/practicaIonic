import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HobbitsService } from '../services/hobbits.service';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {


  settings: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.settings = [
      {name: 'Predial', color: 'pink', icon: 'home'},
      {name: 'Valorización', color: 'blue', icon: 'trending-up'},
      {name: 'Impuesto', color: 'yellow', icon: 'logo-usd'},
      {name: 'IVA', color: 'purple', icon: 'pricetag'}
    ];
  }

}
