import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PickupRequestPage } from '../pickup-request/pickup-request';
import { SpecialPage } from '../special/special';
import { UpgradeplansPage } from '../upgradeplans/upgradeplans';
import { BrowserTab } from '@ionic-native/browser-tab';


/**
 * Generated class for the RenwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renwal',
  templateUrl: 'renwal.html',
})
export class RenwalPage {

  testRadioOpen: boolean;
  testRadioResult

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private browserTab: BrowserTab) {
  }

  onclick(){

    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl('https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/tc.html');
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenwalPage');
  }

  pickuprequest(){
    this.navCtrl.push(PickupRequestPage);
  }

  specialoffer(){
    this.navCtrl.push(SpecialPage);
  }

  upgreadpackage(){
    this.navCtrl.push(UpgradeplansPage);
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Payments Details');

    alert.addInput({
      type: 'checkbox',
      label:  'I Read T&C'  ,
      value: 'blue',
      checked: true
    });

    alert.setMessage(`<table >

    <tr>
      <td>Package:</td>
      <td>GBPSFUP100MBPS2TB6MV_5M</td> 
    </tr>
    <tr>
      <td>Amount(₹):</td>
      <td>9027</td> 
    </tr>
    <tr>
      <td>Validity(Days):</td>
      <td>180</td> 
    </tr>    
  </table>
  
<p>I have read and accepted the Terms and Conditions. 
We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, 
on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</p>
<p>I have read and accepted the Privacy Policy, Cancellation and Refund Policy</p>  `);

    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


  

}
