import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { PerfilPage } from '../perfil/perfil.page';
import { SegundaPage } from '../segunda/segunda.page';
import { HomePage } from '../home/home.page';
const routes: Routes = [
  {path: 'tabs', component: TabsPage,
    children: [
      {path: 'perfil',
        children: [
          {path: '', component: PerfilPage}
        ]
      },
      {path: 'segunda',
        children: [
          {path: '', component: SegundaPage}
        ]
      },
      {path: 'home',
        children: [
          {path: '', component: HomePage}
        ]
      },
      {path : '', redirectTo: '/tabs/home'}
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
