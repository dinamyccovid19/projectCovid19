function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-utente-register-utente-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register-utente/register-utente.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-utente/register-utente.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterUtenteRegisterUtentePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"register-utente\">\r\n  <div class=\"utente\"><img src=\"../../assets/utente.gif\" alt=\"HTML5 Icon\" width=150></div>\r\n  <mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>Info</ng-template>\r\n      <!-- <mat-card> -->\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Surname</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Age</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field > -->\r\n        <!-- <mat-label>Legacy form field</mat-label> -->\r\n        <div class=\"radio-container\">\r\n          <mat-radio-group aria-label=\"Select an option\">\r\n            <mat-radio-button value=\"1\">Man</mat-radio-button>\r\n            <mat-radio-button value=\"2\">Woman</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n        <!-- </mat-form-field>  -->\r\n\r\n      <!-- </mat-card> -->\r\n    </mat-step>\r\n\r\n\r\n    <mat-step>\r\n      <ng-template matStepLabel>Role</ng-template>\r\n      <!-- <mat-card> -->\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Role</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Mail </mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Course</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field > -->\r\n        <!-- <mat-label>Legacy form field</mat-label> -->\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Department of afference</mat-label>\r\n          <input matInput placeholder=\"Placeholder\">\r\n          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\r\n          <!-- <mat-hint>Hint</mat-hint> -->\r\n        </mat-form-field>\r\n        <!-- </mat-form-field>  -->\r\n\r\n      <!-- </mat-card> -->\r\n\r\n\r\n    </mat-step>\r\n\r\n  </mat-horizontal-stepper>\r\n\r\n\r\n\r\n\r\n\r\n  <button class=\"next\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n    routerLink=\"/view-room\" routerDirection=\"root\">\r\n    <mat-icon>arrow_forward</mat-icon>\r\n  </button>\r\n\r\n  <button class=\"back\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n    routerLink=\"/lanfing-page-university\" routerDirection=\"root\">\r\n    <mat-icon>arrow_back</mat-icon>\r\n  </button>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/register-utente/register-utente-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/register-utente/register-utente-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RegisterUtentePageRoutingModule */

  /***/
  function srcAppRegisterUtenteRegisterUtenteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUtentePageRoutingModule", function () {
      return RegisterUtentePageRoutingModule;
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


    var _register_utente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register-utente.page */
    "./src/app/register-utente/register-utente.page.ts");

    var routes = [{
      path: '',
      component: _register_utente_page__WEBPACK_IMPORTED_MODULE_3__["RegisterUtentePage"]
    }];

    var RegisterUtentePageRoutingModule = function RegisterUtentePageRoutingModule() {
      _classCallCheck(this, RegisterUtentePageRoutingModule);
    };

    RegisterUtentePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterUtentePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register-utente/register-utente.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/register-utente/register-utente.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterUtentePageModule */

  /***/
  function srcAppRegisterUtenteRegisterUtenteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUtentePageModule", function () {
      return RegisterUtentePageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_utente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-utente-routing.module */
    "./src/app/register-utente/register-utente-routing.module.ts");
    /* harmony import */


    var _register_utente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-utente.page */
    "./src/app/register-utente/register-utente.page.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var RegisterUtentePageModule = function RegisterUtentePageModule() {
      _classCallCheck(this, RegisterUtentePageModule);
    };

    RegisterUtentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_utente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterUtentePageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_register_utente_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUtentePage"]]
    })], RegisterUtentePageModule);
    /***/
  },

  /***/
  "./src/app/register-utente/register-utente.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/register-utente/register-utente.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterUtenteRegisterUtentePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register-utente {\n  text-align: center;\n}\n.register-utente .back {\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  box-shadow: 0 8px 16px 0 rgba(0, 39, 19, 0.24);\n  background-image: linear-gradient(to left, #104d87, #1e77b4);\n}\n.register-utente .next {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  background-image: linear-gradient(to right, #00975c, #00bc73);\n}\n.register-utente .utente {\n  opacity: 0.7;\n  margin-top: 10px;\n  margin-bottom: -30px;\n}\n.register-utente .radio-container {\n  margin: 10px;\n  color: black !important;\n}\nion-content {\n  --background: white;\n  --text-align: center;\n}\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n::ng-deep .mat-radio-button {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdXRlbnRlL0M6XFxVc2Vyc1xcRHJldGU0NTdcXERlc2t0b3BcXGR5bmFtaWMtcm93L3NyY1xcYXBwXFxyZWdpc3Rlci11dGVudGVcXHJlZ2lzdGVyLXV0ZW50ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyLXV0ZW50ZS9yZWdpc3Rlci11dGVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSw0REFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2REFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREVBO0VBRUksbUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FESUU7RUFDRSxpQkFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci11dGVudGUvcmVnaXN0ZXItdXRlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci11dGVudGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDM5LCAxOSwgMC4yNCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxMDRkODcsICMxZTc3YjQpO1xyXG4gICAgfVxyXG4gICAgLm5leHR7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5NzVjLCAjMDBiYzczKTtcclxuICAgIH1cclxuICAgIC51dGVudGV7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgICB9XHJcbiAgICAucmFkaW8tY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnJlZ2lzdGVyLXV0ZW50ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3Rlci11dGVudGUgLmJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMzksIDE5LCAwLjI0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxMDRkODcsICMxZTc3YjQpO1xufVxuLnJlZ2lzdGVyLXV0ZW50ZSAubmV4dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5NzVjLCAjMDBiYzczKTtcbn1cbi5yZWdpc3Rlci11dGVudGUgLnV0ZW50ZSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG4ucmVnaXN0ZXItdXRlbnRlIC5yYWRpby1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/register-utente/register-utente.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/register-utente/register-utente.page.ts ***!
    \*********************************************************/

  /*! exports provided: RegisterUtentePage */

  /***/
  function srcAppRegisterUtenteRegisterUtentePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterUtentePage", function () {
      return RegisterUtentePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegisterUtentePage = /*#__PURE__*/function () {
      function RegisterUtentePage() {
        _classCallCheck(this, RegisterUtentePage);
      }

      _createClass(RegisterUtentePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterUtentePage;
    }();

    RegisterUtentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-utente',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-utente.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register-utente/register-utente.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-utente.page.scss */
      "./src/app/register-utente/register-utente.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RegisterUtentePage);
    /***/
  }
}]);
//# sourceMappingURL=register-utente-register-utente-module-es5.js.map