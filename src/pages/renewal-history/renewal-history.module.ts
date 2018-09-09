import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RenewalHistoryPage } from './renewal-history';

@NgModule({
  declarations: [
    RenewalHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RenewalHistoryPage),
  ],
})
export class RenewalHistoryPageModule {}
