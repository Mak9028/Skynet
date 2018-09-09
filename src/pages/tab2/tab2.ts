import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }


  showalerts(){
    this.presentAlert();
  } 

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Now You able to Update',
      subTitle: '',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
