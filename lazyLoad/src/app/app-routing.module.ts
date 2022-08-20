
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'pickInfo',
    loadChildren:() => import('./pickup-info/pickup-info.module').then(m => m.PickupInfoModule)
  },
  {
    path:'payMethod',
    loadChildren:() => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {
    path:'thankyou',
    loadChildren:() => import('./thankyou/thankyou.module').then(m => m.ThankyouModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
