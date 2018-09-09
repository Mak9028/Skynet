webpackJsonp([3],{

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(934);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
            ],
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
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
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page.prototype.showalerts = function () {
        this.presentAlert();
    };
    Tab2Page.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Now You able to Update',
            subTitle: '',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab2',template:/*ion-inline-start:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab2\tab2.html"*/'<!--\n  Generated template for the Tab2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<link href="https://fonts.googleapis.com/css?family=Fira+Sans:300" rel="stylesheet">\n\n<ion-header>\n\n    <ion-navbar color = "primary">\n        <ion-buttons >\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n        <ion-title></ion-title>\n      </ion-navbar>\n    </ion-header>\n\n<ion-content padding>\n\n  <ion-card class="card" style="background: transparent">\n    <ion-card-header text-center style="color: white;">\n        Test User\n      </ion-card-header>\n    \n      <ion-card-content style=" font-size: 12px ">\n              <ion-grid>\n                      <ion-row >\n                        <ion-col text-start>\n                          Subscriber Name\n                        </ion-col>\n                        <ion-col text-end>\n                          Mr test gbos\n                        </ion-col>\n                      </ion-row>\n                          \n                      <ion-row>\n                              <ion-col text-start>\n                                User Id\n                              </ion-col>\n                              <ion-col text-end>\n\n                              test_gprs\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col text-start>\n                                  Package\n                                </ion-col>\n                                <ion-col text-end>\n                                    GBPS50Mbps3MULTD\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                              <ion-col text-start>\n                                Status\n                              </ion-col>\n                              <ion-col text-end>\n                                  Active\n                            </ion-col>\n                          </ion-row>                              \n                          <ion-row>\n                              <ion-col text-start>\n                                Mobile Number 1\n                              </ion-col>\n                              <ion-col text-end>\n                                  9820202385\n                            </ion-col>\n                          </ion-row>     \n\n                          <ion-row>\n                              <ion-col text-start>\n                                Mobile Number 2\n                              </ion-col>\n                              <ion-col text-end>\n                                  808232909\n                            </ion-col>\n                          </ion-row>     \n                    </ion-grid>       \n      </ion-card-content>\n    </ion-card>\n\n       <ion-row>\n         <ion-col >\n\n\n            <button ion-button full round color="menu-o" (click)="showalerts()">\n                <div>\n                    <ion-icon name="trending-up"></ion-icon>\n                    <label>Complate Profile</label>\n                </div>\n        </button>\n\n           \n         </ion-col>\n         <ion-col>\n            <button ion-button full round color="menu-o">\n                <div>\n                    <ion-icon name="trending-up"></ion-icon>\n                    <label>Update Profile</label>\n                </div>\n        </button>\n            \n          </ion-col>\n       </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"D:\WorkSpace\Ionic Project\myApp\src\pages\tab2\tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ })

});
//# sourceMappingURL=3.js.map