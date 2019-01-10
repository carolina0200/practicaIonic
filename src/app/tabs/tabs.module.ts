import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { PerfilPageModule } from '../perfil/perfil.module';
import { SegundaPageModule } from '../segunda/segunda.module';
import { TabsRoutingModule } from './tabs-routing.module';
import { HomePageModule } from '../home/home.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRoutingModule,
    PerfilPageModule,
    SegundaPageModule,
    HomePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
