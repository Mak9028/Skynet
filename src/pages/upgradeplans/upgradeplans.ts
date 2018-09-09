import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Platform } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
/**
 * Generated class for the UpgradeplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upgradeplans',
  templateUrl: 'upgradeplans.html',
})
export class UpgradeplansPage {



  pet: string = "puppies";

  Getpacklist: any;

  month: any;

  pack_id :any;

  pack_amt: any;

  pack_days: any;

  count = 0;

  minrang = 0;

  maxrang = 3000;

  public enable = false;

  public disable = false;

  public checked: boolean = true;

  public updatefrom: any;  //defult package from option is selected 


  //twelve_months : any;
  selectedprice:number= 0;





  isAndroid: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,  public restProvider: RestProvider, platform: Platform) {

    this.isAndroid = platform.is('android');
    this.pet = "1 Month";
    this.updatefrom = "Apply_Now_With_Adjustment";

    


    
    //console.log(this.split("GBPS10Mbps12MULTD"));

  }

  //filterobj :FilterPage = new FilterPage(this.navCtrl,this.navParams, this.restProvider);

  split(text: string): string {

    
    //var str = text.toString();
    //console.log(str);
    //return text.split();
    return text.slice(4,6);


  }

  ionViewDidLoad() {
    console.log('IonViewDidLoad UpgradeplansPage');
    this.getpackageList();

    if(this.navParams.get('data')>= 0){
      this.selectedprice = this.navParams.get('data');
    }else{
      this.selectedprice = 0;
    }
    
   // this.selectedprice = this.navParams.get('data');
   console.log(this.selectedprice+" Seleted price");
  }

  seteledcard(Packageid: String) {
    //this.checked = true;

    console.log("its working " + Packageid);

    this.pack_id = Packageid;

    if (this.checked) {
      this.checked = false;
      console.log(this.checked);
    }
    else {
      this.pack_id = null;
      this.checked = true;
      console.log(this.checked + "reched here");
    }

    //this.getStyle();

    // for(var eachpack of this.Getpacklist ){

    //   if(eachpack.PackageId == Packageid && this.checked ){
    //     this.checked = false;
    //     return 0.4;
    //   // console.log("Worker");

    //   }
    //   else{
    //     return "";
    //   }

    // }

  }


      filter(){

        this.navCtrl.push(FilterPage);


      }

  getchecked(){
    if(this.checked){
      return false;
    }
    else{
      return true;
    }
    
  }

  //style="opacity: 0.4"

  getStyle(package_id) {

    //for (var eachpack of this.Getpacklist) {
      if (package_id == this.pack_id ) {
        //console.log(eachpack.PackageId);
        console.log(package_id); 
        console.log("show");
        return 0.4;
        

      }
      else {
        //this.checked = true;
         
        console.log("41" != this.pack_id);
        return "";


      }

  //  }
  }

  getpackageList() {
    this.restProvider.getpackageList()
      .then(data => {
        this.Getpacklist = data;
        console.log(this.Getpacklist);
        //    this.getbymonths('30');
        //    this.getbymonths('90');
        //    this.getbymonths('180');
        //    this.getbymonths('360');
      });

  }

  getbymonths(PackageVald: String) {

    var count = 0;
    for (var i of this.Getpacklist) {
      //console.log(i)
      if (i.PackageValidity == PackageVald) {

        // this.month = i.PackageValidity;
        // this.pack_name= i.PlanName;
        // this.pack_amt= i.PlanAmount;
        // this.pack_days = i.PackageValidity;
        this.month[i] = this.Getpacklist[i];

        count++;

      }

      console.log(this.month);

    }
    console.log(this.month);
    console.log(count);
  }

}
