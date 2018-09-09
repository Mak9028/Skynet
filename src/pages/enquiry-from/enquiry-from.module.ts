import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryFromPage } from './enquiry-from';

@NgModule({
  declarations: [
    EnquiryFromPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryFromPage),
  ],
})
export class EnquiryFromPageModule {}
