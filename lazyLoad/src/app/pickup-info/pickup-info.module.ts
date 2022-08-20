import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickupInfoRoutingModule } from './pickup-info-routing.module';
import { PickupInfoComponent } from './pickup-info.component';


@NgModule({
  declarations: [
    PickupInfoComponent
  ],
  imports: [
    CommonModule,
    PickupInfoRoutingModule
  ]
})
export class PickupInfoModule { }
