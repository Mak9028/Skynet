webpackJsonp([2],{

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab3__ = __webpack_require__(935);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */]),
            ],
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());

//# sourceMappingURL=tab3.module.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Http } from '@angular/http';



/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, navParams, http, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
    }
    //users: any;
    Tab3Page.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    Tab3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab3Page');
        this.getUsers();
    };
    Tab3Page.prototype.removeItem = function (item) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] == item) {
                this.users.splice(i, 1);
            }
        }
    };
    Tab3Page.prototype.geteachRenewal = function (NotifyId) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.NotifyId === NotifyId) {
                console.log(i.NotificationMessage);
                var alert_1 = this.alertCtrl.create({
                    title: 'Alerts',
                    message: i.NotificationMessage,
                    buttons: ['Dismiss'],
                });
                alert_1.present();
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
    };
    Tab3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab3',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab3\tab3.html"*/'<!--\n  Generated template for the Tab3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color = "primary" align-title="center">\n        <ion-buttons>\n          <button ion-button menuToggle >\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n        \n      </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n \n      <ion-item-sliding *ngFor="let user of users" >\n    \n       <ion-item class="cards-bg" >\n        <ion-card-content  (click)="geteachRenewal(user.NotifyId)" >\n          <label>{{user.NotificationMessage}}</label>\n       </ion-card-content>\n       </ion-item>\n    \n       <ion-item-options>\n         <button danger (click)="removeItem()"><ion-icon name="trash"></ion-icon> Delete</button>\n       </ion-item-options>\n     </ion-item-sliding>\n    \n     </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab3\tab3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Tab3Page);
    return Tab3Page;
}());

//# sourceMappingURL=tab3.js.map

/***/ })

});
//# sourceMappingURL=2.js.map