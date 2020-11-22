(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<router-outlet >\r\n    \r\n</router-outlet>\r\n\r\n<app-footer >\r\n    \r\n</app-footer>\r\n\r\n<app-splash *ngIf=\"splashShow\" >\r\n\r\n</app-splash>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div id=\"cabeza\">\r\n        <a (click)=\"GoTo('inicio')\" >\r\n            <img src=\"assets/img/logo.png\" >\r\n        </a>\r\n        <li id=\"redes\" >\r\n            <ul>\r\n                <a href=\"https://www.facebook.com/Integrity-Solutions-688131024923581\" >\r\n                    <i class=\"fa fa-facebook fa-3x\"  >\r\n\r\n                    </i>\r\n                </a>\r\n                \r\n            </ul>\r\n            <ul>\r\n                <a href=\"https://www.linkedin.com/company/integrity-solutions-is-/\" >\r\n                    <i class=\"fa fa-linkedin fa-3x\"></i>   \r\n                </a>                    \r\n            </ul>\r\n            <ul >\r\n                <a href=\"https://api.whatsapp.com/send/?phone=593998841015&text=Hola, vengo del web site ISC me gustaría obtener mas información acerca de los servicios que ofrecen&app_absent=0\">\r\n                    <i class=\"fa fa-whatsapp fa-3x\"></i>\r\n                </a>\r\n                \r\n            </ul>\r\n        </li>            \r\n    </div>\r\n    <section id=\"cuerpo\">\r\n        \r\n    <div class=\"modulo\">\r\n        <h4>CONTÁCTANOS</h4>\r\n        <li>\r\n           \r\n            \r\n                <p>\r\n                    <span>E-Mail:</span>   <br>\r\n                    info@integritysolutions<br>.com.ec\r\n                </p>\r\n            \r\n            \r\n                <p>\r\n                    <span>Telefonos:</span>\r\n                     <br>\r\n                    (593) (4) 602 8000\r\n                </p>\r\n            \r\n                <p>\r\n                    <a href=\"https://www.google.com/maps/place/Integrity+Solutions/@-2.1935269,-79.8815903,15z/data=!4m5!3m4!1s0x0:0xedf2d014380f205a!8m2!3d-2.1935269!4d-79.8815903\" >\r\n                        <span>Direccion:</span>\r\n                        <br>\r\n                        Pedro Carbo # 613 <br> e/Luque y Aguirre <br>\r\n                        Edificio  Vignolo, Piso 5, Oficina <br>\r\n                        502\tGuayaquil - Ecuador\r\n                    </a>\r\n                    \r\n                </p>\r\n            \r\n        </li>\r\n     \r\n    </div>\r\n\r\n    <div class=\"modulo\" >\r\n        <h4>¿QUIENES SOMOS?</h4>\r\n        <li>\r\n            \r\n                <p (click)=\"GoTo('inicio')\">\r\n                    Nuestros Clientes\r\n                </p>\r\n            \r\n            \r\n                <p (click)=\"GoTo('inicio')\">\r\n                   Nuestras Alianzas\r\n                </p>\r\n            \r\n            \r\n                <p (click)=\"GoTo('contactanos')\">\r\n                    Contáctanos \r\n                </p>\r\n            \r\n            \r\n                <p (click)=\"GoTo('trabaja')\">\r\n                   Empleos Íntegros\r\n                </p>\r\n            \r\n        </li>   \r\n    </div>\r\n\r\n    <div class=\"modulo\" >\r\n        <h4>SERVICIOS</h4>\r\n        <li>\r\n            \r\n                <p (click)=\"GoTo('servicios',1)\" >\r\n                    Business Risk\r\n                </p>\r\n            \r\n            \r\n                <p (click)=\"GoTo('servicios',2)\">\r\n                    Technology Risk\r\n\r\n                </p>\r\n            \r\n                <p (click)=\"GoTo('servicios',3)\">\r\n                    Integration Services\r\n\r\n                </p>\r\n            \r\n         \r\n        </li>   \r\n    </div>\r\n    </section>\r\n    <section id=\"derechos\">\r\n        © Integrity Solutions 2020, Guayaquil, Ecuador\r\n    </section>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header  class=\"container\"  [ngStyle]=objetoStyle id=\"header\" >\r\n\r\n    <div id=\"logo-container\" >\r\n        <a (click)=\"GoTo('inicio')\">\r\n\r\n            <img [width]=\"anchoLogo\"  [height]=\"altoLogo\" src=\"assets/img/logo.png\">\r\n        </a>\r\n    </div>\r\n    <div *ngIf=\"showMenuVar\" class=\"container-nav\" id=\"menu-nav\">\r\n        <ul *ngFor=\"let recorre of menu\" (click)=\"GoTo(recorre.path)\" >\r\n            {{recorre.nombre}}\r\n        </ul>\r\n                \r\n    </div>  \r\n    <div *ngIf=\"showMenuSide\" class=\"container-nav\" id=\"boton-menu\" (click)=\"OpenMenu()\">\r\n        \r\n        <mat-icon>\r\n            menu\r\n        </mat-icon>\r\n    </div>\r\n    \r\n</header>\r\n\r\n<div id=\"menu\" >\r\n    <mat-icon (click)=\"CloseMenu()\" > close</mat-icon>\r\n\r\n    <ul *ngFor=\"let recorre of menu\" >\r\n        \r\n        <a (click)=\"GoTo(recorre.path)\"  >\r\n            {{recorre.nombre}}\r\n        </a>        \r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/splash/splash.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/splash/splash.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"splash\">\r\n            \r\n    <img src=\"assets/img/logoSimple.png\">\r\n        \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() | inicio-inicio-module */[__webpack_require__.e("default~inicio-inicio-module~trabaja-nosotros-trabaja-nosotros-module"), __webpack_require__.e("default~inicio-inicio-module~servicios-servicios-module"), __webpack_require__.e("inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./inicio/inicio.module */ "./src/app/inicio/inicio.module.ts")).then(function (x) { return x.InicioModule; }); }
    },
    {
        path: 'inicio',
        loadChildren: function () { return Promise.all(/*! import() | inicio-inicio-module */[__webpack_require__.e("default~inicio-inicio-module~trabaja-nosotros-trabaja-nosotros-module"), __webpack_require__.e("default~inicio-inicio-module~servicios-servicios-module"), __webpack_require__.e("inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./inicio/inicio.module */ "./src/app/inicio/inicio.module.ts")).then(function (x) { return x.InicioModule; }); }
    },
    {
        path: 'servicios',
        loadChildren: function () { return Promise.all(/*! import() | servicios-servicios-module */[__webpack_require__.e("default~inicio-inicio-module~servicios-servicios-module"), __webpack_require__.e("servicios-servicios-module")]).then(__webpack_require__.bind(null, /*! ./servicios/servicios.module */ "./src/app/servicios/servicios.module.ts")).then(function (x) { return x.ServiciosModule; }); }
    },
    {
        path: 'contactanos',
        loadChildren: function () { return Promise.all(/*! import() | contactanos-contactanos-module */[__webpack_require__.e("default~contactanos-contactanos-module~trabaja-nosotros-trabaja-nosotros-module"), __webpack_require__.e("contactanos-contactanos-module")]).then(__webpack_require__.bind(null, /*! ./contactanos/contactanos.module */ "./src/app/contactanos/contactanos.module.ts")).then(function (x) { return x.ContactanosModule; }); }
    },
    {
        path: 'trabaja',
        loadChildren: function () { return Promise.all(/*! import() | trabaja-nosotros-trabaja-nosotros-module */[__webpack_require__.e("default~contactanos-contactanos-module~trabaja-nosotros-trabaja-nosotros-module"), __webpack_require__.e("default~inicio-inicio-module~trabaja-nosotros-trabaja-nosotros-module"), __webpack_require__.e("trabaja-nosotros-trabaja-nosotros-module")]).then(__webpack_require__.bind(null, /*! ./trabaja-nosotros/trabaja-nosotros.module */ "./src/app/trabaja-nosotros/trabaja-nosotros.module.ts")).then(function (x) { return x.TrabajaNosotrosModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interface_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface/menu */ "./src/app/interface/menu.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(date, ruta) {
        var _this = this;
        this.ruta = ruta;
        this.title = 'IntegrityWebSite';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.splashShow = true;
        this.OnCloseSplash();
        this.ruta.events.subscribe(function (x) {
            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this.splashShow = true;
                x.url = x.url.substr(0, x.url.indexOf(';') === -1 ? x.url.length : x.url.indexOf(';'));
                if (_this.ruta.config.filter(function (recorre) { return "/" + recorre.path === x.url; }).length === 0) {
                    _this.ruta.navigate(["inicio"]);
                }
            }
        });
    }
    AppComponent.prototype.onLoad = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.splashShow = false;
        }, 1500);
    };
    AppComponent.prototype.OnCloseSplash = function () {
        var _this = this;
        _interface_menu__WEBPACK_IMPORTED_MODULE_1__["Disparador"].OnChangeComponent.subscribe(function () {
            setTimeout(function () {
                _this.splashShow = false;
            }, 1500);
        });
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
    };
    AppComponent.prototype.OnChangeComponent = function () {
        var _this = this;
        _interface_menu__WEBPACK_IMPORTED_MODULE_1__["Disparador"].OnChangeComponent.subscribe(function () {
            setTimeout(function () {
                _this.splashShow = false;
            }, 2000);
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("scroll", function () {
            if (_this.splashShow) {
                window.scrollTo(0, 0);
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])("splash")
    ], AppComponent.prototype, "event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])("window:load", ["$event"])
    ], AppComponent.prototype, "onLoad", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/splash/splash.component */ "./src/app/components/splash/splash.component.ts");
/* harmony import */ var _directiva_show_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directiva/show.module */ "./src/app/directiva/show.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_splash_splash_component__WEBPACK_IMPORTED_MODULE_11__["SplashComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _directiva_show_module__WEBPACK_IMPORTED_MODULE_12__["ShowModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nfooter\r\n{\r\n\r\n    padding: 0px;\r\n}\r\n\r\n#cabeza{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n#cabeza img{\r\n    width: 250px;\r\n    height: 210px;\r\n}\r\n\r\n#cabeza #redes\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    \r\n    color:rgb(4, 4, 88);        \r\n    \r\n    \r\n    \r\n}\r\n\r\n#cabeza #redes a\r\n{    \r\n    color:rgb(4, 4, 88);        \r\n    \r\n    \r\n    \r\n}\r\n\r\n#cabeza #redes ul i\r\n{\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    \r\n    \r\n}\r\n\r\n#cabeza a :hover\r\n{\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n#cabeza #redes i{\r\n    font-size: 30px;\r\n}\r\n\r\n#cabeza #redes i:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n#cuerpo\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    \r\n    -webkit-box-pack: justify;\r\n    \r\n            justify-content: space-between;\r\n    \r\n}\r\n\r\n.modulo\r\n{\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background: rgb(241, 239, 239);\r\n    margin: 30px;\r\n    border-top-left-radius: 30px ;\r\n    border-bottom-right-radius: 30px ;\r\n\r\n}\r\n\r\n.modulo h4{\r\n    color: rgb(4, 4, 88);        \r\n}\r\n\r\n.modulo li p\r\n{\r\n    font-weight: 500;    \r\n}\r\n\r\n.modulo li p  a\r\n{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.modulo li p span\r\n{\r\n    color: rgb(4, 4, 88);        \r\n}\r\n\r\n.modulo li p:hover\r\n{\r\n    cursor: pointer;\r\n    color: rgb(4, 4, 88);        \r\n    \r\n}\r\n\r\n.modulo li p:hover a\r\n{\r\n    cursor: pointer;\r\n    color: rgb(4, 4, 88);        \r\n    \r\n}\r\n\r\n#derechos\r\n{\r\n    background: rgb(241, 239, 239);\r\n}\r\n\r\n.modulo li\r\n{\r\n    \r\n\r\n    display: -webkit-box;\r\n    \r\n\r\n    display: flex;    \r\n    -webkit-box-orient: vertical;    \r\n    -webkit-box-direction: normal;    \r\n            flex-direction: column;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;    \r\n    padding: 0px;        \r\n    \r\n}\r\n\r\n.modulo li ul{\r\n    padding: 0px;\r\n}\r\n\r\n#derechos\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n    padding: 18px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .modulo\r\n    {\r\n        margin: 20px;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .modulo\r\n    {\r\n        margin: 10px;\r\n    }\r\n        \r\n}\r\n\r\n@media screen and (max-width: 658px) { \r\n    \r\n    #cuerpo\r\n    {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n    }        \r\n\r\n    \r\n    .modulo li p\r\n    {\r\n        font-weight: 300;    \r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 390px) { \r\n\r\n    #cabeza #redes ul i\r\n    {\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n        \r\n        \r\n    }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7SUFHSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7O0lBRW5CLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTs7SUFFSSxtQkFBbUI7Ozs7QUFJdkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7O0FBR3RCOztBQUNBOzs7SUFHSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7O0lBRW5CLHlCQUE4Qjs7WUFBOUIsOEJBQThCOztBQUVsQzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQVk7WUFBWixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBQ0E7O0lBRUksZUFBZTtJQUNmLG9CQUFvQjs7QUFFeEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLG9CQUFvQjs7QUFFeEI7O0FBRUE7O0lBRUksOEJBQThCO0FBQ2xDOztBQUNBOzs7O0lBSUksb0JBQWE7OztJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0k7O1FBRUksWUFBWTtRQUNaLGFBQWE7SUFDakI7QUFDSjs7QUFDQTtJQUNJOztRQUVJLFlBQVk7SUFDaEI7O0FBRUo7O0FBR0E7O0lBRUk7O1FBRUksb0JBQWE7UUFBYixhQUFhO1FBQ2IsNEJBQXNCO1FBQXRCLDZCQUFzQjtnQkFBdEIsc0JBQXNCO0lBQzFCOzs7SUFHQTs7UUFFSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7O0lBRUk7O1FBRUksaUJBQWlCO1FBQ2pCLGtCQUFrQjs7O0lBR3RCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvb3RlclxyXG57XHJcblxyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4jY2FiZXphe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jY2FiZXphIGltZ3tcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbn1cclxuXHJcbiNjYWJlemEgI3JlZGVzXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBjb2xvcjpyZ2IoNCwgNCwgODgpOyAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiNjYWJlemEgI3JlZGVzIGFcclxueyAgICBcclxuICAgIGNvbG9yOnJnYig0LCA0LCA4OCk7ICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuI2NhYmV6YSAjcmVkZXMgdWwgaVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2NhYmV6YSBhIDpob3ZlclxyXG57XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNjYWJlemEgI3JlZGVzIGl7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbiNjYWJlemEgI3JlZGVzIGk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjdWVycG9cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcblxyXG4ubW9kdWxvXHJcbntcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyMzksIDIzOSk7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4IDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4IDtcclxuXHJcbn1cclxuXHJcbi5tb2R1bG8gaDR7XHJcbiAgICBjb2xvcjogcmdiKDQsIDQsIDg4KTsgICAgICAgIFxyXG59XHJcblxyXG4ubW9kdWxvIGxpIHBcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICAgXHJcbn1cclxuXHJcbi5tb2R1bG8gbGkgcCAgYVxyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2R1bG8gbGkgcCBzcGFuXHJcbntcclxuICAgIGNvbG9yOiByZ2IoNCwgNCwgODgpOyAgICAgICAgXHJcbn1cclxuLm1vZHVsbyBsaSBwOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNCwgNCwgODgpOyAgICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuLm1vZHVsbyBsaSBwOmhvdmVyIGFcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHJnYig0LCA0LCA4OCk7ICAgICAgICBcclxuICAgIFxyXG59XHJcblxyXG4jZGVyZWNob3Ncclxue1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjM5LCAyMzkpO1xyXG59XHJcbi5tb2R1bG8gbGlcclxue1xyXG4gICAgXHJcblxyXG4gICAgZGlzcGxheTogZmxleDsgICAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICAgIFxyXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgXHJcbiAgICBcclxufVxyXG5cclxuLm1vZHVsbyBsaSB1bHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuI2RlcmVjaG9zXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxyXG4gICAgLm1vZHVsb1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLm1vZHVsb1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgICAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1OHB4KSB7IFxyXG4gICAgXHJcbiAgICAjY3VlcnBvXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgXHJcbiAgICAubW9kdWxvIGxpIHBcclxuICAgIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwOyAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7IFxyXG5cclxuICAgICNjYWJlemEgI3JlZGVzIHVsIGlcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_interface_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interface/menu */ "./src/app/interface/menu.ts");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-valid-value */ "./node_modules/is-valid-value/index.js");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_valid_value__WEBPACK_IMPORTED_MODULE_4__);





var FooterComponent = /** @class */ (function () {
    function FooterComponent(ruta) {
        this.ruta = ruta;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.GoTo = function (modulo, idParam) {
        if (is_valid_value__WEBPACK_IMPORTED_MODULE_4__["Validate"].value(idParam)) {
            this.ruta.navigate([modulo, { id: idParam }]);
        }
        else {
            this.ruta.navigate([modulo]);
        }
        src_app_interface_menu__WEBPACK_IMPORTED_MODULE_3__["Scroll"].move();
    };
    FooterComponent.prototype.ScrollTo = function (id) {
        var element = document.getElementById("elegirnos").getBoundingClientRect;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes animation-header{\r\n    0% { -webkit-transform: translateX(-1000px); transform: translateX(-1000px);}\r\n    \r\n    100% { -webkit-transform: translateX(0); transform: translateX(0); }\r\n\r\n}\r\n\r\n\r\n@keyframes animation-header{\r\n    0% { -webkit-transform: translateX(-1000px); transform: translateX(-1000px);}\r\n    \r\n    100% { -webkit-transform: translateX(0); transform: translateX(0); }\r\n\r\n}\r\n\r\n\r\n.container\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    -webkit-box-align: stretch;\r\n            align-items: stretch;\r\n    font-weight: 700;\r\n    color: rgb(2, 2, 63);    \r\n    \r\n    \r\n}\r\n\r\n\r\nheader#header{\r\n\r\n    margin:0px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    -webkit-animation-name: animation-header;\r\n            animation-name: animation-header;\r\n    \r\n    padding: 0px;\r\n    border:0px;\r\n    position: fixed;    \r\n    opacity: 0.9;\r\n    \r\n    z-index: 2;\r\n\r\n}\r\n\r\n\r\n.container-nav\r\n{\r\n    margin-left: auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;    \r\n    -webkit-box-orient: horizontal;    \r\n    -webkit-box-direction: normal;    \r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;    \r\n    \r\n    \r\n}\r\n\r\n\r\n#menu {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 3;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: rgb(4, 4, 88,0.9);\r\n    overflow: hidden;\r\n    box-shadow: -10px 1px 5px -6px rgba(0,0,0,0.75);\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;    \r\n  }\r\n\r\n\r\n#menu mat-icon{\r\n    -webkit-transition: 0.8s;\r\n    transition: 0.8s;\r\n    margin-top: 18px;\r\n    margin-bottom: 27px;\r\n    margin-left: 8px;\r\n    color: white;\r\n}\r\n\r\n\r\n#menu ul{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    color: white;    \r\n    -webkit-box-orient: vertical;    \r\n    -webkit-box-direction: normal;    \r\n            flex-direction: column;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    overflow: hidden;\r\n    margin-left: 8px;\r\n    margin-top: 23px;\r\n    margin-bottom: 23px;    \r\n    \r\n}\r\n\r\n\r\n#menu ul a{\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#menu mat-icon:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.container-nav:hover\r\n{\r\n    cursor: pointer;\r\n        \r\n}\r\n\r\n\r\n#logo-container\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n\r\n#logo-container a\r\n{\r\n    margin-left: 20px;\r\n    margin-right: 20px;    \r\n    \r\n\r\n}\r\n\r\n\r\n#logo-container a :hover\r\n{\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n\r\n#logo-container a img{\r\n    \r\n opacity: 1;   \r\n -webkit-transition: 2s;   \r\n transition: 2s;\r\n\r\n -webkit-animation-name: rotar;\r\n\r\n         animation-name: rotar;\r\n \r\n -webkit-animation-duration: 4s;\r\n \r\n         animation-duration: 4s;\r\n \r\n    \r\n}\r\n\r\n\r\n@-webkit-keyframes rotar{\r\n    \r\n    \r\n    80%{-webkit-transform: rotateX(360deg);transform: rotateX(360deg);}\r\n    \r\n}\r\n\r\n\r\n@keyframes rotar{\r\n    \r\n    \r\n    80%{-webkit-transform: rotateX(360deg);transform: rotateX(360deg);}\r\n    \r\n}\r\n\r\n\r\n.container-nav ul\r\n{\r\n    \r\n    \r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;    \r\n}\r\n\r\n\r\n*{\r\n    margin:0px;\r\n    padding: 0px;\r\n    border:0px;\r\n}\r\n\r\n\r\n#boton-menu mat-icon{\r\n    font-size: 35px;\r\n    padding-right: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1200px) { \r\n    .container-nav ul\r\n    {\r\n        font-size: 15px; \r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .container-nav ul\r\n    {\r\n        font-size: 11px; \r\n    }\r\n\r\n    \r\n    #boton-menu mat-icon{\r\n        font-size: 35px;\r\n    }\r\n\r\n\r\n    #menu mat-icon{\r\n        font-size: 19px;\r\n    }\r\n    \r\n    #menu ul{\r\n        font-size: 14px;\r\n    }    \r\n}\r\n\r\n\r\n@media screen and (max-width: 768px) { \r\n    #boton-menu mat-icon{\r\n        font-size: 29px;\r\n    }\r\n    \r\n\r\n    #logo-container a\r\n    {\r\n        margin-left: 4px;\r\n        margin-right: 4px;    \r\n    }\r\n\r\n    \r\n\r\n    \r\n}\r\n\r\n\r\n@media screen and (max-width: 390px) { \r\n\r\n    #menu ul{\r\n        font-size: 13x;\r\n    }    \r\n\r\n    #logo-container a\r\n    {\r\n        margin-left: 0px;\r\n        margin-right: 0px;    \r\n    }\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxLQUFLLHNDQUE4QixFQUE5Qiw4QkFBOEIsQ0FBQzs7SUFFcEMsT0FBTyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7O0FBRXJDOzs7QUFMQTtJQUNJLEtBQUssc0NBQThCLEVBQTlCLDhCQUE4QixDQUFDOztJQUVwQyxPQUFPLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTs7QUFFckM7OztBQUdBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsMEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9COzs7QUFHeEI7OztBQUtBOztJQUVJLFVBQVU7SUFDVix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7O0lBRWhDLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7O0lBRVosVUFBVTs7QUFFZDs7O0FBSUE7O0lBRUksaUJBQWlCO0lBQ2pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIscUJBQXlCO1lBQXpCLHlCQUF5Qjs7O0FBRzdCOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFHaEIsK0NBQStDO0lBQy9DLHdCQUFnQjtJQUFoQixnQkFBZ0I7RUFDbEI7OztBQUdGO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix1QkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7QUFFdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFLQTs7SUFFSSxlQUFlOztBQUVuQjs7O0FBQ0E7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7O0FBR3RCOzs7QUFFQTs7SUFFSSxlQUFlOztBQUVuQjs7O0FBRUE7O0NBRUMsVUFBVTtDQUNWLHNCQUFjO0NBQWQsY0FBYzs7Q0FFZCw2QkFBcUI7O1NBQXJCLHFCQUFxQjs7Q0FFckIsOEJBQXNCOztTQUF0QixzQkFBc0I7OztBQUd2Qjs7O0FBQ0E7OztJQUdJLElBQUksa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDOztBQUVuQzs7O0FBTEE7OztJQUdJLElBQUksa0NBQTBCLENBQTFCLDBCQUEwQixDQUFDOztBQUVuQzs7O0FBQ0E7Ozs7SUFJSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0FBQ2Q7OztBQUdDO0lBQ0csZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0k7O1FBRUksZUFBZTtJQUNuQjtBQUNKOzs7QUFHQTtJQUNJOztRQUVJLGVBQWU7SUFDbkI7OztJQUdBO1FBQ0ksZUFBZTtJQUNuQjs7O0lBR0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7O0lBR0E7O1FBRUksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7Ozs7QUFLSjs7O0FBRUE7O0lBRUk7UUFDSSxjQUFjO0lBQ2xCOztJQUVBOztRQUVJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7OztBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGFuaW1hdGlvbi1oZWFkZXJ7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTt9XHJcbiAgICBcclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYigyLCAyLCA2Myk7ICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuaGVhZGVyI2hlYWRlcntcclxuXHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb24taGVhZGVyO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAgICBcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIFxyXG4gICAgei1pbmRleDogMjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1uYXZcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgICAgXHJcbiAgICBcclxuICAgIFxyXG59XHJcbiNtZW51IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDQsIDg4LDAuOSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgICBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMXB4IDVweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xMHB4IDFweCA1cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogLTEwcHggMXB4IDVweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzOyAgICBcclxuICB9XHJcblxyXG5cclxuI21lbnUgbWF0LWljb257XHJcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbWVudSB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7ICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7ICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiNtZW51IHVsIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNtZW51IG1hdC1pY29uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyLW5hdjpob3ZlclxyXG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbn1cclxuI2xvZ28tY29udGFpbmVyXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiNsb2dvLWNvbnRhaW5lciBhXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuI2xvZ28tY29udGFpbmVyIGEgOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbiNsb2dvLWNvbnRhaW5lciBhIGltZ3tcclxuICAgIFxyXG4gb3BhY2l0eTogMTsgICBcclxuIHRyYW5zaXRpb246IDJzO1xyXG5cclxuIGFuaW1hdGlvbi1uYW1lOiByb3RhcjtcclxuIFxyXG4gYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuIFxyXG4gICAgXHJcbn1cclxuQGtleWZyYW1lcyByb3RhcntcclxuICAgIFxyXG4gICAgXHJcbiAgICA4MCV7dHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7fVxyXG4gICAgXHJcbn1cclxuLmNvbnRhaW5lci1uYXYgdWxcclxue1xyXG4gICAgXHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4OyAgICBcclxufVxyXG5cclxuKntcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXI6MHB4O1xyXG59XHJcblxyXG4gXHJcbiAjYm90b24tbWVudSBtYXQtaWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgICAuY29udGFpbmVyLW5hdiB1bFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAuY29udGFpbmVyLW5hdiB1bFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDsgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAjYm90b24tbWVudSBtYXQtaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNtZW51IG1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI21lbnUgdWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgI2JvdG9uLW1lbnUgbWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgI2xvZ28tY29udGFpbmVyIGFcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHsgXHJcblxyXG4gICAgI21lbnUgdWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3g7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgICNsb2dvLWNvbnRhaW5lciBhXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgICAgXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interface_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../interface/menu */ "./src/app/interface/menu.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(breakpoin, ruta) {
        this.breakpoin = breakpoin;
        this.ruta = ruta;
        this.altoLogo = 130;
        this.anchoLogo = 150;
        this.altoLogoNotScroll = 130;
        this.anchoLogoNotScroll = 150;
        this.altoLogoScroll = 90;
        this.anchoLogoScroll = 100;
        this.IsOpen = false;
        this.scrollAnterior = 0;
        this.widthMenu = "220px";
        this.showMenuSide = false;
        this.showMenuVar = true;
        this.menu = new Array();
        this.objetoStyle = {
            'background': 'transparent',
            '-webkit-box-shadow': '0px',
            '-moz-box-shadow': '0px',
            'box-shadow': '0px'
        };
        this.OnCloseMenu();
        this.menu = [{
                nombre: "Inicio",
                icono: "",
                path: "inicio"
            },
            {
                nombre: "Servicios",
                icono: "",
                path: "servicios"
            },
            {
                nombre: "Selecci\u00F3n \n        RH",
                icono: "",
                path: "trabaja"
            },
            {
                nombre: "Contactanos",
                icono: "",
                path: "contactanos"
            }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header = document.getElementById("header");
        this.breakpoin.observe(['(min-width:1024px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.showMenuVar = true;
                _this.showMenuSide = false;
                _this.ChangeLogo(130, 150, 90, 110);
            }
        });
        this.breakpoin.observe(['(max-width:1023px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.showMenuVar = false;
                _this.showMenuSide = true;
            }
        });
        this.breakpoin.observe(['(min-width:769px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.widthMenu = "220px";
                _this.ChangeLogo(130, 150, 90, 110);
            }
        });
        this.breakpoin.observe(['(max-width:768px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.widthMenu = "170px";
                _this.ChangeLogo(90, 120, 70, 100);
            }
        });
        this.breakpoin.observe(['(max-width:480px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.widthMenu = "150px";
            }
        });
        this.breakpoin.observe(['(min-width:481px)']).subscribe(function (retorno) {
            if (retorno.matches) {
                _this.widthMenu = "170px";
            }
        });
    };
    HeaderComponent.prototype.ChangeLogo = function (altoNotScroll, anchoNotScroll, altoScroll, anchoScroll) {
        this.altoLogoNotScroll = altoNotScroll;
        this.anchoLogoNotScroll = anchoNotScroll;
        this.altoLogoScroll = altoScroll;
        this.anchoLogoScroll = anchoScroll;
        this.altoLogo = this.altoLogoNotScroll;
        this.anchoLogo = this.anchoLogoNotScroll;
        if (window.scrollY > 70) {
            this.altoLogo = this.altoLogoScroll;
            this.anchoLogo = this.anchoLogoScroll;
        }
        else {
            this.altoLogo = this.altoLogoNotScroll;
            this.anchoLogo = this.anchoLogoNotScroll;
        }
    };
    HeaderComponent.prototype.onScrollEvent = function ($event) {
        if (window.scrollY > 70) {
            this.objetoStyle = {
                'background': 'white',
                '-webkit-box-shadow': '4px 9px 6px -6px rgba(0,0,0,0.75)',
                '-moz-box-shadow': '4px 9px 6px -6px rgba(0,0,0,0.75)',
                'box-shadow': '4px 9px 6px -6px rgba(0,0,0,0.75)'
            };
            this.anchoLogo = this.anchoLogoScroll;
            this.altoLogo = this.altoLogoScroll;
        }
        else {
            this.objetoStyle = {
                'background': 'transparent',
                '-webkit-box-shadow': '0px 0px 0px 0px white',
                '-moz-box-shadow': '0px 0px 0px 0px white',
                'box-shadow': '0px 0px 0px 0px white'
            };
            this.anchoLogo = this.anchoLogoNotScroll;
            this.altoLogo = this.altoLogoNotScroll;
        }
    };
    HeaderComponent.prototype.OpenMenu = function () {
        var menu = document.getElementById("menu");
        menu.style.width = this.widthMenu;
        this.IsOpen = true;
    };
    HeaderComponent.prototype.CloseMenu = function () {
        var menu = document.getElementById("menu");
        menu.style.width = "0px";
        this.IsOpen = false;
    };
    HeaderComponent.prototype.OnCloseMenu = function () {
        var _this = this;
        window.addEventListener("scroll", function () {
            _this.CloseMenu();
        });
        window.addEventListener("resize", function () {
            _this.CloseMenu();
        });
        window.addEventListener("click", function (event) {
            var boton = document.getElementById("boton-menu");
            var menu = document.getElementById("menu");
            if (!boton.contains(event.target) && !menu.contains(event.target) && _this.IsOpen) {
                _this.CloseMenu();
            }
        });
    };
    HeaderComponent.prototype.GoTo = function (modulo) {
        this.ruta.navigate([modulo]);
        _interface_menu__WEBPACK_IMPORTED_MODULE_1__["Scroll"].move();
        if (this.IsOpen) {
            this.CloseMenu();
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:scroll', ['$event'])
    ], HeaderComponent.prototype, "onScrollEvent", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/splash/splash.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/splash/splash.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#splash\r\n{\r\n    position: fixed;\r\n    background: white;\r\n    z-index: 4;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;    \r\n    -webkit-animation: fondo;    \r\n            animation: fondo;    \r\n    -webkit-animation-delay: 1s ;    \r\n            animation-delay: 1s ;\r\n    -webkit-animation-duration:2s;\r\n            animation-duration:2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n\r\n}\r\n\r\nbody{\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\n@-webkit-keyframes fondo\r\n{\r\n    0%{\r\n        \r\n        \r\n    }\r\n\r\n    25%{\r\n        \r\n        \r\n        \r\n        \r\n    }\r\n\r\n   50%{\r\n        background: rgb(4, 4, 88);                        \r\n    }\r\n\r\n\r\n    75%{\r\n        \r\n        \r\n        \r\n        \r\n    }\r\n\r\n    \r\n    100%{\r\n        \r\n        \r\n\r\n    }\r\n\r\n}\r\n\r\n@keyframes fondo\r\n{\r\n    0%{\r\n        \r\n        \r\n    }\r\n\r\n    25%{\r\n        \r\n        \r\n        \r\n        \r\n    }\r\n\r\n   50%{\r\n        background: rgb(4, 4, 88);                        \r\n    }\r\n\r\n\r\n    75%{\r\n        \r\n        \r\n        \r\n        \r\n    }\r\n\r\n    \r\n    100%{\r\n        \r\n        \r\n\r\n    }\r\n\r\n}\r\n\r\n@-webkit-keyframes rota\r\n{\r\n    0%{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        \r\n    }\r\n\r\n    25%{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        \r\n        \r\n        \r\n    }\r\n\r\n   50%{\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n        \r\n        \r\n        \r\n    }\r\n\r\n\r\n    75%{\r\n        \r\n        -webkit-transform: scale(1);\r\n        \r\n                transform: scale(1);\r\n        \r\n        \r\n    }\r\n\r\n    \r\n    100%{\r\n        -webkit-transform: scale(1) ;\r\n                transform: scale(1) ;\r\n        \r\n\r\n    }\r\n\r\n}\r\n\r\n@keyframes rota\r\n{\r\n    0%{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        \r\n    }\r\n\r\n    25%{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        \r\n        \r\n        \r\n    }\r\n\r\n   50%{\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n        \r\n        \r\n        \r\n    }\r\n\r\n\r\n    75%{\r\n        \r\n        -webkit-transform: scale(1);\r\n        \r\n                transform: scale(1);\r\n        \r\n        \r\n    }\r\n\r\n    \r\n    100%{\r\n        -webkit-transform: scale(1) ;\r\n                transform: scale(1) ;\r\n        \r\n\r\n    }\r\n\r\n}\r\n\r\n#splash img{\r\n    width:280px;\r\n    height:190px;        \r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-bottom: 10px;\r\n    z-index: 4;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-animation: rota;\r\n            animation: rota;\r\n    -webkit-animation-delay: 1s ;\r\n            animation-delay: 1s ;\r\n    -webkit-animation-duration:2s;\r\n            animation-duration:2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1AsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUNBOztJQUVJOzs7SUFHQTs7SUFFQTs7Ozs7SUFLQTs7R0FFRDtRQUNLLHlCQUF5QjtJQUM3Qjs7O0lBR0E7Ozs7O0lBS0E7OztJQUdBOzs7O0lBSUE7O0FBRUo7O0FBakNBOztJQUVJOzs7SUFHQTs7SUFFQTs7Ozs7SUFLQTs7R0FFRDtRQUNLLHlCQUF5QjtJQUM3Qjs7O0lBR0E7Ozs7O0lBS0E7OztJQUdBOzs7O0lBSUE7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSwyQkFBbUI7Z0JBQW5CLG1CQUFtQjs7OztJQUl2Qjs7R0FFRDtRQUNLLDJCQUFtQjtnQkFBbkIsbUJBQW1COzs7O0lBSXZCOzs7SUFHQTs7UUFFSSwyQkFBbUI7O2dCQUFuQixtQkFBbUI7OztJQUd2Qjs7O0lBR0E7UUFDSSw0QkFBb0I7Z0JBQXBCLG9CQUFvQjs7O0lBR3hCOztBQUVKOztBQXBDQTs7SUFFSTtRQUNJLDJCQUFtQjtnQkFBbkIsbUJBQW1COztJQUV2Qjs7SUFFQTtRQUNJLDJCQUFtQjtnQkFBbkIsbUJBQW1COzs7O0lBSXZCOztHQUVEO1FBQ0ssMkJBQW1CO2dCQUFuQixtQkFBbUI7Ozs7SUFJdkI7OztJQUdBOztRQUVJLDJCQUFtQjs7Z0JBQW5CLG1CQUFtQjs7O0lBR3ZCOzs7SUFHQTtRQUNJLDRCQUFvQjtnQkFBcEIsb0JBQW9COzs7SUFHeEI7O0FBRUo7O0FBS0M7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUFlO1lBQWYsZUFBZTtJQUNmLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGxhc2gvc3BsYXNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3BsYXNoXHJcbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBhbmltYXRpb246IGZvbmRvOyAgICBcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXMgO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcblxyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG59XHJcbkBrZXlmcmFtZXMgZm9uZG9cclxue1xyXG4gICAgMCV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgMjUle1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgNTAle1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig0LCA0LCA4OCk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIDc1JXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIDEwMCV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhXHJcbntcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgMjUle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgNzUle1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAjc3BsYXNoIGltZ3tcclxuICAgIHdpZHRoOjI4MHB4O1xyXG4gICAgaGVpZ2h0OjE5MHB4OyAgICAgICAgXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogcm90YTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXMgO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/splash/splash.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/splash/splash.component.ts ***!
  \*******************************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    SplashComponent.prototype.StopSplash = function () {
    };
    SplashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! raw-loader!./splash.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/components/splash/splash.component.css")]
        })
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "./src/app/directiva/show.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directiva/show.directive.ts ***!
  \*********************************************/
/*! exports provided: ShowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDirective", function() { return ShowDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ShowDirective = /** @class */ (function () {
    function ShowDirective(element, ruta) {
        this.element = element;
        this.ruta = ruta;
    }
    ShowDirective.prototype.ngOnInit = function () {
        this.AgregarEvento();
        var sons = this.element.nativeElement.childNodes;
        this.OnViewPort(sons);
    };
    ShowDirective.prototype.AgregarEvento = function () {
        var _this = this;
        var sons = this.element.nativeElement.childNodes;
        this.ChangeAspect(sons);
        window.addEventListener("load", function () {
            _this.OnViewPort(sons);
        });
        window.addEventListener("scroll", function () {
            _this.OnViewPort(sons);
        });
        window.addEventListener("resize", function () {
            _this.OnViewPort(sons);
        });
    };
    ShowDirective.prototype.ChangeAspect = function (sons) {
        var e_1, _a;
        try {
            for (var sons_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sons), sons_1_1 = sons_1.next(); !sons_1_1.done; sons_1_1 = sons_1.next()) {
                var recorre = sons_1_1.value;
                recorre.style.visibility = 'hidden';
                recorre.style.opacity = '0';
                recorre.style.transition = '1.8s';
                recorre.style.transitionDelay = '0.2s';
                recorre.style.transform = 'translateY(35px)';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sons_1_1 && !sons_1_1.done && (_a = sons_1.return)) _a.call(sons_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ShowDirective.prototype.OnViewPort = function (sons) {
        var e_2, _a;
        var altoViewPort = window.innerHeight;
        var distanciaElementViewPort = this.element.nativeElement.getBoundingClientRect().top;
        var diferencia = Number(distanciaElementViewPort.toFixed(0)) - Number(altoViewPort.toFixed(0));
        if (diferencia < -70) {
            try {
                for (var sons_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sons), sons_2_1 = sons_2.next(); !sons_2_1.done; sons_2_1 = sons_2.next()) {
                    var recorre = sons_2_1.value;
                    recorre.style.transform = 'translateY(0px)';
                    recorre.style.visibility = 'visible';
                    recorre.style.opacity = '1';
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (sons_2_1 && !sons_2_1.done && (_a = sons_2.return)) _a.call(sons_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    ShowDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ShowDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appShow]'
        })
    ], ShowDirective);
    return ShowDirective;
}());



/***/ }),

/***/ "./src/app/directiva/show.module.ts":
/*!******************************************!*\
  !*** ./src/app/directiva/show.module.ts ***!
  \******************************************/
/*! exports provided: ShowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowModule", function() { return ShowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _show_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.directive */ "./src/app/directiva/show.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ShowModule = /** @class */ (function () {
    function ShowModule() {
    }
    ShowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_show_directive__WEBPACK_IMPORTED_MODULE_1__["ShowDirective"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            exports: [
                _show_directive__WEBPACK_IMPORTED_MODULE_1__["ShowDirective"]
            ]
        })
    ], ShowModule);
    return ShowModule;
}());



/***/ }),

/***/ "./src/app/interface/menu.ts":
/*!***********************************!*\
  !*** ./src/app/interface/menu.ts ***!
  \***********************************/
/*! exports provided: Menu, Album, Opinion, Disparador, Servicios, Scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opinion", function() { return Opinion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disparador", function() { return Disparador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Servicios", function() { return Servicios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());

var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());

var Opinion = /** @class */ (function () {
    function Opinion() {
    }
    return Opinion;
}());

var Disparador = /** @class */ (function () {
    function Disparador() {
    }
    Disparador.OnChangeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    return Disparador;
}());

var Servicios = /** @class */ (function () {
    function Servicios() {
    }
    return Servicios;
}());

var Scroll = /** @class */ (function () {
    function Scroll() {
    }
    Scroll.move = function (top, left) {
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        window.scrollTo({
            top: top,
            left: left,
            behavior: 'smooth'
        });
    };
    return Scroll;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: host, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var host = 'https://apiisc.000webhostapp.com/';
var environment = {
    production: false,
    endpointImagenes: host + 'imagenes.php',
    endpointImagenesClientes: host + 'imagenes.php?tipo=clientes',
    endpointImagenesAlianzas: host + 'imagenes.php?tipo=alianzas',
    endpointImagenesSeleccion: host + 'imagenes.php?tipo=seleccion',
    endpointEmailPDF: host + 'emailpdf.php',
    endpointEmail: host + 'email.php'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\IntegrityWebSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map