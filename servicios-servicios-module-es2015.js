(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicios/servicio/servicio.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicios/servicio/servicio.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"id\" class=\"servicio\" >\r\n    <section  class=\"titulo-servicio\">\r\n        <div>\r\n            <label>\r\n                {{titulo}}\r\n            </label>\r\n            <p>\r\n                {{descripcion}}                \r\n            </p>\r\n        </div>\r\n        \r\n    </section>\r\n    <section class=\"listado-servicio\" >\r\n        <ul>\r\n           <li *ngFor=\"let recorre of lista\" >\r\n                    {{recorre}}\r\n           </li>\r\n            <li>\r\n                <label (click)=\"GoTo()\" >CONSULTAR</label>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/servicios/servicios.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicios/servicios.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-inicio-elegirnos id=\"servicios-serv\" \r\n[parrafo]=\"parrafo\" [imagen]=\"imagen\" [colorFondo]=\"colorFondo\" [colorFuentearrafo]=\"colorFuente\" [colorFondoParrafo]=\"colorFondoParrafo\" titulo=\"SERVICIOS\"\r\ncolorFondoTitulo=\"rgb(4, 4, 88)\"\r\n>\r\n\r\n</app-inicio-elegirnos >\r\n\r\n\r\n<app-servicio *ngFor=\"let recorre of servicios\"  [id]=\"recorre.id\"\r\n    [titulo]=\"recorre.titulo\" [descripcion]=\"recorre.descripcion\" [lista]=\"recorre.servicios\"\r\n    [imagen]=\"recorre.imagen\"\r\n>   \r\n</app-servicio>"

/***/ }),

/***/ "./src/app/servicios/servicio/servicio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/servicios/servicio/servicio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".servicio\r\n{\r\n    \r\n    background-size: 100%;\r\n    \r\n    background-attachment: fixed;\r\n    margin-top: 0px;\r\n\r\n}\r\n\r\n\r\n.listado-servicio ul li{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    max-width: 360px;\r\n    font-size: 16px;\r\n}\r\n\r\n\r\n.listado-servicio ul :last-child{\r\n    list-style-type: none;\r\n    padding: 8px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n    \r\n}\r\n\r\n\r\n.listado-servicio ul :last-child label{\r\n    margin-right: 30px;    \r\n    color: white;\r\n    background: rgb(4, 4, 88);\r\n    padding-left: 9px;\r\n    padding-right: 9px;\r\n    border-color: white;\r\n    border: 1px;\r\n    border-style: solid;\r\n    border-radius: 8px;\r\n    -webkit-transition: 0.7s;\r\n    transition: 0.7s;\r\n}\r\n\r\n\r\n.listado-servicio ul :last-child label:hover{\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n\r\n.titulo-servicio\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    \r\n    -webkit-box-align: center;\r\n    \r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n    \r\n}\r\n\r\n\r\n.titulo-servicio div\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 60%;\r\n    -webkit-box-align: center;\r\n            align-items: center;    \r\n    -webkit-box-orient: vertical;    \r\n    -webkit-box-direction: normal;    \r\n            flex-direction: column;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n    background: rgba(0, 0, 0, 0.8);\r\n    padding: 5px;\r\n    margin-top: 20px;\r\n    color: white;\r\n    border-radius: 16px;\r\n    \r\n        \r\n}\r\n\r\n\r\n.titulo-servicio div label\r\n{\r\n    font-size: 26px;\r\n    \r\n}\r\n\r\n\r\n.titulo-servicio div p\r\n{\r\n    font-size: 17px;\r\n    \r\n}\r\n\r\n\r\n.listado-servicio {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    border-radius: 8px;\r\n}\r\n\r\n\r\n.listado-servicio ul {\r\n    background: rgb(4, 4, 88);\r\n    border-radius: 16px;\r\n    color: white;\r\n}\r\n\r\n\r\n@media screen and (max-width:390px)\r\n{\r\n    .titulo-servicio div label\r\n    {\r\n        font-size: 21px;\r\n        \r\n    }\r\n\r\n    .titulo-servicio div p\r\n    {\r\n        font-size: 12px;\r\n        \r\n    }\r\n\r\n    .listado-servicio ul li{        \r\n        font-size: 13px;\r\n        padding-left: 4x;\r\n        padding-right: 4px;\r\n    }\r\n\r\n    .listado-servicio ul li{        \r\n        max-width: 260px;        \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljaW9zL3NlcnZpY2lvL3NlcnZpY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLHFCQUFxQjs7SUFFckIsNEJBQTRCO0lBQzVCLGVBQWU7O0FBRW5COzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7OztBQUczQjs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOzs7QUFJQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7O0lBRWIseUJBQW1COztZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1Qjs7O0FBRzNCOzs7QUFFQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixVQUFVO0lBQ1YseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXVCO1lBQXZCLHVCQUF1Qjs7SUFFdkIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjs7O0FBR3ZCOzs7QUFDQTs7SUFFSSxlQUFlOztBQUVuQjs7O0FBRUE7O0lBRUksZUFBZTs7QUFFbkI7OztBQUlBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSTs7UUFFSSxlQUFlOztJQUVuQjs7SUFFQTs7UUFFSSxlQUFlOztJQUVuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNpb3Mvc2VydmljaW8vc2VydmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNpb1xyXG57XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuXHJcbn1cclxuXHJcblxyXG4ubGlzdGFkby1zZXJ2aWNpbyB1bCBsaXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5saXN0YWRvLXNlcnZpY2lvIHVsIDpsYXN0LWNoaWxke1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ubGlzdGFkby1zZXJ2aWNpbyB1bCA6bGFzdC1jaGlsZCBsYWJlbHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDsgICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgNCwgODgpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG5cclxuLmxpc3RhZG8tc2VydmljaW8gdWwgOmxhc3QtY2hpbGQgbGFiZWw6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG5cclxuXHJcbi50aXR1bG8tc2VydmljaW9cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLnRpdHVsby1zZXJ2aWNpbyBkaXZcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBcclxuICAgICAgICBcclxufVxyXG4udGl0dWxvLXNlcnZpY2lvIGRpdiBsYWJlbFxyXG57XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdHVsby1zZXJ2aWNpbyBkaXYgcFxyXG57XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ubGlzdGFkby1zZXJ2aWNpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5saXN0YWRvLXNlcnZpY2lvIHVsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0LCA0LCA4OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozOTBweClcclxue1xyXG4gICAgLnRpdHVsby1zZXJ2aWNpbyBkaXYgbGFiZWxcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRpdHVsby1zZXJ2aWNpbyBkaXYgcFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubGlzdGFkby1zZXJ2aWNpbyB1bCBsaXsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDR4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdGFkby1zZXJ2aWNpbyB1bCBsaXsgICAgICAgIFxyXG4gICAgICAgIG1heC13aWR0aDogMjYwcHg7ICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/servicios/servicio/servicio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/servicios/servicio/servicio.component.ts ***!
  \**********************************************************/
/*! exports provided: ServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioComponent", function() { return ServicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ServicioComponent = class ServicioComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        let fondo = document.getElementById(this.id);
        fondo.style.backgroundImage = `url('${this.imagen}')`;
    }
    GoTo() {
        const mensaje = `Hola, He viste el servicio que ofrecen acerca ${this.titulo}, me gustaría tener mas información`;
        this.route.navigate(["contactanos", { mensaje: mensaje }]);
    }
};
ServicioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServicioComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServicioComponent.prototype, "descripcion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServicioComponent.prototype, "lista", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServicioComponent.prototype, "imagen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServicioComponent.prototype, "id", void 0);
ServicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicio',
        template: __webpack_require__(/*! raw-loader!./servicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/servicios/servicio/servicio.component.html"),
        styles: [__webpack_require__(/*! ./servicio.component.css */ "./src/app/servicios/servicio/servicio.component.css")]
    })
], ServicioComponent);



/***/ }),

/***/ "./src/app/servicios/servicios-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/servicios/servicios-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ServiciosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosRoutingModule", function() { return ServiciosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.component */ "./src/app/servicios/servicios.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _servicios_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosComponent"]
    }
];
let ServiciosRoutingModule = class ServiciosRoutingModule {
};
ServiciosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ServiciosRoutingModule);



/***/ }),

/***/ "./src/app/servicios/servicios.component.css":
/*!***************************************************!*\
  !*** ./src/app/servicios/servicios.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvcy9zZXJ2aWNpb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/servicios/servicios.component.ts":
/*!**************************************************!*\
  !*** ./src/app/servicios/servicios.component.ts ***!
  \**************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-valid-value */ "./node_modules/is-valid-value/index.js");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(is_valid_value__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interface_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/menu */ "./src/app/interface/menu.ts");





let ServiciosComponent = class ServiciosComponent {
    constructor(parametro) {
        this.parametro = parametro;
        this.inside = false;
        this.servicios = new Array();
        if (!this.inside) {
            const idServicio = this.parametro.snapshot.paramMap.get("id");
            if (is_valid_value__WEBPACK_IMPORTED_MODULE_1__["Validate"].value(idServicio)) {
                setTimeout(() => {
                    const servicioSeleccionado = document.getElementById(idServicio);
                    _interface_menu__WEBPACK_IMPORTED_MODULE_4__["Scroll"].move(servicioSeleccionado.getBoundingClientRect().top);
                }, 100);
            }
            else {
                _interface_menu__WEBPACK_IMPORTED_MODULE_4__["Scroll"].move();
            }
        }
    }
    ngOnInit() {
        this.LlenarInfoServicio();
        this.LlenarInfoServicios();
    }
    LlenarInfoServicio() {
        this.parrafo = `
    o	En ISC Integrity Solutions & Consulting CIA. LTDA. estamos comprometidos con el crecimiento y la eficiencia de su Organización, contamos con el conocimiento, metodologías de trabajo y las herramientas para que su empresa se mantenga alineado con el cumplimiento de las normativas y las buenas prácticas de la industria.
    `;
        this.imagen = "assets/img/servicio.png";
        this.colorFuente = "black";
        this.colorFondoParrafo = "rgb(241, 239, 239)";
        this.colorFondo = "white";
    }
    LlenarInfoServicios() {
        this.servicios = [
            {
                id: `1`,
                titulo: `Business Risk`,
                descripcion: `El riesgo empresarial es la exposición que tiene una empresa u organización a factores que reducirán sus beneficios o la llevarán al fracaso. Todo lo que amenace la capacidad de una empresa para lograr sus objetivos financieros se considera un riesgo comercial.`,
                servicios: [
                    `Planeación Estratégica`,
                    `Documentación y Optimización de Procesos`,
                    `Evaluación Cualitativa y Cuantitativa de  Riesgos Operacionales`,
                    `Gestión de Continuidad del Negocio`,
                    `Supply Chain Management`,
                    `Investigación y Mitigación de Fraude`,
                    `Revenue Assurance`,
                    "Análisis de la Productividad de los Procesos del Negocio",
                    `Eficiencia Operativa`,
                ],
                imagen: `assets/img/servicios/busniss.jpg`
            },
            {
                id: `2`,
                titulo: `Technology Risk`,
                descripcion: `El riesgo tecnológico, o riesgo de la tecnología de la información, es la posibilidad de que cualquier falla tecnológica interrumpa un negocio.
        Las empresas enfrentan muchos tipos de riesgos tecnológicos, como incidentes de seguridad de la información, ciberataques, robo de contraseñas, interrupciones del servicio.`,
                servicios: [
                    `Riesgos de TI`,
                    `Capacitación y Cumplimiento de la Norma ISO27001`,
                    `Capacitación y Cumplimiento  de  la  Norma  ISO22301`,
                    `Planeación Estratégica de TI`,
                    `Gestión de Seguridad de la Información`,
                    `Soluciones de Seguridad Electrónica`,
                    `Gobierno de TI`,
                    `Gestión de Servicios de TI - ITIL`,
                    `Revisión de Controles de TI`,
                    `Auditorías de TI`,
                    `Evaluación y Selección de Software`,
                    `Revisión de Código Seguro de Aplicaciones`,
                    `PCI-DSS Compliance`,
                    `Vulnerability Management`,
                    `Ethical Hacking`,
                    `Security Assessment`
                ],
                imagen: `assets/img/servicios/risk.jfif`
            },
            {
                id: `3`,
                titulo: `Integration Services`,
                descripcion: `Las organizaciones se enfrentan constantemente al reto de producir más gastando menos. Para crecer, las empresas están buscando maneras de mejorar sus procesos de una manera que resulte en la reducción de costes y en una conciencia de lo que realmente representa cada proceso dentro de la empresa.`,
                servicios: [
                    `Optimización de procesos (Soluciones BPMS).`,
                    `Control de Calidad de proyectos y aplicaciones.`,
                    `Gestión del cambio`,
                    `Administración y Gestión de Proyectos - PMO.`,
                    `Optimización Tecnológica`,
                    `Optimización de Aplicaciones.`,
                    `Business Intelligence`,
                    `Data Warehousing`,
                    `Soluciones ESB y SOA`,
                    `Soluciones CRM`,
                    `Soluciones de Continuidad del Negocio`,
                    `Vulnerability Management`,
                    `Software Factory`,
                    `Testing Factory`
                ],
                imagen: `assets/img/servicios/integri.jpg`
            }
        ];
    }
    ngAfterViewChecked() {
        _interface_menu__WEBPACK_IMPORTED_MODULE_4__["Disparador"].OnChangeComponent.emit();
    }
};
ServiciosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ServiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-servicios',
        template: __webpack_require__(/*! raw-loader!./servicios.component.html */ "./node_modules/raw-loader/index.js!./src/app/servicios/servicios.component.html"),
        styles: [__webpack_require__(/*! ./servicios.component.css */ "./src/app/servicios/servicios.component.css")]
    })
], ServiciosComponent);



/***/ }),

/***/ "./src/app/servicios/servicios.module.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicios.module.ts ***!
  \***********************************************/
/*! exports provided: ServiciosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosModule", function() { return ServiciosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _servicios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.component */ "./src/app/servicios/servicios.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios-routing.module */ "./src/app/servicios/servicios-routing.module.ts");
/* harmony import */ var _components_inicio_elegirnos_inicio_elegirnos_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/inicio-elegirnos/inicio-elegirnos.module */ "./src/app/components/inicio-elegirnos/inicio-elegirnos.module.ts");
/* harmony import */ var _servicio_servicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio/servicio.component */ "./src/app/servicios/servicio/servicio.component.ts");







let ServiciosModule = class ServiciosModule {
};
ServiciosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _servicios_component__WEBPACK_IMPORTED_MODULE_1__["ServiciosComponent"],
            _servicio_servicio_component__WEBPACK_IMPORTED_MODULE_6__["ServicioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServiciosRoutingModule"],
            _components_inicio_elegirnos_inicio_elegirnos_module__WEBPACK_IMPORTED_MODULE_5__["InicioElegirnosModule"]
        ]
    })
], ServiciosModule);



/***/ })

}]);
//# sourceMappingURL=servicios-servicios-module-es2015.js.map