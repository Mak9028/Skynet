import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the RenewalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renewal-history',
  templateUrl: 'renewal-history.html',
})
export class RenewalHistoryPage {


  PaymentDate: any;
 // Amount:any;
 // PackageFullName:any;
//  Mode:any;
//  RenewalDate:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenewalHistoryPage');
     this.getpaymenthistory();
  }

  getpaymenthistory() {
    this.restProvider.getpaymenthistory()
    .then(data => {
      this.PaymentDate = data;
    //  this.Amount = data;
    //  this.PackageFullName = data;
   ///   this.Mode = data;
  //    this.RenewalDate = data;
      console.log(this.PaymentDate);
    });
  }

  geteachRenewal(RenID:String) {

    for(var i of this.PaymentDate){
      
      if(i.RenewalID === RenID){
        console.log(i.PackageFullName);
        console.log(i.PaymentDate);
        console.log(i.Mode);
        console.log(i.Amount);
        console.log(i.RenewalDate);

        let alert = this.alertCtrl.create({
          title: 'Payments Detailes',
          message: `<table style="width:100%">
          <tr>
            <td>Plan:</th>
            <td>`+i.PackageFullName+`</th> 
          </tr>
          <tr>
            <td>Pain On:</td>
            <td>`+i.PaymentDate+`</td>
          </tr>
          <tr>
            <td>Mode:</td>
            <td>`+i.Mode+`</td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>`+i.Amount+`</td>
          </tr>
          <tr>
          <td>Renewed on:</td>
          <td>`+i.RenewalDate+`</td>
        </tr>
        </table>`,
          buttons: ['Dismiss']
        });
        alert.present();

      }

      //console.log(i);
    

/*    if(this.PaymentDate.RenewalID == RenID){
      console.log(this.PaymentDate.PackageFullName);
      console.log(this.PaymentDate.PaymentDate);
      console.log(this.PaymentDate.Mode);
      console.log(this.PaymentDate.Amount);
      console.log(this.PaymentDate.RenewalDate);


*/
    }


    console.log(RenID);
    

    // let alert = this.alertCtrl.create({
    //   title: 'Low battery',
    //   subTitle: '10% of battery remaining',
    //   buttons: ['Dismiss']
    // });
    // alert.present();

  }

}

