import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  view: number[] = [350, 300];
  data: any[] = [];

  ngOnInit() {

    this.data = [
      {name: 'Pintar', value: 20},
      {name: 'Dibujar', value: 10},
      {name: 'Series', value: 30},
      {name: 'Películas', value: 5},
      {name: 'Anime', value: 3}
    ];
  }

}
