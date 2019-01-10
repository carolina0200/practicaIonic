import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SegundaPage } from './segunda.page';
import { BoxComponent } from '../box/box.component';
const routes: Routes = [
  {
    path: '',
    component: SegundaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundaPage, BoxComponent]
})
export class SegundaPageModule {}
