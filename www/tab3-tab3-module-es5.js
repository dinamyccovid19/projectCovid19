function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      New Room\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>Room</ng-template>\r\n        <!-- <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n        </mat-form-field> -->\r\n        <!-- Info Room -->\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <!-- <div class=\"id-room\"><span>Room ID : 0001 </span> </div> -->\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Active Reservation</ion-label>\r\n                    <ion-toggle color=\"success\"></ion-toggle>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Room Name:</ion-label>\r\n                    <ion-input></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Room Address:</ion-label>\r\n                    <ion-input></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Room Floor:</ion-label>\r\n                    <ion-input></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Room Number:</ion-label>\r\n                    <ion-input></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n              <ion-row>\r\n                <!-- <ion-col>\r\n                        <ion-item>\r\n                          <ion-label position=\"floating\">Room Floor:</ion-label>\r\n                          <ion-input></ion-input>\r\n                        </ion-item>\r\n                      </ion-col> -->\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Capacity people:</ion-label>\r\n                    <ion-input></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Room Tipology:</ion-label>\r\n                    <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                      <ion-select-option value=\"laboratory\">Laboratory</ion-select-option>\r\n                      <ion-select-option value=\"class\">Class</ion-select-option>\r\n                      <ion-select-option value=\"Library\">Library</ion-select-option>\r\n                      <ion-select-option value=\"sectorroom\">Sector Room</ion-select-option>\r\n                      <ion-select-option value=\"museum\">Museum</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>User Tipology:</ion-label>\r\n                    <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                      <ion-select-option value=\"fullprofessor\">Full Professor</ion-select-option>\r\n                      <ion-select-option value=\"asskstantprofessor\">Assistant Professor</ion-select-option>\r\n                      <ion-select-option value=\"researchers\">Researchers</ion-select-option>\r\n                      <ion-select-option value=\"Students\">Students</ion-select-option>\r\n                      <ion-select-option value=\"labtechnician\">Lab Tecninician</ion-select-option>\r\n                      <ion-select-option value=\"staffcleaning\">Staff Cleaning</ion-select-option>\r\n                      <ion-select-option value=\"supportstaff\">Support Staff</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <!-- Info Room -->\r\n        <div>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step [stepControl]=\"secondFormGroup\" optional>\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>Calendar</ng-template>\r\n        <mat-card>\r\n          <mat-form-field>\r\n            <mat-label>Start Date</mat-label>\r\n            <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\r\n                   required>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Choose a date</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Outline form field</mat-label>\r\n            <input matInput placeholder=\"Placeholder\">\r\n            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n            <mat-hint>Hint</mat-hint>\r\n          </mat-form-field>\r\n\r\n\r\n        </mat-card>\r\n\r\n        <!-- Info Calendar  -->\r\n\r\n        <ion-card>\r\n          <ion-card-content>\r\n\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Start Date</ion-label>\r\n                    <ion-datetime displayFormat=\"DD MMM YYYY\" placeholder=\"Select Date\"></ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>End Date</ion-label>\r\n                    <ion-datetime displayFormat=\"DD MMM YYYY\" placeholder=\"Select Date\"></ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Start Ore</ion-label>\r\n                    <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>End Ore</ion-label>\r\n                    <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>time spot (minuts):</ion-label>\r\n                    <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                      <ion-select-option *ngFor=\"let item of listNumber;\" value=\"{{item}}\"> {{item}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item>\r\n                    <ion-label>Check-in timeout (minuts)</ion-label>\r\n                    <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                      <ion-select-option *ngFor=\"let item of listNumber;\" value=\"{{item}}\"> {{item}}</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n        <!-- Info Calendar -->\r\n        <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <!-- Info Utente -->\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-item>\r\n                  <ion-label>Reservation users number</ion-label>\r\n                  <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n                    <ion-select-option *ngFor=\"let item of listNumber;\" value={{item}}> {{item}}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <!-- Info Utente -->\r\n\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n      </div>\r\n      <!-- conferma Creazione Room -->\r\n      <div class=\"ion-text-center\">\r\n        <button class=\"dynamic-button-gree\" (click)=\"createRoom()\" *ngIf=\"!isLoad\">Create New Room</button>\r\n        <button class=\"dynamic-button-blue\" (click)=\"dowloadQrCode()\" *ngIf=\"isLoad\">\r\n          <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n          Download QR\r\n        </button>\r\n      </div>\r\n      <!-- Conferma Creazione Room -->\r\n\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");
    /* harmony import */


    var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/qr-scanner/ngx */
    "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
    /* harmony import */


    var _dinamyc_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../dinamyc-service.service */
    "./src/app/dinamyc-service.service.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
      providers: [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_9__["QRScanner"], _dinamyc_service_service__WEBPACK_IMPORTED_MODULE_10__["DinamycServiceService"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);\n::ng-deep .mat-horizontal-stepper-header-container {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n  z-index: 2;\n  background-color: white;\n}\n::ng-deep .mat-horizontal-content-container {\n  margin-top: 108px;\n}\n.id-room {\n  text-align: end;\n  color: grey;\n  font-weight: bold;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXERyZXRlNDU3XFxEZXNrdG9wXFxkeW5hbWljLXJvdy9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMEVBQUE7QUFJUjtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDApO1xyXG5cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDEwOHB4O1xyXG59XHJcblxyXG4uaWQtcm9vbXtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDApO1xuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTA4cHg7XG59XG5cbi5pZC1yb29tIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dinamyc_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dinamyc-service.service */
    "./src/app/dinamyc-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(servive, _formBuilder) {
        _classCallCheck(this, Tab3Page);

        this.servive = servive;
        this._formBuilder = _formBuilder;
        this.isLoad = false;
        this.listNumber = _toConsumableArray(Array(100).keys());
        this.room = {};
        console.log(this.listNumber);
      }

      _createClass(Tab3Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.servive.presentLoading();
          this.isLoad = false;
        }
      }, {
        key: "createRoom",
        value: function createRoom() {
          this.isLoad = true;
          this.servive.presentLoadingToCreate();
        }
      }, {
        key: "dowloadQrCode",
        value: function dowloadQrCode() {
          window.open("../../assets/QRcode.pdf", '_blank');
        }
      }]);

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _dinamyc_service_service__WEBPACK_IMPORTED_MODULE_2__["DinamycServiceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dinamyc_service_service__WEBPACK_IMPORTED_MODULE_2__["DinamycServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map