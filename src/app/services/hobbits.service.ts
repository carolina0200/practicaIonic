import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbitsService {

  constructor() { }
  data = [
    {name: 'Pintar', value: 20},
    {name: 'Dibujar', value: 10},
    {name: 'Series', value: 30},
    {name: 'Películas', value: 5},
    {name: 'Anime', value: 3}
  ];


  getData() {
    return this.data;
  }
}
