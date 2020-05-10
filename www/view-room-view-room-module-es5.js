function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-room-view-room-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-room/view-room.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-room/view-room.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewRoomViewRoomPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content class=\"view-room\">\r\n  <button class=\"next\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n  routerLink=\"/\" routerDirection=\"root\">\r\n  <mat-icon>arrow_forward</mat-icon>\r\n</button>\r\n\r\n<button class=\"back\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n  routerLink=\"/register-utente\" routerDirection=\"root\">\r\n  <mat-icon>arrow_back</mat-icon>\r\n</button>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/view-room/view-room-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/view-room/view-room-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ViewRoomPageRoutingModule */

  /***/
  function srcAppViewRoomViewRoomRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewRoomPageRoutingModule", function () {
      return ViewRoomPageRoutingModule;
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


    var _view_room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-room.page */
    "./src/app/view-room/view-room.page.ts");

    var routes = [{
      path: '',
      component: _view_room_page__WEBPACK_IMPORTED_MODULE_3__["ViewRoomPage"]
    }];

    var ViewRoomPageRoutingModule = function ViewRoomPageRoutingModule() {
      _classCallCheck(this, ViewRoomPageRoutingModule);
    };

    ViewRoomPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ViewRoomPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/view-room/view-room.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/view-room/view-room.module.ts ***!
    \***********************************************/

  /*! exports provided: ViewRoomPageModule */

  /***/
  function srcAppViewRoomViewRoomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewRoomPageModule", function () {
      return ViewRoomPageModule;
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


    var _view_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-room-routing.module */
    "./src/app/view-room/view-room-routing.module.ts");
    /* harmony import */


    var _view_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-room.page */
    "./src/app/view-room/view-room.page.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");

    var ViewRoomPageModule = function ViewRoomPageModule() {
      _classCallCheck(this, ViewRoomPageModule);
    };

    ViewRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _view_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewRoomPageRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_view_room_page__WEBPACK_IMPORTED_MODULE_6__["ViewRoomPage"]]
    })], ViewRoomPageModule);
    /***/
  },

  /***/
  "./src/app/view-room/view-room.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/view-room/view-room.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewRoomViewRoomPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".view-room {\n  text-align: center;\n}\n.view-room .back {\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  box-shadow: 0 8px 16px 0 rgba(0, 39, 19, 0.24);\n  background-image: linear-gradient(to left, #104d87, #1e77b4);\n}\n.view-room .next {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  background-image: linear-gradient(to right, #00975c, #00bc73);\n}\nion-content {\n  --background: white;\n  --text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1yb29tL0M6XFxVc2Vyc1xcRHJldGU0NTdcXERlc2t0b3BcXGR5bmFtaWMtcm93L3NyY1xcYXBwXFx2aWV3LXJvb21cXHZpZXctcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZpZXctcm9vbS92aWV3LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSw0REFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2REFBQTtBQ0VSO0FERUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LXJvb20vdmlldy1yb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LXJvb217XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDM5LCAxOSwgMC4yNCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxMDRkODcsICMxZTc3YjQpO1xyXG4gICAgfVxyXG4gICAgLm5leHR7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA5NzVjLCAjMDBiYzczKTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiIsIi52aWV3LXJvb20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlldy1yb29tIC5iYWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDM5LCAxOSwgMC4yNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTA0ZDg3LCAjMWU3N2I0KTtcbn1cbi52aWV3LXJvb20gLm5leHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwOTc1YywgIzAwYmM3Myk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS10ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/view-room/view-room.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/view-room/view-room.page.ts ***!
    \*********************************************/

  /*! exports provided: ViewRoomPage */

  /***/
  function srcAppViewRoomViewRoomPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewRoomPage", function () {
      return ViewRoomPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewRoomPage = /*#__PURE__*/function () {
      function ViewRoomPage() {
        _classCallCheck(this, ViewRoomPage);
      }

      _createClass(ViewRoomPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewRoomPage;
    }();

    ViewRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-room',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-room.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-room/view-room.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-room.page.scss */
      "./src/app/view-room/view-room.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ViewRoomPage);
    /***/
  }
}]);
//# sourceMappingURL=view-room-view-room-module-es5.js.map