import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyotaComponent } from '../app/toyota/toyota.component';
import { DodgeComponent } from './dodge/dodge.component';
import { FerrariComponent } from './ferrari/ferrari.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HondaComponent } from './honda/honda.component';
import { LoginComponent } from './login/login.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { PorscheComponent } from './porsche/porsche.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path:'toyota',
    component: ToyotaComponent
  },
  {
    path:'porsche',
    component: PorscheComponent
  },
  {
    path:'mercedes',
    component: MercedesComponent
  },
  {
    path:'honda',
    component: HondaComponent
  },
  {
    path:'ferrari',
    component: FerrariComponent
  },
  {
    path:'dodge',
    component: DodgeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
