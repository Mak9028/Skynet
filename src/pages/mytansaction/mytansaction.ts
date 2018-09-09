import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the MytansactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytansaction',
  templateUrl: 'mytansaction.html',
})
export class MytansactionPage {

  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public restProvider: RestProvider, 
    private alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytansactionPage');
  }


  
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }


  
  removeItem(item){
 
    for(var i = 0; i < this.users.length; i++) {
 
      if(this.users[i] == item){
        this.users.splice(i, 1);
      }
 
    }

  }

  geteachRenewal(NotifyId:String) {

    for(var i of this.users){
      
      if(i.NotifyId === NotifyId){
        console.log(i.NotificationMessage);


        let alert = this.alertCtrl.create({
          title: 'Alerts',
          message: i.NotificationMessage,
          buttons: ['Dismiss'],
          
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


    console.log(NotifyId);
    

    // let alert = this.alertCtrl.create({
    //   title: 'Low battery',
    //   subTitle: '10% of battery remaining',
    //   buttons: ['Dismiss']
    // });
    // alert.present();

  }


}
