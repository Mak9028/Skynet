import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsdetailsPage } from './paymentsdetails';

@NgModule({
  declarations: [
    PaymentsdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsdetailsPage),
  ],
})
export class PaymentsdetailsPageModule {}
