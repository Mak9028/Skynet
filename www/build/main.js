webpackJsonp([20],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab1_tab1__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ionic_native_fcm__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_phonegap_local_notification__ = __webpack_require__(473);
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
 * Generated class for the PickupRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * pickklist
 */
var PickupRequestPage = /** @class */ (function () {
    function PickupRequestPage(navCtrl, toastCtrl, navParams, http, restProvider, loadingCtrl, fbdb, fcm, localNotification) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.fbdb = fbdb;
        this.fcm = fcm;
        this.localNotification = localNotification;
        this.minDate = new Date().getFullYear() + "" + this.getmon() + '' + (this.getDate());
        this.maxDate = new Date().getFullYear() + "-12-12";
    }
    PickupRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickupRequestPage');
        // console.log(new Date().getFullYear()+"-12-12");
        //console.log(this.date+""+""+this.time);
    };
    PickupRequestPage.prototype.postrequestpicker = function () {
        var _this = this;
        //this.restProvider.postrequestpicker(this.date,this.time,this.message);
        console.log(this.date, this.time, this.message);
        // this.navCtrl.setRoot(Tab1Page);
        this.pickuprequest();
        this.fbdb.list("/pickklist/").push(1).set({
            Pickup_Date: this.date,
            Pickup_Time: this.time,
            message: this.message
        });
        this.localNotification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                // Create the notification
                _this.localNotification.create('My Title', {
                    tag: 'message1',
                    body: 'My body',
                });
            }
        });
        var toast = this.toastCtrl.create({
            message: 'Pickup Request Sent',
            duration: 3000,
            position: 'buttom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PickupRequestPage.prototype.pickuprequest = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'show',
            content: 'Loading Please Wait...'
        });
        loading.present();
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab1_tab1__["a" /* Tab1Page */]);
        }, 1000);
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    PickupRequestPage.prototype.getmon = function () {
        if (new Date().getMonth() + 1 < 10) {
            console.log('-' + '0' + new Date().getMonth() + 1);
            return '-' + '0' + (new Date().getMonth() + 1);
        }
        else {
            console.log('-' + new Date().getMonth() + 1);
            return '-' + (new Date().getMonth() + 1);
        }
    };
    PickupRequestPage.prototype.getDate = function () {
        if (new Date().getDate() + 1 < 10) {
            console.log('-' + '0' + new Date().getDate() + 1);
            return '-' + '0' + (new Date().getDate() + 1);
        }
        else {
            console.log('-' + new Date().getDate() + 1);
            return '-' + (new Date().getDate() + 1);
        }
    };
    PickupRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pickup-request',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\pickup-request\pickup-request.html"*/'<!--\n  Generated template for the PickupRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PickupRequest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n        <ion-item padding top>\n            <ion-label floating>Choose Date for Pickup</ion-label>\n            \n            <ion-datetime displayFormat="DD-MM-YYYY" min={{minDate}}\n            max={{maxDate}} [(ngModel)] ="date"></ion-datetime>\n            \n          </ion-item>\n\n          <ion-item padding top>\n              <ion-label floating>Choose Time for Pickup </ion-label>\n              \n              <ion-datetime displayFormat="hh :mm a" pickerFormat="hh:mm a"  value="time" [(ngModel)] = "time"  ></ion-datetime>\n              \n            </ion-item>\n\n\n            <ion-item  padding top >\n                <ion-label floating>Enter Your Message</ion-label>\n                <ion-input type="text" [(ngModel)] = "message"></ion-input>\n              </ion-item>\n\n              <button ion-button block (click)="postrequestpicker()" padding top>Submit</button>\n\n \n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\pickup-request\pickup-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__node_modules_ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */]])
    ], PickupRequestPage);
    return PickupRequestPage;
}());

//# sourceMappingURL=pickup-request.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
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
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecialPage = /** @class */ (function () {
    function SpecialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialPage');
    };
    SpecialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-special',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\special\special.html"*/'<!--\n  Generated template for the SpecialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Special</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nthis is Spl Page\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\special\special.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SpecialPage);
    return SpecialPage;
}());

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUsagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
 * Generated class for the DataUsagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DataUsagePage = /** @class */ (function () {
    function DataUsagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DataUsagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DataUsagePage');
        this.chart();
    };
    DataUsagePage.prototype.chart = function () {
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["% remaining", "% used"],
                datasets: [{
                        label: '# of Votes',
                        data: [62, 38],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ],
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], DataUsagePage.prototype, "doughnutCanvas", void 0);
    DataUsagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data-usage',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\data-usage\data-usage.html"*/'<!--\n  Generated template for the DataUsagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DataUsage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-card>\n        <ion-card-header>\n          Doughnut Chart\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #doughnutCanvas  style="width:200px; height:200px"></canvas>\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\data-usage\data-usage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DataUsagePage);
    return DataUsagePage;
}());

//# sourceMappingURL=data-usage.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryFromPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(76);
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
 * Generated class for the EnquiryFromPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquiryFromPage = /** @class */ (function () {
    function EnquiryFromPage(navCtrl, navParams, http, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.zone = zone;
        this.captchaPassed = false;
        this.max = "maxDate";
        //public date: string = new Date().toISOString();
        //public minDate:any = new Date();
        this.minDate = new Date().getFullYear() + "" + this.getmon() + '' + this.getDate();
        this.maxDate = new Date().getFullYear() + "-12-12";
    }
    EnquiryFromPage.prototype.getmon = function () {
        if (new Date().getMonth() + 1 < 10) {
            console.log('-' + '0' + new Date().getMonth() + 1);
            return '-' + '0' + (new Date().getMonth() + 1);
        }
        else {
            console.log('-' + new Date().getMonth() + 1);
            return '-' + (new Date().getMonth() + 1);
        }
    };
    EnquiryFromPage.prototype.getDate = function () {
        if (new Date().getDate() + 1 < 10) {
            console.log('-' + '0' + new Date().getDate() + 1);
            return '-' + '0' + (new Date().getDate() + 1);
        }
        else {
            console.log('-' + new Date().getDate() + 1);
            return '-' + (new Date().getDate() + 1);
        }
    };
    EnquiryFromPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryFromPage');
        console.log(new Date().getFullYear() + "" + this.getmon() + '' + this.getDate());
    };
    EnquiryFromPage.prototype.captchaResolved = function (response) {
        var _this = this;
        this.zone.run(function () {
            _this.captchaPassed = true;
            _this.captchaResponse = response;
        });
    };
    EnquiryFromPage.prototype.sendForm = function () {
        var data = {
            captchaResponse: this.captchaResponse
        };
        this.http.post('http://localhost:8080/test', data).subscribe(function (res) {
            console.log(res);
        });
    };
    EnquiryFromPage.prototype.goTologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    EnquiryFromPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-enquiry-from',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\enquiry-from\enquiry-from.html"*/'<!--\n  Generated template for the EnquiryFromPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Enquiry From</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n          <ion-label floating>Name</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n\n      \n  \n        \n        \n        <ion-item>\n          <ion-label floating>Mobile Number</ion-label>\n          <ion-input type="number"></ion-input>\n        </ion-item>\n        \n        \n        \n       \n        \n        \n        <ion-item>\n            <ion-label floating>Date for Visit</ion-label>\n            \n            <ion-datetime displayFormat="MMM D, YYYY h a" min={{minDate}}\n            max={{maxDate}}></ion-datetime>\n            \n          </ion-item>\n\n        \n \n        \n          <ion-item>\n            <ion-label floating>Address</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        \n        \n          \n\n          \n          <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="email"></ion-input>\n            </ion-item>\n\n      \n      </ion-list>\n\n      <re-captcha (resolved)="captchaResolved($event)" siteKey="6LeWblMUAAAAALrt9LCOZH-Cr0V9H4lWu1RV2SSJ"></re-captcha>\n\n      <div text-center>\n          <button [disabled]="!captchaPassed" ion-button round centor (click)="sendForm()" (click)="goTologin()">Submit</button>\n      </div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\enquiry-from\enquiry-from.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], EnquiryFromPage);
    return EnquiryFromPage;
}());

//# sourceMappingURL=enquiry-from.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams /*, private callNumber: CallNumber*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams; /*, private callNumber: CallNumber*/
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
            { title: 'Profile', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'person' },
            { title: 'Alerts', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'alert' },
            // { title: 'Renewal', pageName: 'RenwalPage',  icon: 'card' },
            { title: 'Self Resolution', pageName: '', icon: 'hammer' },
            { title: 'Help', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 3, icon: 'help' },
            { title: 'Share', pageName: '', icon: 'share-alt' },
            { title: 'Refer A friend', pageName: '', icon: 'logo-freebsd-devil' }
            //{title: 'Login', pageName: 'LoginPage', icon:'exit'}
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.logoutClicked = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.openRenewalpage = function () {
        this.navCtrl.push('RenewalHistoryPage');
    };
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    MenuPage.prototype.callIT = function (passedNumber) {
        //You can add some logic here
        // this.callNumber.callNumber(passedNumber, true)
        // .then(res => console.log('Launched dialer!', res))
        //  .catch(err => console.log('Error launching dialer', err));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-menu side="left" type="overlay" [content]="content" >\n  <!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n \n  <ion-content>\n      <div class="menu-header">\n          <!--material-design-background-->\n          <img class="user-avatar round" style="height:90px;max-width:90px;" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/img/avatar/girl-avatar.png\'"\n          />\n          <p class="name">Mak</p>\n          <p class="e-mail">mak@cnergee.com</p>\n        </div>\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title }}\n        </button>\n\n        <button ion-item menuClose (click)="openRenewalpage()">\n            \n          <ion-icon item-start name="card"></ion-icon>\n          Renewal\n        </button>\n        <button ion-item menuClose (click)="callIT(\'+918237194700\')">\n            \n          <ion-icon item-start name="call"></ion-icon>\n          Call US\n        </button>\n        <button ion-item menuClose (click)="logoutClicked()">\n          <ion-icon item-start name="exit"></ion-icon>\n          Logout\n        </button>\n\n      \n        \n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n \n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] /*, private callNumber: CallNumber*/])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upgradeplans_upgradeplans__ = __webpack_require__(77);
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        //json:any
        //structure: any = { lower: 33, upper: 60 };
        this.selectedprice = 0;
        // min = this.json.[1].PlanAmount;
        // max = this.json.[1].PlanAmount;  
        this.minpricepackage = 0;
        this.maxpricepackage = 1;
        this.selectedprice;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
        this.getpackageList();
    };
    FilterPage.prototype.getpackageList = function () {
        var _this = this;
        this.restProvider.getpackageList()
            .then(function (data) {
            _this.Getpacklist = data;
            // this.json = JSON.parse(this.Getpacklist);
            // console.log(this.json);                             //this.min+"min", this.max+"max"
            console.log(_this.Getpacklist);
            //    this.getbymonths('30');
            //    this.getbymonths('90');
            //    this.getbymonths('180');
            //    this.getbymonths('360');
            _this.getsortprice();
        });
    };
    FilterPage.prototype.getsortprice = function () {
        //this.getpackageList.PlanAmoun
        for (var _i = 0, _a = this.Getpacklist; _i < _a.length; _i++) {
            var i = _a[_i];
            if (this.minpricepackage == 0 && this.minpricepackage == 0) {
                this.minpricepackage = Number(i.PlanAmount);
                this.maxpricepackage = Number(i.PlanAmount);
                console.log('min' + this.minpricepackage, 'max' + this.maxpricepackage);
            }
            if (Number(i.PlanAmount) < this.minpricepackage) {
                this.minpricepackage = Number(i.PlanAmount);
            }
            if (Number(i.PlanAmount) > this.maxpricepackage) {
                this.maxpricepackage = Number(i.PlanAmount);
            }
        }
        console.log(this.minpricepackage + "aaa", this.maxpricepackage + "aaaa", this.selectedprice + "selected");
    };
    FilterPage.prototype.rangeChange = function (range) {
        console.log(this.selectedprice);
    };
    FilterPage.prototype.gotoupgreadpaln = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upgradeplans_upgradeplans__["a" /* UpgradeplansPage */], { data: this.selectedprice });
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\filter\filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>filter</ion-title>\n    <!-- <button ion-button color="light" class="button">Light</button> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-range [min]="minpricepackage" [max]="maxpricepackage" pin="true" [(ngModel)]="selectedprice" (ionChange)="rangeChange($event)" color="secondary">\n    <ion-icon range-left small>₹ {{minpricepackage}}</ion-icon>\n    <ion-icon range-right >₹ {{maxpricepackage}} </ion-icon>\n  </ion-range>\n\n\n  <button ion-button full (click)="gotoupgreadpaln()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\filter\filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewalHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(51);
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
 * Generated class for the RenewalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenewalHistoryPage = /** @class */ (function () {
    // Amount:any;
    // PackageFullName:any;
    //  Mode:any;
    //  RenewalDate:any;
    function RenewalHistoryPage(navCtrl, navParams, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
    }
    RenewalHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RenewalHistoryPage');
        this.getpaymenthistory();
    };
    RenewalHistoryPage.prototype.getpaymenthistory = function () {
        var _this = this;
        this.restProvider.getpaymenthistory()
            .then(function (data) {
            _this.PaymentDate = data;
            //  this.Amount = data;
            //  this.PackageFullName = data;
            ///   this.Mode = data;
            //    this.RenewalDate = data;
            console.log(_this.PaymentDate);
        });
    };
    RenewalHistoryPage.prototype.geteachRenewal = function (RenID) {
        for (var _i = 0, _a = this.PaymentDate; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.RenewalID === RenID) {
                console.log(i.PackageFullName);
                console.log(i.PaymentDate);
                console.log(i.Mode);
                console.log(i.Amount);
                console.log(i.RenewalDate);
                var alert = this.alertCtrl.create({
                    title: 'Payments Detailes',
                    message: "<table style=\"width:100%\">\n          <tr>\n            <td>Plan:</th>\n            <td>" + i.PackageFullName + "</th> \n          </tr>\n          <tr>\n            <td>Pain On:</td>\n            <td>" + i.PaymentDate + "</td>\n          </tr>\n          <tr>\n            <td>Mode:</td>\n            <td>" + i.Mode + "</td>\n          </tr>\n          <tr>\n            <td>Amount:</td>\n            <td>" + i.Amount + "</td>\n          </tr>\n          <tr>\n          <td>Renewed on:</td>\n          <td>" + i.RenewalDate + "</td>\n        </tr>\n        </table>",
                    buttons: ['Dismiss']
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
        console.log(RenID);
        // let alert = this.alertCtrl.create({
        //   title: 'Low battery',
        //   subTitle: '10% of battery remaining',
        //   buttons: ['Dismiss']
        // });
        // alert.present();
    };
    RenewalHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-renewal-history',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\renewal-history\renewal-history.html"*/'<!--\n  Generated template for the RenewalHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RenewalHistory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list *ngFor="let paymenthistor of PaymentDate">\n \n       \n        <button ion-button block outline color="menu-o" (click)= "geteachRenewal(paymenthistor.RenewalID)">                    <!--(click)="showalerts()"-->\n            <div>\n              <label>{{paymenthistor.PaymentDate}}</label>   \n              <label> Of ₹ {{paymenthistor.Amount}}</label>  \n            </div>\n    </button>\n\n      \n      \n       </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\renewal-history\renewal-history.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], RenewalHistoryPage);
    return RenewalHistoryPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=renewal-history.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenwalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickup_request_pickup_request__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__special_special__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upgradeplans_upgradeplans__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__ = __webpack_require__(368);
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
 * Generated class for the RenwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenwalPage = /** @class */ (function () {
    function RenwalPage(navCtrl, navParams, alertCtrl, browserTab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.browserTab = browserTab;
    }
    RenwalPage.prototype.onclick = function () {
        var _this = this;
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl('https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/tc.html');
            }
            else {
                // open URL with InAppBrowser instead or SafariViewController
            }
        });
    };
    RenwalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RenwalPage');
    };
    RenwalPage.prototype.pickuprequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pickup_request_pickup_request__["a" /* PickupRequestPage */]);
    };
    RenwalPage.prototype.specialoffer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__special_special__["a" /* SpecialPage */]);
    };
    RenwalPage.prototype.upgreadpackage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__upgradeplans_upgradeplans__["a" /* UpgradeplansPage */]);
    };
    RenwalPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Payments Details');
        alert.addInput({
            type: 'checkbox',
            label: 'I Read T&C',
            value: 'blue',
            checked: true
        });
        alert.setMessage("<table >\n\n    <tr>\n      <td>Package:</td>\n      <td>GBPSFUP100MBPS2TB6MV_5M</td> \n    </tr>\n    <tr>\n      <td>Amount(\u20B9):</td>\n      <td>9027</td> \n    </tr>\n    <tr>\n      <td>Validity(Days):</td>\n      <td>180</td> \n    </tr>    \n  </table>\n  \n<p>I have read and accepted the Terms and Conditions. \nWe as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, \non Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</p>\n<p>I have read and accepted the Privacy Policy, Cancellation and Refund Policy</p>  ");
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    RenwalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-renwal',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\renwal\renwal.html"*/'<!--\n  Generated template for the RenwalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Renwal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="container">\n        <a class="btn btn-1"> <img src="/img/img_pickup.png" (click)= "pickuprequest()">\n          Pickup</a>\n        <a class="btn btn-2"><img src="/img/img_netbanking.png" (click)="doRadio()">\n          Net Backing</a>\n        <a class="btn btn-3"><img src="/img/img_card.png" (click)="doRadio()">\n          Credit/Debit Card</a> \n        <a class="btn btn-4"><img src="/img/img_specialoffer.png" (click)="specialoffer()">\n          Special Offers</a> \n        <a class="btn btn-5"><img src="/img/img_exploreplans.png" (click)="upgreadpackage()">\n          Upgreade Plans</a>\n\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\renwal\renwal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__["a" /* BrowserTab */]])
    ], RenwalPage);
    return RenwalPage;
}());

//# sourceMappingURL=renwal.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfResolutionPage; });
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
 * Generated class for the SelfResolutionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelfResolutionPage = /** @class */ (function () {
    function SelfResolutionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelfResolutionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelfResolutionPage');
    };
    SelfResolutionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-self-resolution',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\self-resolution\self-resolution.html"*/'<!--\n  Generated template for the SelfResolutionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>selfResolution</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\self-resolution\self-resolution.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelfResolutionPage);
    return SelfResolutionPage;
}());

//# sourceMappingURL=self-resolution.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/data-usage/data-usage.module": [
		911,
		19
	],
	"../pages/enquiry-from/enquiry-from.module": [
		912,
		18
	],
	"../pages/filter/filter.module": [
		913,
		17
	],
	"../pages/login/login.module": [
		914,
		16
	],
	"../pages/menu/menu.module": [
		920,
		15
	],
	"../pages/mytansaction/mytansaction.module": [
		915,
		6
	],
	"../pages/packagelistnew/packagelistnew.module": [
		916,
		5
	],
	"../pages/paymentsdetails/paymentsdetails.module": [
		918,
		4
	],
	"../pages/pickup-request/pickup-request.module": [
		917,
		14
	],
	"../pages/renewal-history/renewal-history.module": [
		926,
		13
	],
	"../pages/renwal/renwal.module": [
		928,
		12
	],
	"../pages/self-resolution/self-resolution.module": [
		919,
		11
	],
	"../pages/special/special.module": [
		921,
		10
	],
	"../pages/splash/splash.module": [
		922,
		9
	],
	"../pages/tab1/tab1.module": [
		923,
		8
	],
	"../pages/tab2/tab2.module": [
		924,
		3
	],
	"../pages/tab3/tab3.module": [
		925,
		2
	],
	"../pages/tab4/tab4.module": [
		927,
		1
	],
	"../pages/tabs/tabs.module": [
		929,
		0
	],
	"../pages/upgradeplans/upgradeplans.module": [
		930,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__self_resolution_self_resolution__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(136);
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
 * Generated class for the ServiceRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceRequestPage = /** @class */ (function () {
    //mearrdata = [];
    //songs: AngularFireList<any>;
    function ServiceRequestPage(navCtrl, navParams, restProvider, callNumber, fbdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.callNumber = callNumber;
        this.fbdb = fbdb;
        this.selectedvalue = "Select Complaint Type";
        //this.fbdb.list("/ComplaintPOst/").valueChanges();
    }
    ServiceRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceRequestPage');
        this.GetComplaintCategoryList();
    };
    ServiceRequestPage.prototype.GetComplaintCategoryList = function () {
        var _this = this;
        this.restProvider.GetComplaintCategoryList()
            .then(function (data) {
            _this.complaintlist = data;
            console.log(_this.complaintlist);
        });
    };
    ServiceRequestPage.prototype.SelfResolutionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__self_resolution_self_resolution__["a" /* SelfResolutionPage */]);
    };
    ServiceRequestPage.prototype.callcustomercare = function () {
        this.callNumber.callNumber("123456789", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ServiceRequestPage.prototype.postcomplaint = function () {
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
    };
    ServiceRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-service-request',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\service-request\service-request.html"*/'<!--\n  Generated template for the ServiceRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Service Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <!-- <ion-item >\n        <ion-spinner>{{ complaintlisteach.ComplaintName }}</ion-spinner>\n    </ion-item> -->\n\n    <ion-label style="font-size: 20px" text-center>Complaint</ion-label>\n    <ion-item>\n        <ion-select [(ngModel)]="selectedvalue" style="min-width: 100%; margin-top: 10px">\n            <ion-option color="primary"  *ngFor="let complaintlisteach of complaintlist"  value="{{complaintlisteach.ComplaintName}}">{{complaintlisteach.ComplaintName}}</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>Complaint</ion-label>\n        <ion-input [(ngModel)]="message"></ion-input>\n      </ion-item>\n      <div  text-center><button ion-button round margin (click)="postcomplaint()">Submit</button></div>\n\n      <div  text-center><button ion-button class="buttonself" color="light" (click)="SelfResolutionPage()">\n          <img src="assets/img/sel_2.png" style="width : 100% ; height : 100%;">\n          </button></div>\n\n          <div  text-center><button ion-button class="buttoncall" color="light" (click)="callcustomercare()">\n              <img src="assets/img/customercare.png" style="width : 100% ; height : 100%;">\n              </button>\n          </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\service-request\service-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceRequestPage);
    return ServiceRequestPage;
}());

//# sourceMappingURL=service-request.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from '@mobiscroll/angular/src/js/frameworks/angular';
//import { AppPreferences } from '@ionic-native/app-preferences';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'https://myapp-ffbd3.firebaseio.com/';
        this.balurl = "http://103.54.183.99:7999/mobile/mb_login/";
        console.log('Hello RestProvider Provider');
        //this.getuserlogin();
    }
    RestProvider.prototype.getuserlogin = function (username, password) {
        var _this = this;
        var myheader = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        var header = { "headers": { "Content-Type": "application/json" } };
        var body = {
            "role": "Subscriber",
            "username": username,
            "password": password,
            "ClientAccessID": "BR1706142835"
        };
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        return new Promise(function (resolve, reject) {
            //console.log("inside");
            _this.http.post(_this.balurl, JSON.stringify(body), { headers: myheader })
                .subscribe(function (data) {
                resolve(data);
                //console.log(data.subscriber[0].client_access_id)
                _this.data = data;
                //console.log(this.data+" local data")
                //   this.appPreferences.store("LoginData", 'loginType', this.data.loginType);
                //   this.appPreferences.store("LoginData", 'message', this.data.message); 
                //   this.appPreferences.store("LoginData", 'status', this.data.status);   
                //   this.appPreferences.store('subscriber', 'client_access_id',data.subscriber[0].client_access_id);    
                //   this.appPreferences.store('subscriber', 'subscriber_status', data.subscriber[0].subscriber_status); 
                //   this.appPreferences.store('subscriber', 'subscriber_id',data.subscriber[0].subscriber_id); 
                //   this.appPreferences.store('subscriber', 'subscriber_area_id', data.subscriber[0].subscriber_area_id);
                //   this.appPreferences.store('subscriber', 'subscriber_username',data.subscriber[0].subscriber_username);
                //   this.appPreferences.store('subscriber', 'subscriber_email',data.subscriber[0].subscriber_email);
                //  this.appPreferences.fetch('subscriber').then((res) => {  console.log("CLIENT ACCESS ID"+res);});
                //this.res = this.appPreferences.fetch ('LoginData', 'subscriber');
                //console.log("CLIENT ACCESS ID"+this.res);
            }, function (err) {
                reject(err);
            });
        });
        //  console.log("Cal Balradius");
    };
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "GetPaymentHistoryResponse/GetNotificationonMemberIdResult/NewDataSet/Table.json").subscribe(function (data) {
                resolve(data);
                console.log(_this.apiUrl + "GetPaymentHistoryResponse/GetNotificationonMemberIdResult/NewDataSet/Table.json");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getpaymenthistory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "RevelHis/GetPaymentHistoryResponse/GetPaymentHistoryResult/NewDataSet/Table.json").subscribe(function (data) {
                resolve(data);
                console.log(_this.apiUrl + "RevelHis/GetPaymentHistoryResponse/GetPaymentHistoryResult/NewDataSet/Table.json");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getpackageList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "GetPackageListByMemberidResult/GetPackageListByMemberidResponse/GetPackageListByMemberidResult/NewDataSet/Table.json").subscribe(function (data) {
                resolve(data);
                console.log(_this.apiUrl + "GetPackageListByMemberidResult/GetPackageListByMemberidResponse/GetPackageListByMemberidResult/NewDataSet/Table.json");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.GetComplaintCategoryList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "Complaint/GetComplaintCategoryListResponse/GetComplaintCategoryListResult/NewDataSet/Table.json").subscribe(function (data) {
                resolve(data);
                console.log(_this.apiUrl + "Complaint/GetComplaintCategoryListResponse/GetComplaintCategoryListResult/NewDataSet/Table.json");
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickup_request_pickup_request__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__renewal_history_renewal_history__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__special_special__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_usage_data_usage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renwal_renwal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upgradeplans_upgradeplans__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_request_service_request__ = __webpack_require__(372);
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
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = /** @class */ (function () {
    function Tab1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page.prototype.paymenthistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__renewal_history_renewal_history__["a" /* RenewalHistoryPage */]);
    };
    Tab1Page.prototype.pickupreq = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pickup_request_pickup_request__["a" /* PickupRequestPage */]);
    };
    Tab1Page.prototype.specialoffers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__special_special__["a" /* SpecialPage */]);
    };
    Tab1Page.prototype.datausage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__data_usage_data_usage__["a" /* DataUsagePage */]);
    };
    Tab1Page.prototype.renewalpay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__renwal_renwal__["a" /* RenwalPage */]);
    };
    Tab1Page.prototype.UpgradeplansPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__upgradeplans_upgradeplans__["a" /* UpgradeplansPage */]);
    };
    Tab1Page.prototype.ServiceRequestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__service_request_service_request__["a" /* ServiceRequestPage */]);
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab1',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab1\tab1.html"*/'<!--\n  Generated template for the Tab1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "primary" >\n    <ion-buttons >\n      <button ion-button menuToggle side="left">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title text-center></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n  \n<div class="paper"><img class="poster" src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/PD0XWZZSX5.jpg"/>\n  <h2>Welcome To</h2>\n  <h1>Cnergee Technologies</h1>\n  <h1></h1>\n  <span class="space"></span>\n  <p></p>\n  <p></p>\n  <p></p>\n  \n    \n  <button ion-button  block round class="btn" (click)="renewalpay()" padding>Pay Now </button>\n  \n</div>\n\n\n<ion-footer>\n    <ion-grid text-capitalize>\n        <ion-row no-padding no-margin>\n\n            <ion-col col-4 no-padding>\n\n                    <button ion-button full round  class="pulse" (click)="paymenthistory()">\n                            <div>\n                                <ion-icon name="clipboard"></ion-icon>\n                                <label>Renewal History</label>\n                            </div>\n                        </button>\n            </ion-col>\n            <ion-col col-4 no-padding>\n                    <button ion-button full round color="menu-o" (click)="datausage()">\n                            <div>\n                                <ion-icon name="stats"></ion-icon>\n                                <label>Data Usage</label>\n                            </div>\n                    </button>\n            </ion-col>\n            <ion-col col-4 no-padding>\n                <button ion-button full round color="menu-o" (click)="pickupreq()">\n                        <div>\n                            <ion-icon name="alarm"></ion-icon>\n                            <label>Pick up</label>\n                        </div>\n                </button>\n        </ion-col>\n            \n        <ion-col col-4 no-padding>\n\n            <button ion-button full round color="menu-o" (click)="specialoffers()">\n                    <div>\n                        <ion-icon name="logo-dropbox"></ion-icon>\n                        <label>Special Offers</label>\n                    </div>\n                </button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n            <button ion-button full round color="menu-o" (click)="UpgradeplansPage()">\n                    <div>\n                        <ion-icon name="trending-up"></ion-icon>\n                        <label>Upgrade Plans</label>\n                    </div>\n            </button>\n    </ion-col>\n    <ion-col col-4 no-padding>\n        <button ion-button full round color="menu-o" (click)="ServiceRequestPage()">\n                <div>\n                    <ion-icon name="construct"></ion-icon>\n                    <label>Service Request</label>\n                </div>\n        </button>\n</ion-col>\n        \n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(151);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, splashScreen, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 5000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splash',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\splash\splash.html"*/'\n<ion-content >\n\n<!-- Loader -->\n<!-- <div class="loader"></div> -->\n\n<div id="custom-overlay"><img src="https://img.over-blog-kiwi.com/1/90/89/99/20180113/ob_65f9f2_from-www-connectbroadbandchandigarh-in.gif"></div> \n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(523);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_enquiry_from_enquiry_from__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_recaptcha__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pickup_request_pickup_request__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_data_usage_data_usage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_special_special__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_renwal_renwal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_upgradeplans_upgradeplans__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_service_request_service_request__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_self_resolution_self_resolution__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_firebase_config__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_native_browser_tab__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_phonegap_local_notification__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_renewal_history_renewal_history__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { MbscModule } from '@mobiscroll/angular';









//import { RecaptchaModule } from 'ng-recaptcha';

///import { NgDatepickerModule } from 'ng2-datepicker';
//import { ReCaptchaModule } from 'angular2-recaptcha';
//



//import { RestProvider } from '../providers/rest/rest';



//import { RenewalHistoryPage } from '../pages/renewal-history/renewal-history';





//import { BrowserTab } from '@ionic-native/browser-tab'










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enquiry_from_enquiry_from__["a" /* EnquiryFromPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pickup_request_pickup_request__["a" /* PickupRequestPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_renewal_history_renewal_history__["a" /* RenewalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_data_usage_data_usage__["a" /* DataUsagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_special_special__["a" /* SpecialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_renwal_renwal__["a" /* RenwalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_upgradeplans_upgradeplans__["a" /* UpgradeplansPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_service_request_service_request__["a" /* ServiceRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_self_resolution_self_resolution__["a" /* SelfResolutionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__["a" /* FilterPage */]
                //CallNumber
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng_recaptcha__["RecaptchaModule"].forRoot(),
                // DatePickerModule,
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/data-usage/data-usage.module#DataUsagePageModule', name: 'DataUsagePage', segment: 'data-usage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enquiry-from/enquiry-from.module#EnquiryFromPageModule', name: 'EnquiryFromPage', segment: 'enquiry-from', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytansaction/mytansaction.module#MytansactionPageModule', name: 'MytansactionPage', segment: 'mytansaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/packagelistnew/packagelistnew.module#PackagelistnewPageModule', name: 'PackagelistnewPage', segment: 'packagelistnew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup-request/pickup-request.module#PickupRequestPageModule', name: 'PickupRequestPage', segment: 'pickup-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentsdetails/paymentsdetails.module#PaymentsdetailsPageModule', name: 'PaymentsdetailsPage', segment: 'paymentsdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/self-resolution/self-resolution.module#SelfResolutionPageModule', name: 'SelfResolutionPage', segment: 'self-resolution', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab3/tab3.module#Tab3PageModule', name: 'Tab3Page', segment: 'tab3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renewal-history/renewal-history.module#RenewalHistoryPageModule', name: 'RenewalHistoryPage', segment: 'renewal-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab4/tab4.module#Tab4PageModule', name: 'Tab4Page', segment: 'tab4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renwal/renwal.module#RenwalPageModule', name: 'RenwalPage', segment: 'renwal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upgradeplans/upgradeplans.module#UpgradeplansPageModule', name: 'UpgradeplansPage', segment: 'upgradeplans', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_enquiry_from_enquiry_from__["a" /* EnquiryFromPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pickup_request_pickup_request__["a" /* PickupRequestPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_renewal_history_renewal_history__["a" /* RenewalHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_data_usage_data_usage__["a" /* DataUsagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_special_special__["a" /* SpecialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_renwal_renwal__["a" /* RenwalPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_upgradeplans_upgradeplans__["a" /* UpgradeplansPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_service_request_service_request__["a" /* ServiceRequestPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_self_resolution_self_resolution__["a" /* SelfResolutionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__["a" /* FilterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_rest_rest__["a" /* RestProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_28__node_modules_ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_phonegap_local_notification__["a" /* PhonegapLocalNotification */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 243,
	"./af.js": 243,
	"./ar": 244,
	"./ar-dz": 245,
	"./ar-dz.js": 245,
	"./ar-kw": 246,
	"./ar-kw.js": 246,
	"./ar-ly": 247,
	"./ar-ly.js": 247,
	"./ar-ma": 248,
	"./ar-ma.js": 248,
	"./ar-sa": 249,
	"./ar-sa.js": 249,
	"./ar-tn": 250,
	"./ar-tn.js": 250,
	"./ar.js": 244,
	"./az": 251,
	"./az.js": 251,
	"./be": 252,
	"./be.js": 252,
	"./bg": 253,
	"./bg.js": 253,
	"./bm": 254,
	"./bm.js": 254,
	"./bn": 255,
	"./bn.js": 255,
	"./bo": 256,
	"./bo.js": 256,
	"./br": 257,
	"./br.js": 257,
	"./bs": 258,
	"./bs.js": 258,
	"./ca": 259,
	"./ca.js": 259,
	"./cs": 260,
	"./cs.js": 260,
	"./cv": 261,
	"./cv.js": 261,
	"./cy": 262,
	"./cy.js": 262,
	"./da": 263,
	"./da.js": 263,
	"./de": 264,
	"./de-at": 265,
	"./de-at.js": 265,
	"./de-ch": 266,
	"./de-ch.js": 266,
	"./de.js": 264,
	"./dv": 267,
	"./dv.js": 267,
	"./el": 268,
	"./el.js": 268,
	"./en-au": 269,
	"./en-au.js": 269,
	"./en-ca": 270,
	"./en-ca.js": 270,
	"./en-gb": 271,
	"./en-gb.js": 271,
	"./en-ie": 272,
	"./en-ie.js": 272,
	"./en-il": 273,
	"./en-il.js": 273,
	"./en-nz": 274,
	"./en-nz.js": 274,
	"./eo": 275,
	"./eo.js": 275,
	"./es": 276,
	"./es-do": 277,
	"./es-do.js": 277,
	"./es-us": 278,
	"./es-us.js": 278,
	"./es.js": 276,
	"./et": 279,
	"./et.js": 279,
	"./eu": 280,
	"./eu.js": 280,
	"./fa": 281,
	"./fa.js": 281,
	"./fi": 282,
	"./fi.js": 282,
	"./fo": 283,
	"./fo.js": 283,
	"./fr": 284,
	"./fr-ca": 285,
	"./fr-ca.js": 285,
	"./fr-ch": 286,
	"./fr-ch.js": 286,
	"./fr.js": 284,
	"./fy": 287,
	"./fy.js": 287,
	"./gd": 288,
	"./gd.js": 288,
	"./gl": 289,
	"./gl.js": 289,
	"./gom-latn": 290,
	"./gom-latn.js": 290,
	"./gu": 291,
	"./gu.js": 291,
	"./he": 292,
	"./he.js": 292,
	"./hi": 293,
	"./hi.js": 293,
	"./hr": 294,
	"./hr.js": 294,
	"./hu": 295,
	"./hu.js": 295,
	"./hy-am": 296,
	"./hy-am.js": 296,
	"./id": 297,
	"./id.js": 297,
	"./is": 298,
	"./is.js": 298,
	"./it": 299,
	"./it.js": 299,
	"./ja": 300,
	"./ja.js": 300,
	"./jv": 301,
	"./jv.js": 301,
	"./ka": 302,
	"./ka.js": 302,
	"./kk": 303,
	"./kk.js": 303,
	"./km": 304,
	"./km.js": 304,
	"./kn": 305,
	"./kn.js": 305,
	"./ko": 306,
	"./ko.js": 306,
	"./ky": 307,
	"./ky.js": 307,
	"./lb": 308,
	"./lb.js": 308,
	"./lo": 309,
	"./lo.js": 309,
	"./lt": 310,
	"./lt.js": 310,
	"./lv": 311,
	"./lv.js": 311,
	"./me": 312,
	"./me.js": 312,
	"./mi": 313,
	"./mi.js": 313,
	"./mk": 314,
	"./mk.js": 314,
	"./ml": 315,
	"./ml.js": 315,
	"./mn": 316,
	"./mn.js": 316,
	"./mr": 317,
	"./mr.js": 317,
	"./ms": 318,
	"./ms-my": 319,
	"./ms-my.js": 319,
	"./ms.js": 318,
	"./mt": 320,
	"./mt.js": 320,
	"./my": 321,
	"./my.js": 321,
	"./nb": 322,
	"./nb.js": 322,
	"./ne": 323,
	"./ne.js": 323,
	"./nl": 324,
	"./nl-be": 325,
	"./nl-be.js": 325,
	"./nl.js": 324,
	"./nn": 326,
	"./nn.js": 326,
	"./pa-in": 327,
	"./pa-in.js": 327,
	"./pl": 328,
	"./pl.js": 328,
	"./pt": 329,
	"./pt-br": 330,
	"./pt-br.js": 330,
	"./pt.js": 329,
	"./ro": 331,
	"./ro.js": 331,
	"./ru": 332,
	"./ru.js": 332,
	"./sd": 333,
	"./sd.js": 333,
	"./se": 334,
	"./se.js": 334,
	"./si": 335,
	"./si.js": 335,
	"./sk": 336,
	"./sk.js": 336,
	"./sl": 337,
	"./sl.js": 337,
	"./sq": 338,
	"./sq.js": 338,
	"./sr": 339,
	"./sr-cyrl": 340,
	"./sr-cyrl.js": 340,
	"./sr.js": 339,
	"./ss": 341,
	"./ss.js": 341,
	"./sv": 342,
	"./sv.js": 342,
	"./sw": 343,
	"./sw.js": 343,
	"./ta": 344,
	"./ta.js": 344,
	"./te": 345,
	"./te.js": 345,
	"./tet": 346,
	"./tet.js": 346,
	"./tg": 347,
	"./tg.js": 347,
	"./th": 348,
	"./th.js": 348,
	"./tl-ph": 349,
	"./tl-ph.js": 349,
	"./tlh": 350,
	"./tlh.js": 350,
	"./tr": 351,
	"./tr.js": 351,
	"./tzl": 352,
	"./tzl.js": 352,
	"./tzm": 353,
	"./tzm-latn": 354,
	"./tzm-latn.js": 354,
	"./tzm.js": 353,
	"./ug-cn": 355,
	"./ug-cn.js": 355,
	"./uk": 356,
	"./uk.js": 356,
	"./ur": 357,
	"./ur.js": 357,
	"./uz": 358,
	"./uz-latn": 359,
	"./uz-latn.js": 359,
	"./uz.js": 358,
	"./vi": 360,
	"./vi.js": 360,
	"./x-pseudo": 361,
	"./x-pseudo.js": 361,
	"./yo": 362,
	"./yo.js": 362,
	"./zh-cn": 363,
	"./zh-cn.js": 363,
	"./zh-hk": 364,
	"./zh-hk.js": 364,
	"./zh-tw": 365,
	"./zh-tw.js": 365
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 571;

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_from_enquiry_from__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { LoggerService } from '../../services/log4ts/logger.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    //private logger: LoggerService
    function LoginPage(navCtrl, navParams, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.credentialsForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.doLogin = function () {
        this.loader();
        //this.navCtrl.setRoot(MenuPage);
    };
    LoginPage.prototype.goEnuiry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enquiry_from_enquiry_from__["a" /* EnquiryFromPage */]);
    };
    LoginPage.prototype.loader = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
        }, 1000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\login\login.html"*/'\n\n<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="https://www.revaalo.com/sites/default/files/styles/product_245x245/public/logo_red.png%20revaalo.logo_.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form [formGroup]="credentialsForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n                <ion-label floating>Email</ion-label>\n              <ion-input floating [formControl]="credentialsForm.controls[\'email\']"\n          type="email" required></ion-input>\n            </ion-item>\n\n\n            <ion-label >OR</ion-label>\n\n\n            <ion-item>\n              <ion-label floating>Mobile</ion-label>\n              <ion-input [formControl]="credentialsForm.controls[\'password\']"\n                  type="password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button round\n          [disabled]="!credentialsForm.valid"\n          (click)="doLogin()">\n            Sign in\n          </button>\n\n          <div class="circle">\n            <div class="line-container">\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n          </div>\n\n\n          <button ion-button class="register-btn" block clear (click)="goEnuiry()">New Customer</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeplansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(178);
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
 * Generated class for the UpgradeplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpgradeplansPage = /** @class */ (function () {
    function UpgradeplansPage(navCtrl, navParams, alertCtrl, restProvider, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.pet = "puppies";
        this.count = 0;
        this.minrang = 0;
        this.maxrang = 3000;
        this.enable = false;
        this.disable = false;
        this.checked = true;
        //twelve_months : any;
        this.selectedprice = 0;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
        this.pet = "1 Month";
        this.updatefrom = "Apply_Now_With_Adjustment";
        //console.log(this.split("GBPS10Mbps12MULTD"));
    }
    //filterobj :FilterPage = new FilterPage(this.navCtrl,this.navParams, this.restProvider);
    UpgradeplansPage.prototype.split = function (text) {
        //var str = text.toString();
        //console.log(str);
        //return text.split();
        return text.slice(4, 6);
    };
    UpgradeplansPage.prototype.ionViewDidLoad = function () {
        console.log('IonViewDidLoad UpgradeplansPage');
        this.getpackageList();
        if (this.navParams.get('data') >= 0) {
            this.selectedprice = this.navParams.get('data');
        }
        else {
            this.selectedprice = 0;
        }
        // this.selectedprice = this.navParams.get('data');
        console.log(this.selectedprice + " Seleted price");
    };
    UpgradeplansPage.prototype.seteledcard = function (Packageid) {
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
    };
    UpgradeplansPage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
    };
    UpgradeplansPage.prototype.getchecked = function () {
        if (this.checked) {
            return false;
        }
        else {
            return true;
        }
    };
    //style="opacity: 0.4"
    UpgradeplansPage.prototype.getStyle = function (package_id) {
        //for (var eachpack of this.Getpacklist) {
        if (package_id == this.pack_id) {
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
    };
    UpgradeplansPage.prototype.getpackageList = function () {
        var _this = this;
        this.restProvider.getpackageList()
            .then(function (data) {
            _this.Getpacklist = data;
            console.log(_this.Getpacklist);
            //    this.getbymonths('30');
            //    this.getbymonths('90');
            //    this.getbymonths('180');
            //    this.getbymonths('360');
        });
    };
    UpgradeplansPage.prototype.getbymonths = function (PackageVald) {
        var count = 0;
        for (var _i = 0, _a = this.Getpacklist; _i < _a.length; _i++) {
            var i = _a[_i];
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
    };
    UpgradeplansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upgradeplans',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\upgradeplans\upgradeplans.html"*/'<!--\n  Generated template for the UpgradeplansPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Upgrade Plans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="card-background-page">\n\n\n\n\n\n\n   \n      <div padding>\n          <ion-segment [(ngModel)]="pet" >\n            <ion-segment-button value="1 Month" >\n                1 Month\n            </ion-segment-button>\n            <ion-segment-button value="3 Month">\n                3 Month\n            </ion-segment-button>\n            <ion-segment-button value="6 Month">\n                6 Month\n              </ion-segment-button>\n              <ion-segment-button value="9 Month">\n                  9 Month\n                </ion-segment-button>\n              <ion-segment-button value="12 Month">\n                  12 Month\n                </ion-segment-button>\n          </ion-segment>\n        </div>\n      \n        \n        <div [ngSwitch]="pet">\n          <ion-list *ngSwitchCase="\'1 Month\'">\n              <div class="scrolling-wrapper">\n                  <div *ngFor="let Getpacklisteach of Getpacklist">\n                    <ion-card class="card"  *ngIf = "Getpacklisteach.PackageValidity == \'30\' && Getpacklisteach.PlanAmount > selectedprice"  [style.opacity]="getStyle(Getpacklisteach.PackageId)" (click)= "seteledcard(Getpacklisteach.PackageId)">  \n                      <img class="img" src="https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/card.png"/>\n                      <div class="card-title">{{Getpacklisteach.PlanName}}</div>\n                      <div class="card-subtitle">₹ {{Getpacklisteach.PlanAmount}}</div>\n                        \n                        <div class  ="ion-card-content">\n\n                            <ion-row no-padding>\n                                <ion-col text-left>\n                                  <button ion-button clear small color="cardd" icon-start>\n                                    <ion-icon name=\'timer\'></ion-icon>\n                                    Validity\n                                  </button>\n                                </ion-col>\n                                <ion-col text-right>\n                                  <button ion-button clear small color="cardd" icon-start>\n                                    <ion-icon name=\'time\'></ion-icon>\n                                    {{Getpacklisteach.PackageValidity}}\n                                  </button>\n                                </ion-col>\n\n                              </ion-row>\n\n                        </div>\n\n                    </ion-card></div>\n\n\n\n                    <div></div>\n                </div>\n          </ion-list>\n        \n          <ion-list *ngSwitchCase="\'3 Month\'">\n\n\n              <div class="scrolling-wrapper">\n                  <div *ngFor="let Getpacklisteach of Getpacklist"  >\n                    <ion-card class="card"    *ngIf = "Getpacklisteach.PackageValidity == \'90\' && Getpacklisteach.PlanAmount > selectedprice" [style.opacity]="getStyle(Getpacklisteach.PackageId)" (click)= "seteledcard(Getpacklisteach.PackageId)">\n                      <img class="img" src="https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/card.png"/>\n                      <div class="card-title">{{ Getpacklisteach.PlanName}}</div>\n                      <div class="card-subtitle">₹ {{Getpacklisteach.PlanAmount}}</div>\n                            \n                        <div class="ion-card-content">\n\n                            <ion-row no-padding>\n                                <ion-col text-left>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'timer\'></ion-icon>\n                                    Validity\n                                  </button>\n                                </ion-col>\n                                <ion-col text-right>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'time\'></ion-icon>\n                                    {{Getpacklisteach.PackageValidity}}\n                                  </button>\n                                </ion-col>\n\n                              </ion-row>\n\n                        </div>\n\n\n                    </ion-card></div>\n\n\n\n                    <div></div>\n                </div>\n\n\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'6 Month\'">\n              <div class="scrolling-wrapper">\n                  <div *ngFor="let Getpacklisteach of Getpacklist">\n                    <ion-card class="card"  *ngIf = "Getpacklisteach.PackageValidity == \'180\' && Getpacklisteach.PlanAmount > selectedprice" [style.opacity]="getStyle(Getpacklisteach.PackageId)" (click)= "seteledcard(Getpacklisteach.PackageId)">\n                      <img class="img" src="https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/card.png"/>\n                      <div class="card-title">{{Getpacklisteach.PlanName}}</div>\n                      <div class="card-subtitle">₹ {{Getpacklisteach.PlanAmount}}</div>\n\n                        <div class="ion-card-content">\n\n                            <ion-row no-padding>\n                                <ion-col text-left>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'timer\'></ion-icon>\n                                    Validity\n                                  </button>\n                                </ion-col>\n                                <ion-col text-right>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'time\'></ion-icon>\n                                     {{ Getpacklisteach.PackageValidity}}\n                                  </button>\n                                </ion-col>\n\n                              </ion-row>\n\n                        </div>\n\n\n                    </ion-card></div>\n\n\n\n                    <div></div>\n                </div>\n\n\n            </ion-list>          \n\n\n          <ion-list *ngSwitchCase="\'12 Month\'">\n            \n\n\n              <div class="scrolling-wrapper">\n                  <div *ngFor="let Getpacklisteach of Getpacklist">\n                    <ion-card class="card"  *ngIf = "Getpacklisteach.PackageValidity == \'360\' || Getpacklisteach.PackageValidity == \'365\' && Getpacklisteach.PlanAmount > selectedprice" [style.opacity]="getStyle(Getpacklisteach.PackageId)" (click)= "seteledcard(Getpacklisteach.PackageId)">\n                      <img class="img" src="https://s3.ap-south-1.amazonaws.com/reactsample-hosting-mobilehub-881221978/card.png"/>\n                      <div class="card-title">{{Getpacklisteach.PlanName}}</div>\n                      <div class="card-subtitle">₹ {{Getpacklisteach.PlanAmount}}</div>\n\n                        <div class="ion-card-content">\n\n                            <ion-row no-padding>\n                                <ion-col text-left>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'timer\'></ion-icon>\n                                    Validity\n                                  </button>\n                                </ion-col>\n                                <ion-col text-right>\n                                  <button ion-button clear small color="danger" icon-start>\n                                    <ion-icon name=\'time\'></ion-icon>\n                                    {{  Getpacklisteach.PackageValidity}}\n                                  </button>\n                                </ion-col>\n\n                              </ion-row>\n\n                        </div>\n\n\n                    </ion-card></div>\n\n\n\n                    <div></div>\n                </div>\n\n            \n\n            </ion-list>\n\n        </div>\n\n        <ion-list radio-group [(ngModel)]="updatefrom">\n\n          <ion-list-header>\n            Package Update form\n          </ion-list-header>\n    \n          <ion-item>\n            <ion-label>Sechedule to next renewal</ion-label>\n            <ion-radio value="Sechedule_to_next_renewal"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Immediate Apply</ion-label>\n            <ion-radio value="Immediate_Apply"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Apply Now With Adjustment</ion-label>\n            <ion-radio value="Apply_Now_With_Adjustment"></ion-radio>\n          </ion-item>\n            \n        </ion-list>\n   \n        <button ion-button block>Process</button>\n\n\n        <!-- <ion-fab bottom right>\n            <button ion-fab>\n                <ion-icon name="funnel"></ion-icon>\n            </button>\n          </ion-fab> -->\n\n\n          <ion-fab bottom right >\n            <button ion-fab><ion-icon name="funnel"></ion-icon></button>\n            <ion-fab-list side="top">\n              <button ion-fab><ion-icon name="speedometer"></ion-icon></button>\n            </ion-fab-list>\n            <ion-fab-list side="left">\n              <button ion-fab style="font-weight:bold; font-size: 20px" (click)="filter()">₹\n              </button>\n            </ion-fab-list>\n          </ion-fab>\n      \n\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\upgradeplans\upgradeplans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], UpgradeplansPage);
    return UpgradeplansPage;
}());

//# sourceMappingURL=upgradeplans.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDpmvwxJDSeTAWNZ-YgRHsLxh3Ruu9-BXw",
    authDomain: "myapp-ffbd3.firebaseapp.com",
    databaseURL: "https://myapp-ffbd3.firebaseio.com",
    projectId: "myapp-ffbd3",
    storageBucket: "myapp-ffbd3.appspot.com",
    messagingSenderId: "981742150553"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[518]);
//# sourceMappingURL=main.js.map