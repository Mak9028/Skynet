import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupRequestPage } from './pickup-request';

@NgModule({
  declarations: [
    PickupRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PickupRequestPage),
  ],
})
export class PickupRequestPageModule {}
