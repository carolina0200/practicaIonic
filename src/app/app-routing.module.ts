import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardiaService } from './guardia.service';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [GuardiaService] },
  { path: 'segunda', loadChildren: './segunda/segunda.module#SegundaPageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
