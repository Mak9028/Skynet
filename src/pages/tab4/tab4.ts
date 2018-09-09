import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab4',
  templateUrl: 'tab4.html',
})
export class Tab4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab4Page');
  }

  presentAlert_pay() {
    let alert = this.alertCtrl.create({
      title: 'Renew GBPS Networks Account',
      
      subTitle: `A subscriber can renew GBPS Networks account by clicking on the renew now
      button on the home screen. Payment can be done through credit/debit card, net
      banking or can put in a payment pickup request to the collection team for making
      a cash or cheque payment.`,
      buttons: ['OK']
    });
    alert.present();
  }


  presentAlert_upgrade() {
    let alert = this.alertCtrl.create({
      title: 'Upgrade Existing Broadband Account',
      
      message: `A subscriber can upgrade his / her existing broadband package by clicking on the
      Upgrade Package button on the home screen. Following options are available:
      <br /><br />
      <b style="font-size: 18px;">Next renewal :</b> Subscriber package will be scheduled
      for upgrade when his current plan expires. <br />
      <b style="font-size: 18px;">Immediate : </b> Subscriber package will be
      upgraded to the chosen plan with immediate effect and no adjustment in the amount.<br />
      <br />
      <b style="font-size: 18px;">Conversion :</b> Subscriber package will be upgraded
      to the chosen plan with immediate effect and with adjustment in the amount previously
      paid on a pro-rata basis.<br />
      <br />`,
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert_pp() {
    let alert = this.alertCtrl.create({
      title: 'Request Payment Pickup',
      
      message: ` Subscriber can put in a payment pickup request with the company. A date and time
      can be selected through the option and the same is captured and conveyed to the
      collection team for further action.`,
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert_self() {
    let alert = this.alertCtrl.create({
      title: 'Self Resolution',
      
      message: `Now resolve your internet package issues on the Go! Self resolution helps you to 
      identify your problem and resolve it too. You can now resolve your incorrect password , log off  and 
     mac id issues here. You can also launch a complaint from here in case your are unable to resolve the 
     issue on your own.`,
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert_ser_req() {
    let alert = this.alertCtrl.create({
      title: 'Register a Complaint',
      
      message: `Subscriber can launch a complaint through the app.`,
      buttons: ['OK']
    });
    alert.present();
  }


  presentAlert_ren_his() {
    let alert = this.alertCtrl.create({
      title: 'Renewal History',
      
      message: `This allows a user to view his previous payment details like plan details, amount paid, mode of payment and date on which the payment was done.`,
      buttons: ['OK']
    });
    alert.present();
  }


  presentAlert_alerts() {
    let alert = this.alertCtrl.create({
      title: 'Get Notifications',
      
      message: `A subscriber can renew GBPS Networks account by clicking on the renew now
      button on the home screen. Payment can be done through credit/debit card, net
      banking or can put in a payment pickup request to the collection team for making
      a cash or cheque payment.`,
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert_data() {
    let alert = this.alertCtrl.create({
      title: 'Check Your Data Usage',
      
      message: `View your used and unused data details.`,
      buttons: ['OK']
    });
    alert.present();
  }

  presentAlert_faq() {
    let alert = this.alertCtrl.create({
      title: 'FAQS',
      
      message: `<ion-content overflow-scroll="true">
       <b style="font-size: 18px; overflow-y: auto !important;">How can I renew my broadband account from this app?</b><br />
      You can renew your account by clicking on Renew Now button on the home screen. The
      payment can be made by either debit/credit card or netbanking.<br />
      <br />
      <b style="font-size: 18px;">Can I view my payment history?</b><br />
      Yes you can view your payment history by clicking on the Renewal History button
      on the home screen. A list of previous payments will be available. Further if you
      click on one of the listing, it will display renewal details with plan, mode of
      payment and renewal date.<br />
      The payment details would be available to you on your Mypage login as well. Receipts
      can be viewed and printed from the Payment History button on Mypage.<br />
      <br />
      <b style="font-size: 18px;">How can I view my receipt for the account renewal payment
          made through the app?</b><br />
      On making an online payment the subscriber will receive notification of the payment
      transaction alongwith the receipt number. To view and print the receipt, subscriber
      can access myaccount.gbps.net.in and use the Payment History button.<br />
      <br />
      <b style="font-size: 18px;">Can I register a complaint from this app?</b><br />
      Yes. The subscriber can register a complaint from the Service Request button on
      the home screen.<br />
      <br />
      <b style="font-size: 18px;">What is a Pickup request? How do I make a payment pickup
          request?</b><br />
      If a subscriber wishes to pay his renewal amount by cash or cheque and cannot personally
      visit an outlet to make the payment, subscriber can put in a payment pickup request from
      the app mentioning the date and time to collect the payment.
      <br />
      A pickup request can be put in by clicking on the Renew Now button on the home screen
      followed by the Pickup Request button on the following screen.<br />
      <br />
      <b style="font-size: 18px;">Do I need an internet plan to use the app?</b><br />
      Yes you will need an internet plan on your mobile to use this app.<br />
      <br />
      <b style="font-size: 18px;">Which Android devices would this app work on?</b><br />
      You need an Android handset with OS 2.3 or later to use this app.<br />
      <br />
<b style="font-size: 18px;">What is Renewal History?</b><br />
      Renewal History allows a user to view his previous payment details like plan details, amount paid, mode of payment and date on which the payment was done.<br />
<br />
      <b style="font-size: 18px;">Is the payment gateway secure?</b><br />
      Yes the payment gateway is completely secure. The app has been integrated with Secured Payment Gateway and these organisations use  the highest standards for security of online transactions.<br />
<br />        
</ion-content> `,
      buttons: ['OK']
    });
    alert.present();
  }



}
