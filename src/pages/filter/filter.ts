import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UpgradeplansPage } from '../upgradeplans/upgradeplans';


/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  Getpacklist:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.selectedprice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage' );
    
    this.getpackageList()
    

  }

  //json:any

  


  //structure: any = { lower: 33, upper: 60 };
  selectedprice:number= 0;

  getpackageList() {
    this.restProvider.getpackageList()
      .then(data => {
        this.Getpacklist = data;
        
        // this.json = JSON.parse(this.Getpacklist);
        // console.log(this.json);                             //this.min+"min", this.max+"max"
        console.log(this.Getpacklist);
        //    this.getbymonths('30');
        //    this.getbymonths('90');
        //    this.getbymonths('180');
        //    this.getbymonths('360');

        this.getsortprice();
        
      });

      

  }

  // min = this.json.[1].PlanAmount;
  // max = this.json.[1].PlanAmount;  

  minpricepackage:number=0;
  maxpricepackage:number=1;

  getsortprice(){
    //this.getpackageList.PlanAmoun


    for (var i of this.Getpacklist){

       if(this.minpricepackage==0 && this.minpricepackage==0 ){
        this.minpricepackage = Number(i.PlanAmount);
        this.maxpricepackage = Number(i.PlanAmount);
        console.log('min'+this.minpricepackage, 'max'+this.maxpricepackage);
      }

          if(Number(i.PlanAmount) <  this.minpricepackage){
              this.minpricepackage = Number(i.PlanAmount);
          }
          if(Number(i.PlanAmount)> this.maxpricepackage) {
                   this.maxpricepackage = Number(i.PlanAmount);
          }
    }
    console.log(this.minpricepackage+"aaa", this.maxpricepackage+"aaaa", this.selectedprice+"selected");

  }

  rangeChange(range: Range) {
   console.log(this.selectedprice);

  }


  gotoupgreadpaln(){
    this.navCtrl.push(UpgradeplansPage, {data:this.selectedprice});
  }

  



}