import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SegundaPage } from './segunda.page';
import { BoxComponent } from '../box/box.component';
import { MbscModule } from '@mobiscroll/angular';
const routes: Routes = [
  {
    path: '',
    component: SegundaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    MbscModule,
    FormsModule
  ],
  declarations: [SegundaPage, BoxComponent]
})
export class SegundaPageModule {}
