import { Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
 


/**
 * Generated class for the EnquiryFromPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enquiry-from',
  templateUrl: 'enquiry-from.html',
})
export class EnquiryFromPage {

  private captchaPassed: boolean = false;
  private captchaResponse: string;
  max="maxDate"



  //public date: string = new Date().toISOString();
    
  //public minDate:any = new Date();
  public minDate:any = new Date().getFullYear()+"" +this.getmon()+''+this.getDate();
  public maxDate: any = new Date().getFullYear()+ "-12-12";





  constructor( public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private zone: NgZone) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnquiryFromPage');
    
    console.log(new Date().getFullYear()+"" +this.getmon()+''+this.getDate());
  }


  

  captchaResolved(response: string): void {
 
    this.zone.run(() => {
        this.captchaPassed = true;
        this.captchaResponse = response;
    });

}

sendForm(): void {

    let data = {
        captchaResponse: this.captchaResponse
    };     

    this.http.post('http://localhost:8080/test', data).subscribe(res => {
        console.log(res);
    });

}

goTologin(){
    this.navCtrl.push(LoginPage)
}





}
