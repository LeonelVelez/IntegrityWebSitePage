(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trabaja-nosotros-trabaja-nosotros-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/trabaja-nosotros/trabaja-nosotros.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/trabaja-nosotros/trabaja-nosotros.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [show]=\"showLoading\" >\r\n\r\n</app-loading >\r\n<app-message [show]=\"showMessage\" [icono]=\"icono\" [mensaje]=\"mensaje\">\r\n\r\n</app-message>\r\n\r\n<section id=\"fondo-trabaja\">\r\n    <div id=\"fondo-eslogan\">\r\n        <div>\r\n            <h1>TRABAJA CON <br>\r\n                NOSOTROS   \r\n             </h1>\r\n        </div>\r\n    </div> \r\n</section>\r\n<section id=\"load\">\r\n    <div>\r\n        <input [(ngModel)]=\"formulario.Nombre\" class=\"inputT\" name=\"nombre\" placeholder=\"Nombre\" (keyup)=\"InputValidacion('TEXT',$event.target.value,1)\" (focusout)=\"InputValidacion('TEXT',formulario.Nombre,1)\"  > \r\n        <p id=\"1\"></p>\r\n    </div>    \r\n\r\n    <div>\r\n        <input [(ngModel)]=\"formulario.Correo\" class=\"inputT\" name=\"correo\" placeholder=\"Correo\" (keyup)=\"InputValidacion('EMAIL',$event.target.value,2)\" (focusout)=\"InputValidacion('EMAIL',formulario.Correo,2)\"  > \r\n        <p id=\"2\"></p>\r\n    </div>    \r\n    <label for=\"myFile\">{{inputFileMessage}}</label>\r\n    <input [(ngModel)]=\"formulario.File\" type=\"file\" id=\"myFile\" name=\"filename\" (change)=\"ChangeFile($event)\" >\r\n    \r\n    <label id=\"button\" (click)=\"SendPdf()\">ENVIAR</label>\r\n    <p id=\"error\" >El archivo debe de ser formato pdf</p>\r\n</section>\r\n    \r\n <app-album [path]=\"direccionSeleccion\" titulo=\"PROCESOS DE SELECCIÓN\" idScroll=\"scrollTrabaja\" \r\n widhtImg=\"400\" heigthImg=\"500\" >\r\n\r\n \r\n \r\n\r\n \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/trabaja-nosotros/trabaja-nosotros-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/trabaja-nosotros/trabaja-nosotros-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TrabajaNosotrosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajaNosotrosRoutingModule", function() { return TrabajaNosotrosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabaja-nosotros.component */ "./src/app/trabaja-nosotros/trabaja-nosotros.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_1__["TrabajaNosotrosComponent"]
    }
];
let TrabajaNosotrosRoutingModule = class TrabajaNosotrosRoutingModule {
};
TrabajaNosotrosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], TrabajaNosotrosRoutingModule);



/***/ }),

/***/ "./src/app/trabaja-nosotros/trabaja-nosotros.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/trabaja-nosotros/trabaja-nosotros.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fondo-trabaja\r\n{\r\n    background-image: url('trabaja.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    padding: 0px;\r\n    margin:0px;\r\n    border:0px;\r\n    background-attachment: fixed;\r\n    \r\n    \r\n    \r\n\r\n}\r\n\r\n#load\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    padding: 40px;\r\n    padding-top: 40px;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n#load p\r\n{\r\n    color: red;\r\n    visibility: hidden;\r\n    margin-top: 14px;\r\n}\r\n\r\n#load input:focus {\r\n    outline: none;\r\n}\r\n\r\n#load input[type=\"file\"] {\r\n    width: 300px;\r\n    border: 0px;\r\n    display: block;\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\r\n        \r\n}\r\n\r\n#load p {\r\n    visibility: hidden;\r\n    font-size: 11px;\r\n    margin:0px;\r\n    height: 20px;\r\n    color: red;\r\n    padding: 0px;\r\n    visibility: hidden;    \r\n        \r\n}\r\n\r\n#load label#button{\r\n    margin-top: 30px;\r\n    color: rgb(4, 4, 88);\r\n    border: 1px;\r\n    border-color: rgb(4, 4, 88);\r\n    border-style: solid;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n    padding-left: 18px;\r\n    padding-right: 18px;\r\n    -webkit-transition: 0.4s;\r\n    transition: 0.4s;\r\n}\r\n\r\n#load label[for=\"myFile\"]{\r\n    background: rgb(4, 4, 88);\r\n    color: white;\r\n    padding: 10px;\r\n    padding-left: 19px;\r\n    padding-right: 19px;\r\n    \r\n    \r\n}\r\n\r\n#load label[for=\"myFile\"]:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n\r\n#load label#button:hover {\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n    cursor: pointer;\r\n}\r\n\r\n#fondo-eslogan\r\n{\r\n    padding: 150px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n}\r\n\r\n#fondo-eslogan div{\r\n    \r\n    background: rgb(4, 4, 88,0.7);\r\n    color: white;\r\n    font-weight: 100;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 40px;\r\n    padding-left: 80px;\r\n    padding-right: 80px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    max-width: 900px;\r\n}\r\n\r\n#fondo-eslogan div h1{\r\n    text-align: center;\r\n    font-size:33px;\r\n}\r\n\r\n*{\r\n    padding: 0px;\r\n    margin:0px;\r\n}\r\n\r\n.inputT\r\n{\r\n    border: 1px;       \r\n    border-color: black;\r\n    border-style: solid;\r\n    height: 20px;\r\n    border-radius: 4px;\r\n    width: 200px;\r\n    padding: 4px;\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    #fondo-eslogan\r\n    {\r\n        padding: 80px;\r\n                    \r\n    }        \r\n\r\n    #fondo-eslogan div h1{\r\n        font-size: 26px;\r\n    }\r\n\r\n\r\n    #fondo-eslogan div{\r\n        \r\n        padding-left: 70px;\r\n        padding-right: 70px;    \r\n        padding: 40px;\r\n        \r\n    }\r\n       \r\n}\r\n\r\n@media screen and (max-width: 390px) {     \r\n    #fondo-eslogan div h1{\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhYmFqYS1ub3NvdHJvcy90cmFiYWphLW5vc290cm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0NBQXVEO0lBQ3ZELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLDRCQUE0Qjs7Ozs7QUFLaEM7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1COzs7QUFHdkI7O0FBQ0E7O0lBRUksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2Qsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1Qjs7QUFFM0I7O0FBR0E7O0lBRUksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7O1FBRUksYUFBYTs7SUFFakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COzs7SUFHQTs7UUFFSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7O0lBRWpCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFiYWphLW5vc290cm9zL3RyYWJhamEtbm9zb3Ryb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb25kby10cmFiYWphXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vYXNzZXRzL2ltZy90cmFiYWphLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuI2xvYWRcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNsb2FkIHBcclxue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuXHJcbiNsb2FkIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4jbG9hZCBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgXHJcbn1cclxuXHJcbiNsb2FkIHAge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICAgIFxyXG4gICAgICAgIFxyXG59XHJcbiNsb2FkIGxhYmVsI2J1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDQsIDQsIDg4KTtcclxuICAgIGJvcmRlcjogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNCwgNCwgODgpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuXHJcbiNsb2FkIGxhYmVsW2Zvcj1cIm15RmlsZVwiXXtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0LCA0LCA4OCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTlweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuI2xvYWQgbGFiZWxbZm9yPVwibXlGaWxlXCJdOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiNsb2FkIGxhYmVsI2J1dHRvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZm9uZG8tZXNsb2dhblxyXG57XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG5cclxuI2ZvbmRvLWVzbG9nYW4gZGl2e1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgNCwgODgsMC43KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG5cclxuI2ZvbmRvLWVzbG9nYW4gZGl2IGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjMzcHg7XHJcbn1cclxuXHJcblxyXG4qe1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxufVxyXG5cclxuLmlucHV0VFxyXG57XHJcbiAgICBib3JkZXI6IDFweDsgICAgICAgXHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICAjZm9uZG8tZXNsb2dhblxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICAjZm9uZG8tZXNsb2dhbiBkaXYgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjZm9uZG8tZXNsb2dhbiBkaXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7ICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHsgICAgIFxyXG4gICAgI2ZvbmRvLWVzbG9nYW4gZGl2IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/trabaja-nosotros/trabaja-nosotros.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/trabaja-nosotros/trabaja-nosotros.component.ts ***!
  \****************************************************************/
/*! exports provided: TrabajaNosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajaNosotrosComponent", function() { return TrabajaNosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _interface_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../interface/email */ "./src/app/interface/email.ts");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-valid-value */ "./node_modules/is-valid-value/index.js");
/* harmony import */ var is_valid_value__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_valid_value__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _serviciosCall_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../serviciosCall/email.service */ "./src/app/serviciosCall/email.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interface_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/menu */ "./src/app/interface/menu.ts");







let TrabajaNosotrosComponent = class TrabajaNosotrosComponent {
    constructor(emailServ) {
        this.emailServ = emailServ;
        this.inputFileMessage = "Suba su cv pdf";
        this.showLoading = false;
        this.showMessage = false;
        this.icono = "";
        this.mensaje = "";
        this.formulario = {
            Nombre: '',
            Correo: '',
            File: ''
        };
        this.mensajeError = "";
        this.tipoValidacion = {
            _TEXT: "TEXT",
            _NUMBER: "NUMBER",
            _EMAIL: "EMAIL",
            _EMPTY: "EMPTY",
        };
        this.mensjaes = [{
                tipo: this.tipoValidacion._TEXT,
                mensaje: `Solos se permiten letras`
            },
            {
                tipo: this.tipoValidacion._NUMBER,
                mensaje: `Solos se permiten numeros`
            },
            {
                tipo: this.tipoValidacion._EMAIL,
                mensaje: `No es un email valido`
            },
            {
                tipo: this.tipoValidacion._EMPTY,
                mensaje: `Espacios en blancos`
            },
        ];
        this.formValidado = false;
        this.direccionSeleccion = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].endpointImagenesSeleccion;
        _interface_menu__WEBPACK_IMPORTED_MODULE_6__["Scroll"].move();
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        _interface_menu__WEBPACK_IMPORTED_MODULE_6__["Disparador"].OnChangeComponent.emit();
    }
    ChangeFile(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.inputFileMessage = event.target.files[0].name;
            this.inputFile = event.target.files[0];
            const valida = /[.pdf]$/;
            if (valida.test(this.inputFileMessage)) {
                let error = document.getElementById("error");
                error.style.visibility = "hidden";
                this.formValidado = true;
            }
            else {
                let error = document.getElementById("error");
                this.formValidado = false;
                error.style.visibility = "visible";
            }
        });
    }
    SendPdf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.formValidado) {
                if (this.formulario.Correo != "" && this.formulario.Nombre != "" && this.inputFileMessage != "Suba su cv pdf") {
                    const base64File = yield this.toBase64(this.inputFile);
                    let objetoPdf = new _interface_email__WEBPACK_IMPORTED_MODULE_1__["EmailPdf"]();
                    objetoPdf.pdf = base64File;
                    objetoPdf.nombre = this.formulario.Nombre;
                    objetoPdf.correo = this.formulario.Correo;
                    this.showLoading = true;
                    this.emailServ.sendEmailPdf(objetoPdf).subscribe((x) => {
                        this.showLoading = false;
                        console.log(x);
                        if (x.enviado) {
                            this.icono = "mail_outline";
                            this.mensaje = "¡Mensaje Enviado!";
                            this.showMessage = true;
                            setTimeout(() => this.showMessage = false, 1200);
                            this.ClearForm();
                        }
                        else {
                            this.icono = "close";
                            this.mensaje = "¡Mensaje No Enviado!";
                            this.showMessage = true;
                            setTimeout(() => this.showMessage = false, 12000);
                        }
                    }, error => {
                        this.showLoading = false;
                        console.log(error);
                        this.icono = "close";
                        this.mensaje = "¡Mensaje No Enviado!";
                        this.showMessage = true;
                        setTimeout(() => this.showMessage = false, 12000);
                    });
                }
            }
        });
    }
    ClearForm() {
        this.formulario.Correo = "";
        this.formulario.Nombre = "";
        this.inputFileMessage = "Suba su cv pdf";
        this.formulario.File = "";
    }
    toBase64(input) {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(input);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }
    Validacion(type, value) {
        let retorno = true;
        switch (type.toUpperCase()) {
            case this.tipoValidacion._TEXT:
                retorno = this.ProcesoValidación(/^[a-zA-Z]+$/, value, this.tipoValidacion._TEXT);
                break;
            case this.tipoValidacion._NUMBER:
                retorno = this.ProcesoValidación(/^[0-9]+$/, value, this.tipoValidacion._NUMBER);
                break;
            case this.tipoValidacion._EMAIL:
                retorno = this.ProcesoValidación(/[@][a-zA-Z]+[.]/, value, this.tipoValidacion._EMAIL);
                break;
            default:
                if (!is_valid_value__WEBPACK_IMPORTED_MODULE_2__["Validate"].value(value)) {
                    retorno = false;
                    this.mensajeError = this.mensjaes.find(x => x.tipo === this.tipoValidacion._EMPTY).mensaje;
                }
                break;
        }
        return retorno;
    }
    ProcesoValidación(expre, value, tipo) {
        let retorno = true;
        if (is_valid_value__WEBPACK_IMPORTED_MODULE_2__["Validate"].value(value)) {
            let expresionReg = expre;
            if (!expresionReg.test(value)) {
                this.mensjaes.forEach((x) => {
                    if (x.tipo === tipo) {
                        this.mensajeError = x.mensaje;
                    }
                });
                retorno = false;
            }
        }
        else {
            this.mensajeError = this.mensjaes.find(x => x.tipo === this.tipoValidacion._EMPTY).mensaje;
            retorno = false;
        }
        return retorno;
    }
    InputValidacion(type, value, id) {
        console.log(value);
        if (!this.Validacion(type, value.trim())) {
            this.formValidado = false;
            this.ChangeApariencia(id, true);
        }
        else {
            this.formValidado = true;
            this.ChangeApariencia(id, false);
        }
    }
    ChangeApariencia(id, show) {
        let parrafoMensaje = document.getElementById(id);
        if (show) {
            parrafoMensaje.style.visibility = 'visible';
            parrafoMensaje.innerHTML = this.mensajeError;
        }
        else {
            parrafoMensaje.style.visibility = 'hidden';
        }
    }
};
TrabajaNosotrosComponent.ctorParameters = () => [
    { type: _serviciosCall_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
];
TrabajaNosotrosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-trabaja-nosotros',
        template: __webpack_require__(/*! raw-loader!./trabaja-nosotros.component.html */ "./node_modules/raw-loader/index.js!./src/app/trabaja-nosotros/trabaja-nosotros.component.html"),
        styles: [__webpack_require__(/*! ./trabaja-nosotros.component.css */ "./src/app/trabaja-nosotros/trabaja-nosotros.component.css")]
    })
], TrabajaNosotrosComponent);



/***/ }),

/***/ "./src/app/trabaja-nosotros/trabaja-nosotros.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/trabaja-nosotros/trabaja-nosotros.module.ts ***!
  \*************************************************************/
/*! exports provided: TrabajaNosotrosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajaNosotrosModule", function() { return TrabajaNosotrosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_message_message_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/message/message.module */ "./src/app/components/message/message.module.ts");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trabaja-nosotros.component */ "./src/app/trabaja-nosotros/trabaja-nosotros.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _trabaja_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trabaja-nosotros-routing.module */ "./src/app/trabaja-nosotros/trabaja-nosotros-routing.module.ts");
/* harmony import */ var _components_album_album_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/album/album.module */ "./src/app/components/album/album.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");










let TrabajaNosotrosModule = class TrabajaNosotrosModule {
};
TrabajaNosotrosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _trabaja_nosotros_component__WEBPACK_IMPORTED_MODULE_4__["TrabajaNosotrosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _components_album_album_module__WEBPACK_IMPORTED_MODULE_8__["AlbumModule"],
            _trabaja_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_7__["TrabajaNosotrosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_2__["LoadingModule"],
            _components_message_message_module__WEBPACK_IMPORTED_MODULE_1__["MessageModule"]
        ]
    })
], TrabajaNosotrosModule);



/***/ })

}]);
//# sourceMappingURL=trabaja-nosotros-trabaja-nosotros-module-es2015.js.map