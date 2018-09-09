import { FormsModule } from '@angular/forms';
//import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { EnquiryFromPage } from '../pages/enquiry-from/enquiry-from';

//import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
///import { NgDatepickerModule } from 'ng2-datepicker';
//import { ReCaptchaModule } from 'angular2-recaptcha';
//
import { RecaptchaModule } from 'ng-recaptcha'
import { SplashPage } from '../pages/splash/splash';


import { RestProvider } from '../providers/rest/rest';
//import { RestProvider } from '../providers/rest/rest';
import { HttpModule } from '@angular/http';

import { AndroidPermissions} from '@ionic-native/android-permissions';
import { PickupRequestPage } from '../pages/pickup-request/pickup-request';
//import { RenewalHistoryPage } from '../pages/renewal-history/renewal-history';
import { DataUsagePage } from '../pages/data-usage/data-usage';
import { SpecialPage } from '../pages/special/special';
import { RenwalPage } from '../pages/renwal/renwal';
import { UpgradeplansPage } from '../pages/upgradeplans/upgradeplans';
import { CallNumber } from '@ionic-native/call-number';
//import { BrowserTab } from '@ionic-native/browser-tab'
import { ServiceRequestPage } from '../pages/service-request/service-request';
import { SelfResolutionPage } from '../pages/self-resolution/self-resolution';

import { AngularFireModule } from 'angularfire2';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FilterPage } from '../pages/filter/filter';
import { BrowserTab } from '../../node_modules/@ionic-native/browser-tab';
import { FCM } from '@ionic-native/fcm';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { RenewalHistoryPage } from '../pages/renewal-history/renewal-history';

  


@NgModule({
  declarations: [
    MyApp,
   LoginPage,
   MenuPage,
   EnquiryFromPage,
   SplashPage,
   PickupRequestPage,
   RenewalHistoryPage,
   DataUsagePage,
   SpecialPage,
   RenwalPage,
   UpgradeplansPage,
   ServiceRequestPage,
   SelfResolutionPage,
   FilterPage
   //CallNumber

  
  ],
  imports: [ 
    FormsModule, 
    BrowserModule,
    HttpClientModule,   
    RecaptchaModule.forRoot(),
   // DatePickerModule,
    HttpModule, 
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   LoginPage,
    MenuPage,
    EnquiryFromPage,
    SplashPage,
    PickupRequestPage,
    RenewalHistoryPage,
    DataUsagePage,
    SpecialPage,
    RenwalPage,
    UpgradeplansPage,
    ServiceRequestPage,
    SelfResolutionPage,
    FilterPage


  ],
  providers: [
    FCM,
    StatusBar,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidPermissions,
    BrowserTab,
    CallNumber,
    FilterPage,
    PhonegapLocalNotification
  ]
})
export class AppModule {}
