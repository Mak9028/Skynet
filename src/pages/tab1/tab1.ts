import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickupRequestPage } from '../pickup-request/pickup-request';
import { RenewalHistoryPage } from '../renewal-history/renewal-history';
import { SpecialPage } from '../special/special';
import { DataUsagePage } from '../data-usage/data-usage';
import { RenwalPage } from '../renwal/renwal';
import { UpgradeplansPage } from '../upgradeplans/upgradeplans';
import { ServiceRequestPage } from '../service-request/service-request';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  paymenthistory(){

    this.navCtrl.push(RenewalHistoryPage);
  }

  pickupreq(){
    this.navCtrl.push(PickupRequestPage);
  }

  specialoffers(){
    this.navCtrl.push(SpecialPage);
  }

  datausage(){
    this.navCtrl.push(DataUsagePage);
  }

  renewalpay(){
    this.navCtrl.push(RenwalPage);
  }

  UpgradeplansPage(){
    this.navCtrl.push(UpgradeplansPage);
  }

  ServiceRequestPage(){
    this.navCtrl.push(ServiceRequestPage);
  }



}
