(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~inicio-inicio-module~servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inicio-elegirnos/inicio-elegirnos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inicio-elegirnos/inicio-elegirnos.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\r\n    <app-titulo [titulo]=\"titulo\" id=\"elegirnos\" [color]=\"colorFondoTitulo\"> </app-titulo>\r\n        \r\n    <div class=\"container-card\" id=\"container-elegirnos\">\r\n        <div class=\"item\" >     \r\n            <p [innerHTML]=\"parrafo\">                \r\n                \r\n            </p>                    \r\n        </div>\r\n        \r\n        <div class=\"item\" >\r\n            <img [src]=\"imagen\"  > \r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/titulo/titulo.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/titulo/titulo.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [id]=\"'cont-titulo'+id\" class=\"cont-titulo\" appShow>\r\n    <h2 class=\"titulo-card\"  >{{titulo}}</h2>\r\n</div>\r\n<section appShow>\r\n    <div [id]=\"'border'+id\" class=\"border\" >\r\n\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/inicio-elegirnos/inicio-elegirnos.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/inicio-elegirnos/inicio-elegirnos.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    \r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#container-elegirnos{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    justify-content: space-around;\r\n    padding-bottom: 20px;    \r\n\r\n    \r\n}\r\n\r\n.item\r\n{\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    \r\n    \r\n}\r\n\r\n#container-elegirnos .item:first-child{\r\n    \r\n    border-top-left-radius: 100px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    border-bottom-right-radius: 100px;\r\n}\r\n\r\n#container-elegirnos .item:first-child p{\r\n    padding: 20px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    max-width: 700px;\r\n    font-size: 17px;\r\n}\r\n\r\n#container-elegirnos .item img{\r\n  \r\n    width:420px; height:330px;\r\n  \r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .titulo-card\r\n    {\r\n        font-size: 18px;\r\n        width: 260px;\r\n    }\r\n    #container-elegirnos .item:first-child p{\r\n        padding: 20px;\r\n        font-size: 15px;\r\n    }\r\n\r\n    #container-elegirnos .item img{\r\n        \r\n        width:380px; height:310px;\r\n        \r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    \r\n    .titulo-card\r\n    {\r\n        font-size: 16px;\r\n        width: 200px;\r\n    \r\n    }\r\n    \r\n    #container-elegirnos .item img{\r\n        \r\n        width:200px; height:140px;\r\n        text-align: center;\r\n        \r\n    }\r\n    #container-elegirnos .item:last-child {\r\n        \r\n       \r\n       text-align: center;\r\n       display: -webkit-box;\r\n       display: flex;\r\n       -webkit-box-align: center;\r\n               align-items: center;        \r\n    }\r\n    #container-elegirnos .item:first-child p{\r\n        padding: 17px;\r\n        font-size: 12px;\r\n    }\r\n    \r\n    \r\n}\r\n\r\n@media screen and (max-width: 480px) { \r\n    \r\n    #container-elegirnos .item img{\r\n        \r\n        width:120px; height:120px;\r\n        \r\n        \r\n    }\r\n    #container-elegirnos .item:first-child p{\r\n        padding: 20px;\r\n        \r\n    }\r\n\r\n    \r\n}\r\n\r\n@media screen and (max-width: 390px) { \r\n    \r\n    #container-elegirnos .item img{\r\n        \r\n        width:90px; height:105px;\r\n        \r\n        \r\n    }\r\n    #container-elegirnos .item:first-child p{\r\n        padding: 20px;\r\n        font-size: 11px;\r\n    }\r\n    .item\r\n    {\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n        \r\n    }\r\n   \r\n}\r\n\r\n@media screen and (max-width: 300px) { \r\n    .titulo-card\r\n    {\r\n        font-size: 11px;\r\n        width: 90px;\r\n    \r\n    }\r\n       \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8tZWxlZ2lybm9zL2luaWNpby1lbGVnaXJub3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0JBQW9COzs7QUFHeEI7O0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBYztJQUFkLGNBQWM7OztBQUdsQjs7QUFDQTs7SUFFSSw2QkFBNkI7SUFDN0Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixzQkFBYztJQUFkLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQWM7SUFBZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBR0E7O0lBRUksV0FBVyxFQUFFLFlBQVk7O0FBRTdCOztBQUdBO0lBQ0k7O1FBRUksZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBOztRQUVJLFdBQVcsRUFBRSxZQUFZOztJQUU3Qjs7QUFFSjs7QUFDQTs7SUFFSTs7UUFFSSxlQUFlO1FBQ2YsWUFBWTs7SUFFaEI7O0lBRUE7O1FBRUksV0FBVyxFQUFFLFlBQVk7UUFDekIsa0JBQWtCOztJQUV0QjtJQUNBOzs7T0FHRyxrQkFBa0I7T0FDbEIsb0JBQWE7T0FBYixhQUFhO09BQ2IseUJBQW1CO2VBQW5CLG1CQUFtQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7OztBQUdKOztBQUlBOztJQUVJOztRQUVJLFdBQVcsRUFBRSxZQUFZOzs7SUFHN0I7SUFDQTtRQUNJLGFBQWE7O0lBRWpCOzs7QUFHSjs7QUFHQTs7SUFFSTs7UUFFSSxVQUFVLEVBQUUsWUFBWTs7O0lBRzVCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtJQUNBOztRQUVJLGlCQUFpQjtRQUNqQixrQkFBa0I7O0lBRXRCOztBQUVKOztBQUdBO0lBQ0k7O1FBRUksZUFBZTtRQUNmLFdBQVc7O0lBRWY7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby1lbGVnaXJub3MvaW5pY2lvLWVsZWdpcm5vcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXItZWxlZ2lybm9ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4OyAgICBcclxuXHJcbiAgICBcclxufVxyXG4uaXRlbVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jY29udGFpbmVyLWVsZWdpcm5vcyAuaXRlbTpmaXJzdC1jaGlsZHtcclxuICAgIFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXItZWxlZ2lybm9zIC5pdGVtOmZpcnN0LWNoaWxkIHB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuI2NvbnRhaW5lci1lbGVnaXJub3MgLml0ZW0gaW1ne1xyXG4gIFxyXG4gICAgd2lkdGg6NDIwcHg7IGhlaWdodDozMzBweDtcclxuICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuICAgIC50aXR1bG8tY2FyZFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICB9XHJcbiAgICAjY29udGFpbmVyLWVsZWdpcm5vcyAuaXRlbTpmaXJzdC1jaGlsZCBwe1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWluZXItZWxlZ2lybm9zIC5pdGVtIGltZ3tcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDozODBweDsgaGVpZ2h0OjMxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXHJcbiAgICBcclxuICAgIC50aXR1bG8tY2FyZFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2NvbnRhaW5lci1lbGVnaXJub3MgLml0ZW0gaW1ne1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOjIwMHB4OyBoZWlnaHQ6MTQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2NvbnRhaW5lci1lbGVnaXJub3MgLml0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjY29udGFpbmVyLWVsZWdpcm5vcyAuaXRlbTpmaXJzdC1jaGlsZCBwe1xyXG4gICAgICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuICAgIFxyXG4gICAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgXHJcbiAgICAjY29udGFpbmVyLWVsZWdpcm5vcyAuaXRlbSBpbWd7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6MTIwcHg7IGhlaWdodDoxMjBweDtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICNjb250YWluZXItZWxlZ2lybm9zIC5pdGVtOmZpcnN0LWNoaWxkIHB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7IFxyXG4gICAgXHJcbiAgICAjY29udGFpbmVyLWVsZWdpcm5vcyAuaXRlbSBpbWd7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6OTBweDsgaGVpZ2h0OjEwNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgI2NvbnRhaW5lci1lbGVnaXJub3MgLml0ZW06Zmlyc3QtY2hpbGQgcHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICAgIC5pdGVtXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7IFxyXG4gICAgLnRpdHVsby1jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/inicio-elegirnos/inicio-elegirnos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/inicio-elegirnos/inicio-elegirnos.component.ts ***!
  \***************************************************************************/
/*! exports provided: InicioElegirnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioElegirnosComponent", function() { return InicioElegirnosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioElegirnosComponent = /** @class */ (function () {
    function InicioElegirnosComponent() {
        this.colorFondoTitulo = "rgb(4, 4, 88)";
    }
    InicioElegirnosComponent.prototype.ngOnInit = function () {
        var parrafo = document.querySelector("#container-elegirnos .item:first-child p");
        var fondoParrafo = document.querySelector("#container-elegirnos .item:first-child");
        var fondCard = document.querySelector(".card");
        var titulo = document.querySelector(".titulo-card");
        parrafo.style.color = this.colorFuentearrafo;
        fondoParrafo.style.background = this.colorFondoParrafo;
        fondCard.style.background = this.colorFondo;
        titulo.style.color = this.colorFondoTitulo;
        titulo.style.borderColor = this.colorFondoTitulo;
    };
    InicioElegirnosComponent.prototype.LlenarOpiniones = function () {
    };
    InicioElegirnosComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("parrafo")
    ], InicioElegirnosComponent.prototype, "parrafo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("imagen")
    ], InicioElegirnosComponent.prototype, "imagen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("colorFondo")
    ], InicioElegirnosComponent.prototype, "colorFondo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("titulo")
    ], InicioElegirnosComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("colorFondoTitulo")
    ], InicioElegirnosComponent.prototype, "colorFondoTitulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("colorFondoParrafo")
    ], InicioElegirnosComponent.prototype, "colorFondoParrafo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("colorFuentearrafo")
    ], InicioElegirnosComponent.prototype, "colorFuentearrafo", void 0);
    InicioElegirnosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio-elegirnos',
            template: __webpack_require__(/*! raw-loader!./inicio-elegirnos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inicio-elegirnos/inicio-elegirnos.component.html"),
            styles: [__webpack_require__(/*! ./inicio-elegirnos.component.css */ "./src/app/components/inicio-elegirnos/inicio-elegirnos.component.css")]
        })
    ], InicioElegirnosComponent);
    return InicioElegirnosComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio-elegirnos/inicio-elegirnos.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/inicio-elegirnos/inicio-elegirnos.module.ts ***!
  \************************************************************************/
/*! exports provided: InicioElegirnosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioElegirnosModule", function() { return InicioElegirnosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _titulo_titulo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../titulo/titulo.module */ "./src/app/components/titulo/titulo.module.ts");
/* harmony import */ var _directiva_show_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../directiva/show.module */ "./src/app/directiva/show.module.ts");
/* harmony import */ var _inicio_elegirnos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-elegirnos.component */ "./src/app/components/inicio-elegirnos/inicio-elegirnos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var InicioElegirnosModule = /** @class */ (function () {
    function InicioElegirnosModule() {
    }
    InicioElegirnosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _inicio_elegirnos_component__WEBPACK_IMPORTED_MODULE_3__["InicioElegirnosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _directiva_show_module__WEBPACK_IMPORTED_MODULE_2__["ShowModule"],
                _titulo_titulo_module__WEBPACK_IMPORTED_MODULE_1__["TituloModule"]
            ],
            exports: [
                _inicio_elegirnos_component__WEBPACK_IMPORTED_MODULE_3__["InicioElegirnosComponent"]
            ]
        })
    ], InicioElegirnosModule);
    return InicioElegirnosModule;
}());



/***/ }),

/***/ "./src/app/components/titulo/titulo.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/titulo/titulo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n.titulo-card\r\n{\r\n    \r\n    margin: auto;\r\n    width: 300px;    \r\n    padding-bottom: 8px;\r\n    padding-top: 13px;    \r\n    -webkit-transition: 1s;    \r\n    transition: 1s;\r\n    text-align: center;\r\n    \r\n \r\n}\r\n\r\n.cont-titulo\r\n{\r\n    font-size: 17px;\r\n    margin: 0 0 0 0px;\r\n    padding: 0 0 0 0px;    \r\n    \r\n    position: relative;    \r\n}\r\n\r\n.border\r\n{\r\n    \r\n    bottom: 1;\r\n    content: '';\r\n    display: block;\r\n    height: 3px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;    \r\n    position: absolute;    \r\n    width: 50px;\r\n}\r\n\r\n@media screen and (max-width: 480px) { \r\n    .cont-titulo\r\n    {\r\n        font-size: 13px;\r\n        \r\n    }\r\n    \r\n    \r\n    .border\r\n    {\r\n\r\n        width: 35px;\r\n    }   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXR1bG8vdGl0dWxvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTs7O0lBR0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFjO0lBQWQsY0FBYztJQUNkLGtCQUFrQjs7O0FBR3RCOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCOztJQUVsQixrQkFBa0I7QUFDdEI7O0FBR0E7OztJQUdJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxzQkFBYztJQUFkLGNBQWM7SUFDZCxZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0k7O1FBRUksZUFBZTs7SUFFbkI7OztJQUdBOzs7UUFHSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGl0dWxvL3RpdHVsby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcblxyXG4udGl0dWxvLWNhcmRcclxue1xyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7ICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4OyAgICBcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiBcclxufVxyXG5cclxuLmNvbnQtdGl0dWxvXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbjogMCAwIDAgMHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMHB4OyAgICBcclxuICAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxufVxyXG5cclxuXHJcbi5ib3JkZXJcclxue1xyXG4gICAgXHJcbiAgICBib3R0b206IDE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDsgICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgLmNvbnQtdGl0dWxvXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5ib3JkZXJcclxuICAgIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICB9ICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/titulo/titulo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/titulo/titulo.component.ts ***!
  \*******************************************************/
/*! exports provided: TituloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloComponent", function() { return TituloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TituloComponent = /** @class */ (function () {
    function TituloComponent() {
        this.color = "rgb(4, 4, 88)";
    }
    TituloComponent.prototype.ngOnInit = function () {
    };
    TituloComponent.prototype.ngAfterViewChecked = function () {
        var tituloel = document.getElementById("cont-titulo" + this.id);
        var border = document.getElementById("border" + this.id);
        tituloel.style.color = this.color;
        border.style.backgroundColor = this.color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TituloComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TituloComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TituloComponent.prototype, "id", void 0);
    TituloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-titulo',
            template: __webpack_require__(/*! raw-loader!./titulo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/titulo/titulo.component.html"),
            styles: [__webpack_require__(/*! ./titulo.component.css */ "./src/app/components/titulo/titulo.component.css")]
        })
    ], TituloComponent);
    return TituloComponent;
}());



/***/ }),

/***/ "./src/app/components/titulo/titulo.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/titulo/titulo.module.ts ***!
  \****************************************************/
/*! exports provided: TituloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TituloModule", function() { return TituloModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _directiva_show_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../directiva/show.module */ "./src/app/directiva/show.module.ts");
/* harmony import */ var _titulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titulo.component */ "./src/app/components/titulo/titulo.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var TituloModule = /** @class */ (function () {
    function TituloModule() {
    }
    TituloModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _titulo_component__WEBPACK_IMPORTED_MODULE_2__["TituloComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _directiva_show_module__WEBPACK_IMPORTED_MODULE_1__["ShowModule"]
            ],
            exports: [
                _titulo_component__WEBPACK_IMPORTED_MODULE_2__["TituloComponent"]
            ]
        })
    ], TituloModule);
    return TituloModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~inicio-inicio-module~servicios-servicios-module-es5.js.map