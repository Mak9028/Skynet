import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataUsagePage } from './data-usage';

@NgModule({
  declarations: [
    DataUsagePage,
  ],
  imports: [
    IonicPageModule.forChild(DataUsagePage),
  ],
})
export class DataUsagePageModule {}
