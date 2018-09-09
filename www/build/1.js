webpackJsonp([1],{

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab4__ = __webpack_require__(936);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */]),
            ],
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());

//# sourceMappingURL=tab4.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab4Page = /** @class */ (function () {
    function Tab4Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    Tab4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab4Page');
    };
    Tab4Page.prototype.presentAlert_pay = function () {
        var alert = this.alertCtrl.create({
            title: 'Renew GBPS Networks Account',
            subTitle: "A subscriber can renew GBPS Networks account by clicking on the renew now\n      button on the home screen. Payment can be done through credit/debit card, net\n      banking or can put in a payment pickup request to the collection team for making\n      a cash or cheque payment.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_upgrade = function () {
        var alert = this.alertCtrl.create({
            title: 'Upgrade Existing Broadband Account',
            message: "A subscriber can upgrade his / her existing broadband package by clicking on the\n      Upgrade Package button on the home screen. Following options are available:\n      <br /><br />\n      <b style=\"font-size: 18px;\">Next renewal :</b> Subscriber package will be scheduled\n      for upgrade when his current plan expires. <br />\n      <b style=\"font-size: 18px;\">Immediate : </b> Subscriber package will be\n      upgraded to the chosen plan with immediate effect and no adjustment in the amount.<br />\n      <br />\n      <b style=\"font-size: 18px;\">Conversion :</b> Subscriber package will be upgraded\n      to the chosen plan with immediate effect and with adjustment in the amount previously\n      paid on a pro-rata basis.<br />\n      <br />",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_pp = function () {
        var alert = this.alertCtrl.create({
            title: 'Request Payment Pickup',
            message: " Subscriber can put in a payment pickup request with the company. A date and time\n      can be selected through the option and the same is captured and conveyed to the\n      collection team for further action.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_self = function () {
        var alert = this.alertCtrl.create({
            title: 'Self Resolution',
            message: "Now resolve your internet package issues on the Go! Self resolution helps you to \n      identify your problem and resolve it too. You can now resolve your incorrect password , log off  and \n     mac id issues here. You can also launch a complaint from here in case your are unable to resolve the \n     issue on your own.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_ser_req = function () {
        var alert = this.alertCtrl.create({
            title: 'Register a Complaint',
            message: "Subscriber can launch a complaint through the app.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_ren_his = function () {
        var alert = this.alertCtrl.create({
            title: 'Renewal History',
            message: "This allows a user to view his previous payment details like plan details, amount paid, mode of payment and date on which the payment was done.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_alerts = function () {
        var alert = this.alertCtrl.create({
            title: 'Get Notifications',
            message: "A subscriber can renew GBPS Networks account by clicking on the renew now\n      button on the home screen. Payment can be done through credit/debit card, net\n      banking or can put in a payment pickup request to the collection team for making\n      a cash or cheque payment.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_data = function () {
        var alert = this.alertCtrl.create({
            title: 'Check Your Data Usage',
            message: "View your used and unused data details.",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page.prototype.presentAlert_faq = function () {
        var alert = this.alertCtrl.create({
            title: 'FAQS',
            message: "<ion-content overflow-scroll=\"true\">\n       <b style=\"font-size: 18px; overflow-y: auto !important;\">How can I renew my broadband account from this app?</b><br />\n      You can renew your account by clicking on Renew Now button on the home screen. The\n      payment can be made by either debit/credit card or netbanking.<br />\n      <br />\n      <b style=\"font-size: 18px;\">Can I view my payment history?</b><br />\n      Yes you can view your payment history by clicking on the Renewal History button\n      on the home screen. A list of previous payments will be available. Further if you\n      click on one of the listing, it will display renewal details with plan, mode of\n      payment and renewal date.<br />\n      The payment details would be available to you on your Mypage login as well. Receipts\n      can be viewed and printed from the Payment History button on Mypage.<br />\n      <br />\n      <b style=\"font-size: 18px;\">How can I view my receipt for the account renewal payment\n          made through the app?</b><br />\n      On making an online payment the subscriber will receive notification of the payment\n      transaction alongwith the receipt number. To view and print the receipt, subscriber\n      can access myaccount.gbps.net.in and use the Payment History button.<br />\n      <br />\n      <b style=\"font-size: 18px;\">Can I register a complaint from this app?</b><br />\n      Yes. The subscriber can register a complaint from the Service Request button on\n      the home screen.<br />\n      <br />\n      <b style=\"font-size: 18px;\">What is a Pickup request? How do I make a payment pickup\n          request?</b><br />\n      If a subscriber wishes to pay his renewal amount by cash or cheque and cannot personally\n      visit an outlet to make the payment, subscriber can put in a payment pickup request from\n      the app mentioning the date and time to collect the payment.\n      <br />\n      A pickup request can be put in by clicking on the Renew Now button on the home screen\n      followed by the Pickup Request button on the following screen.<br />\n      <br />\n      <b style=\"font-size: 18px;\">Do I need an internet plan to use the app?</b><br />\n      Yes you will need an internet plan on your mobile to use this app.<br />\n      <br />\n      <b style=\"font-size: 18px;\">Which Android devices would this app work on?</b><br />\n      You need an Android handset with OS 2.3 or later to use this app.<br />\n      <br />\n<b style=\"font-size: 18px;\">What is Renewal History?</b><br />\n      Renewal History allows a user to view his previous payment details like plan details, amount paid, mode of payment and date on which the payment was done.<br />\n<br />\n      <b style=\"font-size: 18px;\">Is the payment gateway secure?</b><br />\n      Yes the payment gateway is completely secure. The app has been integrated with Secured Payment Gateway and these organisations use  the highest standards for security of online transactions.<br />\n<br />        \n</ion-content> ",
            buttons: ['OK']
        });
        alert.present();
    };
    Tab4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab4',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab4\tab4.html"*/'<!--\n  Generated template for the Tab4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color = "primary">\n        <ion-buttons>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n        <ion-title></ion-title>\n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_pay.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_pay()" style="font-size-adjust: unset">Renew GBPS Network Account</p>\n  </ion-item>\n\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_upgrade.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_upgrade()" style="font-size-adjust: unset">Upgrade Exiting Brodnand Account</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_pp.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_pp()" style="font-size-adjust: unset">Request Payment Pickup</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_ser_req.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_ser_req()" style="font-size-adjust: unset">Register a Complaint</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_self.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_self()" style="font-size-adjust: unset">Self Resolution</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_ren_his.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_ren_his()" style="font-size-adjust: unset">Renewal History</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_data.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_data()" style="font-size-adjust: unset">Check Your Data Usage</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/alerts_help.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_alerts()">Get Notifications</p>\n  </ion-item>\n\n  <ion-item >\n    <ion-avatar item-start>\n      <img src="/img/help_faq.png">\n    </ion-avatar>\n    <p (click)= "presentAlert_faq()" style="font-size-adjust: unset">FAQs</p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab4\tab4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Tab4Page);
    return Tab4Page;
}());

//# sourceMappingURL=tab4.js.map

/***/ })

});
//# sourceMappingURL=1.js.map