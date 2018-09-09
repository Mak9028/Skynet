import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { Tab1Page } from '../tab1/tab1';

import { AngularFireDatabase } from 'angularfire2/database';
import { FCM } from '../../../node_modules/@ionic-native/fcm';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';


/**
 * Generated class for the PickupRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * pickklist
 */

@IonicPage()
@Component({
  selector: 'page-pickup-request',
  templateUrl: 'pickup-request.html',
})
export class PickupRequestPage {

  constructor(public navCtrl: NavController, private toastCtrl:ToastController, public navParams: NavParams, private http: HttpClient, protected restProvider:RestProvider,
  public loadingCtrl: LoadingController, public fbdb:AngularFireDatabase, public fcm: FCM, 
public localNotification: PhonegapLocalNotification) {
  }

  public minDate:any = new Date().getFullYear()+"" +this.getmon()+''+(this.getDate());
  public maxDate: any = new Date().getFullYear()+ "-12-12";

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupRequestPage');
  
 // console.log(new Date().getFullYear()+"-12-12");
      //console.log(this.date+""+""+this.time);
  }

  date : string;
  time: string;
  message: string;

  api:"";

  postrequestpicker(){
   //this.restProvider.postrequestpicker(this.date,this.time,this.message);
    console.log(this.date, this.time, this.message);  

   // this.navCtrl.setRoot(Tab1Page);
   this.pickuprequest();

   this.fbdb.list("/pickklist/").push(1).set({
    Pickup_Date: this.date,
    Pickup_Time: this.time,
    message : this.message 
  });

  this.localNotification.requestPermission().then(
    (permission) => {
      if (permission === 'granted') {
  
        // Create the notification
        this.localNotification.create('My Title', {
          tag: 'message1',
          body: 'My body',

        });
  
      }
    }
  );


   
   let toast = this.toastCtrl.create({
    message: 'Pickup Request Sent',
    duration: 3000,
    position: 'buttom'
  });
  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }

  pickuprequest() {
    
    let loading = this.loadingCtrl.create({
      spinner: 'show',
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.setRoot(Tab1Page);
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);


  } 






      getmon():String{
        if(new Date().getMonth()+1<10){
          console.log('-'+'0'+new Date().getMonth()+1)
          return '-'+'0'+ (new Date().getMonth()+1);
        }else{
            console.log('-'+new Date().getMonth()+1);
        return '-'+(new Date().getMonth()+1);
        }
    }

    getDate():String{
      if(new Date().getDate()+1<10){
        console.log('-'+'0'+new Date().getDate()+1)
        return '-'+'0'+ (new Date().getDate()+1);
      }else{
          console.log('-'+new Date().getDate()+1);
      return '-'+(new Date().getDate()+1);
      }
  }

}
