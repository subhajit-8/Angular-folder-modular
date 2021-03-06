import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : '',
    // component : LoginComponent,
    loadChildren:() => import('../pre-auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    loadChildren : () => import('../pre-auth/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreAuthRoutingModule { }
