import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any; 
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.myIndex = navParams.data.tabIndex || 0;

        this.tab1Root = 'Tab1Page';
        this.tab2Root = 'Tab2Page';
        this.tab3Root = 'Tab3Page';
        this.tab4Root = 'Tab4Page';
        


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
