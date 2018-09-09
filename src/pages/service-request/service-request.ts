import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SelfResolutionPage } from '../self-resolution/self-resolution';
import { CallNumber } from '@ionic-native/call-number';

import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the ServiceRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-request',
  templateUrl: 'service-request.html',
})
export class ServiceRequestPage {

  complaintlist : any;
  selectedvalue: string;
  message:string;

  //mearrdata = [];
  //songs: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public restProvider: RestProvider, private callNumber: CallNumber, public fbdb:AngularFireDatabase) {
    this.selectedvalue = "Select Complaint Type";

    //this.fbdb.list("/ComplaintPOst/").valueChanges();

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceRequestPage');
    this.GetComplaintCategoryList();
  }


  GetComplaintCategoryList(){
    this.restProvider.GetComplaintCategoryList()
    .then(data => {
      this.complaintlist = data;
      console.log(this.complaintlist);
    });
  }

  SelfResolutionPage(){
    this.navCtrl.push(SelfResolutionPage);
  }

  callcustomercare(){
      this.callNumber.callNumber("123456789", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  postcomplaint(){

    this.fbdb.list("/ComplaintPOst/").push(1).set({
      Complaint: this.selectedvalue,
      message: this.message
    });

//    this.fbdb.list("/ComplaintPOst/").push(this.message );

// set({
//   Complaint: this.selectedvalue,
//   message: this.message
// });


    
console.log(this.selectedvalue, this.message);

  }

}
