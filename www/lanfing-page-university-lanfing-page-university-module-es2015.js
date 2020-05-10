(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lanfing-page-university-lanfing-page-university-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lanfing-page-university/lanfing-page-university.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lanfing-page-university/lanfing-page-university.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"landing-page-university\">\r\n\r\n  <div class=\"university\"><img src=\"../../assets/university.gif\" alt=\"HTML5 Icon\" width=300></div>\r\n\r\n  <button class=\"next\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n    routerLink=\"/register-utente\" routerDirection=\"root\">\r\n    <mat-icon>arrow_forward</mat-icon>\r\n  </button>\r\n\r\n  <button class=\"back\" mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\" expand=\"block\"\r\n    routerLink=\"/landing-page\" routerDirection=\"root\">\r\n    <mat-icon>arrow_back</mat-icon>\r\n  </button>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/lanfing-page-university/lanfing-page-university-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/lanfing-page-university/lanfing-page-university-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LanfingPageUniversityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanfingPageUniversityPageRoutingModule", function() { return LanfingPageUniversityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lanfing_page_university_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lanfing-page-university.page */ "./src/app/lanfing-page-university/lanfing-page-university.page.ts");




const routes = [
    {
        path: '',
        component: _lanfing_page_university_page__WEBPACK_IMPORTED_MODULE_3__["LanfingPageUniversityPage"]
    }
];
let LanfingPageUniversityPageRoutingModule = class LanfingPageUniversityPageRoutingModule {
};
LanfingPageUniversityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanfingPageUniversityPageRoutingModule);



/***/ }),

/***/ "./src/app/lanfing-page-university/lanfing-page-university.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/lanfing-page-university/lanfing-page-university.module.ts ***!
  \***************************************************************************/
/*! exports provided: LanfingPageUniversityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanfingPageUniversityPageModule", function() { return LanfingPageUniversityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _lanfing_page_university_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lanfing-page-university-routing.module */ "./src/app/lanfing-page-university/lanfing-page-university-routing.module.ts");
/* harmony import */ var _lanfing_page_university_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lanfing-page-university.page */ "./src/app/lanfing-page-university/lanfing-page-university.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");








let LanfingPageUniversityPageModule = class LanfingPageUniversityPageModule {
};
LanfingPageUniversityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lanfing_page_university_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanfingPageUniversityPageRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_lanfing_page_university_page__WEBPACK_IMPORTED_MODULE_6__["LanfingPageUniversityPage"]]
    })
], LanfingPageUniversityPageModule);



/***/ }),

/***/ "./src/app/lanfing-page-university/lanfing-page-university.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/lanfing-page-university/lanfing-page-university.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing-page-university {\n  text-align: center;\n}\n.landing-page-university .back {\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  box-shadow: 0 8px 16px 0 rgba(0, 39, 19, 0.24);\n  background-image: linear-gradient(to left, #104d87, #1e77b4);\n}\n.landing-page-university .next {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  background-image: linear-gradient(to right, #00975c, #00bc73);\n}\nion-content {\n  --background: white;\n  --text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZmluZy1wYWdlLXVuaXZlcnNpdHkvQzpcXFVzZXJzXFxEcmV0ZTQ1N1xcRGVza3RvcFxcZHluYW1pYy1yb3cvc3JjXFxhcHBcXGxhbmZpbmctcGFnZS11bml2ZXJzaXR5XFxsYW5maW5nLXBhZ2UtdW5pdmVyc2l0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhbmZpbmctcGFnZS11bml2ZXJzaXR5L2xhbmZpbmctcGFnZS11bml2ZXJzaXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNERBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7QUNFUjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZmluZy1wYWdlLXVuaXZlcnNpdHkvbGFuZmluZy1wYWdlLXVuaXZlcnNpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctcGFnZS11bml2ZXJzaXR5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAzOSwgMTksIDAuMjQpO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMTA0ZDg3LCAjMWU3N2I0KTtcclxuICAgIH1cclxuICAgIC5uZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwOTc1YywgIzAwYmM3Myk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLXRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4iLCIubGFuZGluZy1wYWdlLXVuaXZlcnNpdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGFuZGluZy1wYWdlLXVuaXZlcnNpdHkgLmJhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMzksIDE5LCAwLjI0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMxMDRkODcsICMxZTc3YjQpO1xufVxuLmxhbmRpbmctcGFnZS11bml2ZXJzaXR5IC5uZXh0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDk3NWMsICMwMGJjNzMpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/lanfing-page-university/lanfing-page-university.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/lanfing-page-university/lanfing-page-university.page.ts ***!
  \*************************************************************************/
/*! exports provided: LanfingPageUniversityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanfingPageUniversityPage", function() { return LanfingPageUniversityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LanfingPageUniversityPage = class LanfingPageUniversityPage {
    constructor() { }
    ngOnInit() {
    }
};
LanfingPageUniversityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lanfing-page-university',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lanfing-page-university.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lanfing-page-university/lanfing-page-university.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lanfing-page-university.page.scss */ "./src/app/lanfing-page-university/lanfing-page-university.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LanfingPageUniversityPage);



/***/ })

}]);
//# sourceMappingURL=lanfing-page-university-lanfing-page-university-module-es2015.js.map