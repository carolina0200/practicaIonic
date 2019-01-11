import { Component, OnInit } from '@angular/core';
import { HobbitsService } from '../services/hobbits.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private hobbit: HobbitsService) { }

  content = document.querySelector('ion-content');
  view: number[] = [350, 300];
  data: any[] = [];
  colorScheme: any;
  interval: number;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;

  ngOnInit() {

    this.data = this.hobbit.getData();

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  }

  ionViewDidLoad() {
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
    window.removeEventListener('resize', () => {
      console.log('aja');
    });
  }

  applyDimensions() {
    const width = this.content.offsetWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 300];
  }

}
