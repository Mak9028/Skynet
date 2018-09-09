webpackJsonp([6],{

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytansactionPageModule", function() { return MytansactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mytansaction__ = __webpack_require__(931);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MytansactionPageModule = /** @class */ (function () {
    function MytansactionPageModule() {
    }
    MytansactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mytansaction__["a" /* MytansactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mytansaction__["a" /* MytansactionPage */]),
            ],
        })
    ], MytansactionPageModule);
    return MytansactionPageModule;
}());

//# sourceMappingURL=mytansaction.module.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytansactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(51);
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
 * Generated class for the MytansactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MytansactionPage = /** @class */ (function () {
    function MytansactionPage(navCtrl, navParams, http, restProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
    }
    MytansactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MytansactionPage');
    };
    MytansactionPage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    MytansactionPage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] == item) {
                this.users.splice(i, 1);
            }
        }
    };
    MytansactionPage.prototype.geteachRenewal = function (NotifyId) {
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
    MytansactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mytansaction',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\mytansaction\mytansaction.html"*/'<!--\n  Generated template for the MytansactionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mytansaction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\mytansaction\mytansaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MytansactionPage);
    return MytansactionPage;
}());

//# sourceMappingURL=mytansaction.js.map

/***/ })

});
//# sourceMappingURL=6.js.map