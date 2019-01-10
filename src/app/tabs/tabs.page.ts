import { Component, OnInit } from '@angular/core';
import { SegundaPage } from '../segunda/segunda.page';
import { PerfilPage } from '../perfil/perfil.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tab1Root = SegundaPage;
  tab2Root = PerfilPage;
  constructor() { }

  ngOnInit() {
  }

  select(page) {
    console.log('page ' + page + ' selected');
  }

}
