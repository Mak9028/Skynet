import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { EnquiryFromPage } from '../enquiry-from/enquiry-from';




//import { LoggerService } from '../../services/log4ts/logger.service';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: FormGroup;
//private logger: LoggerService

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private formBuilder: FormBuilder, public loadingCtrl: LoadingController
               ) {

                this.credentialsForm = this.formBuilder.group({
                  email: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }
            

  ionViewDidLoad() {
  }


  

  doLogin(){
    this.loader();
    //this.navCtrl.setRoot(MenuPage);
  }

  goEnuiry(){
    this.navCtrl.push(EnquiryFromPage);
  }

  loader(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
      
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(MenuPage);
    }, 1000);

    
    
  }

}
