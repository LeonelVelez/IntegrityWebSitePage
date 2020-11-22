(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio-servicios/inicio-servicios.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/inicio-servicios/inicio-servicios.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  >\r\n    <app-titulo titulo=\"NUESTROS SERVICIOS\"  id=\"inicioservicios\"> </app-titulo>\r\n\r\n    \r\n    <div class=\"container-card\" id=\"container-servicios\">\r\n        <div class=\"item\">             \r\n                <a  (click)=\"GoToServe(1)\" >\r\n                    <h3>Business Risk</h3>\r\n                    <mat-icon>business</mat-icon>      \r\n                    <div  class=\"serv-items\" >\r\n                        \r\n                            <ul>\r\n                                Documentación y Optimización de Procesos                                \r\n                            </ul>\r\n                            <ul>\r\n                                Evaluación Cualitativa y Cuantitativa de riesgos operacionales\r\n                            </ul>\r\n                            <ul>\r\n                                Eficiencia Operativa\r\n                            </ul>\r\n                            <ul>\r\n                                Capacitación y Cumplimiento de la Norma de <br> Calidad ISO9001                                \r\n                            </ul> \r\n                        \r\n                        \r\n                    </div>                                                                \r\n                </a>                        \r\n        </div>\r\n        \r\n        <div class=\"item\">\r\n            <a  (click)=\"GoToServe(2)\">\r\n                <h3>Technology Risk</h3>\r\n                <mat-icon>developer_board</mat-icon>  \r\n                <div  class=\"serv-items\" >\r\n                    <ul>\r\n                        Capacitación y Cumplimiento  de  la  Norma  ISO27001\r\n                    </ul>\r\n                     <ul>\r\n                        Gestión de Seguridad de la Información\r\n                     </ul>\r\n                     <ul>\r\n                        PCI-DSS Compliance\r\n                     </ul>\r\n                     <ul>\r\n                        Auditorías de TI\r\n                     </ul>                \r\n                </div>\r\n                \r\n                \r\n            </a>\r\n        </div>\r\n        \r\n        <div class=\"item\">\r\n            <a  (click)=\"GoToServe(3)\">\r\n                <h3>Integration Services</h3>\r\n                <mat-icon>lock</mat-icon>  \r\n                <div class=\"serv-items\" >\r\n                    <ul>\r\n                        Software Factory\r\n                    </ul>\r\n                    <ul>\r\n                        Gestión del cambio\r\n                    </ul>\r\n                    <ul>\r\n                        Control de Calidad de proyectos <br> \r\n                        y aplicaciones.\r\n\r\n                    </ul>\r\n                    <ul>\r\n                        Business Intelligence\r\n                    </ul>                \r\n                </div>\r\n                \r\n            </a>\r\n        </div>\r\n\r\n        \r\n        \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/inicio.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-portada>\r\n\r\n</app-portada>\r\n\r\n<app-inicio-servicios id=\"inicioServicios\" \r\n\r\n\r\n>\r\n    \r\n</app-inicio-servicios>\r\n<app-inicio-elegirnos id=\"elegirnos\" [parrafo]=\"parrafoElegirnos\" [imagen]=\"imagenElegirnos\" [titulo]=\"tituloElegirnos\" \r\ncolorFuentearrafo=\"black\" colorFondo=\"white\" colorFondoParrafo=\"rgb(241, 239, 239)\"\r\n>\r\n\r\n    \r\n</app-inicio-elegirnos >\r\n<app-album [path]=\"direccionCliente\" titulo=\"NUESTROS CLIENTES\" idScroll=\"scrollCliente\" \r\n\r\n>\r\n\r\n</app-album>\r\n\r\n\r\n<app-album [path]=\"direccionAlianza\" titulo=\"NUESTRAS ALIANZAS\" idScroll=\"scrollAlianzas\" \r\n\r\n>\r\n\r\n</app-album>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/opinion/opinion.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/opinion/opinion.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\" >\r\n    <app-titulo titulo=\"TESTIMONIO\" color=\"white\" id=\"opinion\"> </app-titulo>\r\n    \r\n    <div class=\"container-card\" id=\"container-opinion\" >\r\n                \r\n        <div class=\"item\">\r\n            \r\n            <div id=\"opinion\" >\r\n                <p  id=\"opinionParrafo\">\r\n                   {{opinion.opinion}} \r\n                </p>                \r\n            </div>  \r\n\r\n            <div id=\"persona\"  >\r\n                <p  id=\"personaParrafo\" >{{opinion.persona}} </p>\r\n            </div>    \r\n        </div>\r\n            \r\n        \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inicio/portada/portada.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inicio/portada/portada.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"portada\">\r\n    <h1 > <span id=\"nombre-empresa\">INTEGRITY</span>  SOLUTIONS </h1>    \r\n    <h3 > Nuestras 3  líneas de negocios le proporcionan a nuestros clientes el respaldo adecuado en la búsqueda de soluciones integrales a nivel empresarial, lo cual estamos\r\n         en capacidad de lograrlo con la experiencia de nuestros consultores y\r\n         el compromiso de servicios de calidad que brindamos a todos nuestros clientes.\r\n    </h3>    \r\n    <button routerLink=\"/servicios\">\r\n        NUESTROS SERVICIOS\r\n    </button>\r\n</div>    "

/***/ }),

/***/ "./src/app/inicio/inicio-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"]
    }
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/inicio/inicio-servicios/inicio-servicios.component.css":
/*!************************************************************************!*\
  !*** ./src/app/inicio/inicio-servicios/inicio-servicios.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#container-servicios\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;    \r\n    \r\n    \r\n}\r\n\r\n#container-servicios div.item{\r\n    \r\n    \r\n    \r\n    -webkit-box-flex: 1;\r\n    \r\n    \r\n    \r\n            flex-grow: 1;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    flex-basis: 0;\r\n    border-bottom-left-radius: 22px;\r\n    border-top-right-radius: 22px;\r\n    -webkit-transition: 1.3s;\r\n    transition: 1.3s;\r\n    text-align: center;    \r\n    padding: 0px;\r\n    \r\n    \r\n       \r\n}\r\n\r\n#container-servicios h3, mat-icon\r\n{\r\n    color:rgb(4, 4, 88);        \r\n}\r\n\r\n#container-servicios  mat-icon\r\n{\r\n    margin-right: 28px;\r\n    font-size: 60px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    \r\n    font-weight: 100;\r\n}\r\n\r\n.serv-items\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    text-align: left;\r\n    \r\n}\r\n\r\n.serv-items ul\r\n{\r\n    color: black;\r\n    \r\n}\r\n\r\n#container-servicios  a\r\n{\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n\r\n#container-servicios h3\r\n{\r\n    color:rgb(4, 4, 88);        \r\n}\r\n\r\n#container-servicios div.item\r\n{\r\n    background: rgb(241, 239, 239);\r\n    margin-bottom: 30px;\r\n    \r\n}\r\n\r\n#container-servicios div.item:hover mat-icon\r\n{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    cursor: pointer;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    \r\n}\r\n\r\n#container-servicios div.item:hover \r\n{    \r\n    cursor: pointer;    \r\n}\r\n\r\n#container-servicios ul\r\n{    \r\n    list-style-type: decimal;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n.card\r\n{\r\n    background: rgb(241, 239, 239);\r\n    \r\n        \r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n.titulo-card\r\n{\r\n    font-size: 18px;\r\n    width: 260px;\r\n}\r\n .item a h3{\r\n    font-size: 16px;\r\n } \r\n .item a ul{\r\n    font-size: 13px;\r\n }     \r\n #container-servicios  mat-icon\r\n {\r\n    \r\n     font-size: 40px;\r\n    \r\n }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    \r\n    #container-servicios\r\n    {\r\n        display: -webkit-box;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n        -webkit-box-pack: justify;\r\n                justify-content: space-between;   \r\n    }\r\n    .serv-items\r\n    {\r\n        \r\n        text-align: center;    \r\n    }\r\n    .titulo-card\r\n    {\r\n        font-size: 16px;\r\n        width: 200px;\r\n    }\r\n    \r\n    \r\n    .item a ul{        \r\n        margin-right: 60px;\r\n    } \r\n\r\n    \r\n    \r\n    \r\n}\r\n\r\n/*\r\n\r\n@media screen and (max-width: 480px) { \r\n   \r\n    .titulo-card\r\n    {\r\n        font-size: 11px;\r\n        width: 90px;\r\n    \r\n    }\r\n    .item a h3{\r\n        font-size: 11px;\r\n    } \r\n    .item a ul{\r\n        font-size: 10px;\r\n        margin-right: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 390px) { \r\n   \r\n}\r\n*/\r\n\r\n@media screen and (max-width: 300px) { \r\n    .titulo-card\r\n    {\r\n        font-size: 11px;\r\n        width: 90px;\r\n    \r\n    }\r\n       \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby1zZXJ2aWNpb3MvaW5pY2lvLXNlcnZpY2lvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHNCQUFjO0lBQWQsY0FBYzs7O0FBR2xCOztBQUVBOzs7O0lBSUksbUJBQVk7Ozs7WUFBWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3Qix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZOzs7O0FBSWhCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFjO0lBQWQsY0FBYzs7SUFFZCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxZQUFZOztBQUVoQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUdBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSw4QkFBOEI7SUFDOUIsbUJBQW1COztBQUV2Qjs7QUFFQTs7SUFFSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixzQkFBYztJQUFkLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHNCQUFjO0lBQWQsY0FBYztBQUNsQjs7QUFJQTs7SUFFSSw4QkFBOEI7OztBQUdsQzs7QUFHQTtBQUNBOztJQUVJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0NBQ0M7SUFDRyxlQUFlO0NBQ2xCO0NBQ0E7SUFDRyxlQUFlO0NBQ2xCO0NBQ0E7OztLQUdJLGVBQWU7O0NBRW5CO0FBQ0Q7O0FBRUE7O0lBRUk7O1FBRUksb0JBQWE7UUFBYixhQUFhO1FBQ2IsNEJBQXNCO1FBQXRCLDZCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLHlCQUE4QjtnQkFBOUIsOEJBQThCO0lBQ2xDO0lBQ0E7OztRQUdJLGtCQUFrQjtJQUN0QjtJQUNBOztRQUVJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOzs7SUFHQTtRQUNJLGtCQUFrQjtJQUN0Qjs7Ozs7QUFLSjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCQzs7QUFDRDtJQUNJOztRQUVJLGVBQWU7UUFDZixXQUFXOztJQUVmOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lvL2luaWNpby1zZXJ2aWNpb3MvaW5pY2lvLXNlcnZpY2lvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNjb250YWluZXItc2VydmljaW9zXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7ICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuI2NvbnRhaW5lci1zZXJ2aWNpb3MgZGl2Lml0ZW17XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMnB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XHJcbiAgICB0cmFuc2l0aW9uOiAxLjNzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICBcclxufVxyXG5cclxuI2NvbnRhaW5lci1zZXJ2aWNpb3MgaDMsIG1hdC1pY29uXHJcbntcclxuICAgIGNvbG9yOnJnYig0LCA0LCA4OCk7ICAgICAgICBcclxufVxyXG4jY29udGFpbmVyLXNlcnZpY2lvcyAgbWF0LWljb25cclxue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5zZXJ2LWl0ZW1zXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIFxyXG59XHJcblxyXG4uc2Vydi1pdGVtcyB1bFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBcclxufVxyXG4jY29udGFpbmVyLXNlcnZpY2lvcyAgYVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4jY29udGFpbmVyLXNlcnZpY2lvcyBoM1xyXG57XHJcbiAgICBjb2xvcjpyZ2IoNCwgNCwgODgpOyAgICAgICAgXHJcbn1cclxuI2NvbnRhaW5lci1zZXJ2aWNpb3MgZGl2Lml0ZW1cclxue1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjM5LCAyMzkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIFxyXG59XHJcblxyXG4jY29udGFpbmVyLXNlcnZpY2lvcyBkaXYuaXRlbTpob3ZlciBtYXQtaWNvblxyXG57XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIFxyXG59XHJcblxyXG4jY29udGFpbmVyLXNlcnZpY2lvcyBkaXYuaXRlbTpob3ZlciBcclxueyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXHJcbn1cclxuXHJcbiNjb250YWluZXItc2VydmljaW9zIHVsXHJcbnsgICAgXHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyMzksIDIzOSk7XHJcbiAgICBcclxuICAgICAgICBcclxufSAgIFxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBcclxuLnRpdHVsby1jYXJkXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAyNjBweDtcclxufVxyXG4gLml0ZW0gYSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH0gXHJcbiAuaXRlbSBhIHVse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gfSAgICAgXHJcbiAjY29udGFpbmVyLXNlcnZpY2lvcyAgbWF0LWljb25cclxuIHtcclxuICAgIFxyXG4gICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIFxyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIFxyXG4gICAgI2NvbnRhaW5lci1zZXJ2aWNpb3NcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgIFxyXG4gICAgfVxyXG4gICAgLnNlcnYtaXRlbXNcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgfVxyXG4gICAgLnRpdHVsby1jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuaXRlbSBhIHVseyAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgfSBcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi8qXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgeyBcclxuICAgXHJcbiAgICAudGl0dWxvLWNhcmRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5pdGVtIGEgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfSBcclxuICAgIC5pdGVtIGEgdWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHsgXHJcbiAgIFxyXG59XHJcbiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7IFxyXG4gICAgLnRpdHVsby1jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/inicio/inicio-servicios/inicio-servicios.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/inicio/inicio-servicios/inicio-servicios.component.ts ***!
  \***********************************************************************/
/*! exports provided: InicioServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioServiciosComponent", function() { return InicioServiciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var InicioServiciosComponent = /** @class */ (function () {
    function InicioServiciosComponent(ruter) {
        this.ruter = ruter;
        var s = document.getElementById("container-servicios");
    }
    InicioServiciosComponent.prototype.ngOnInit = function () {
    };
    InicioServiciosComponent.prototype.GoToServe = function (parametro) {
        this.ruter.navigate(["servicios", { id: parametro }]);
    };
    InicioServiciosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    InicioServiciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-inicio-servicios',
            template: __webpack_require__(/*! raw-loader!./inicio-servicios.component.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio-servicios/inicio-servicios.component.html"),
            styles: [__webpack_require__(/*! ./inicio-servicios.component.css */ "./src/app/inicio/inicio-servicios/inicio-servicios.component.css")]
        })
    ], InicioServiciosComponent);
    return InicioServiciosComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _interface_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../interface/menu */ "./src/app/interface/menu.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
        this.direccionCliente = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].endpointImagenesClientes;
        this.direccionAlianza = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].endpointImagenesAlianzas;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.parrafoElegirnos = "En ISC Integrity Solutions & Consulting CIA. LTDA.\n    hemos tenido la oportunidad de trabajar con diferentes entidades\n    privadas y p\u00FAblicas en proyectos de Gesti\u00F3n de Procesos del Negocio,\n    Gesti\u00F3n de Riesgos Operativos, Gesti\u00F3n de Seguridad de la Informaci\u00F3n, \n    Fabrica de Software, Gobierno de TI, Gesti\u00F3n de Continuidad del Negocio,\n    Automatizaci\u00F3n de Procesos, Optimizaci\u00F3n Tecnol\u00F3gica y Auditoria de TI.";
        this.imagenElegirnos = "assets/img/elegirnos.png";
        this.tituloElegirnos = "¿POR QUÉ ELEGIRNOS?";
    };
    InicioComponent.prototype.ngAfterViewChecked = function () {
        _interface_menu__WEBPACK_IMPORTED_MODULE_2__["Disparador"].OnChangeComponent.emit();
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        })
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/titulo/titulo.module */ "./src/app/components/titulo/titulo.module.ts");
/* harmony import */ var _opinion_opinion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opinion/opinion.component */ "./src/app/inicio/opinion/opinion.component.ts");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/inicio/inicio-routing.module.ts");
/* harmony import */ var _portada_portada_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portada/portada.component */ "./src/app/inicio/portada/portada.component.ts");
/* harmony import */ var _inicio_servicios_inicio_servicios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inicio-servicios/inicio-servicios.component */ "./src/app/inicio/inicio-servicios/inicio-servicios.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _directiva_show_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directiva/show.module */ "./src/app/directiva/show.module.ts");
/* harmony import */ var _components_inicio_elegirnos_inicio_elegirnos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/inicio-elegirnos/inicio-elegirnos.module */ "./src/app/components/inicio-elegirnos/inicio-elegirnos.module.ts");
/* harmony import */ var _components_album_album_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/album/album.module */ "./src/app/components/album/album.module.ts");













var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
                _portada_portada_component__WEBPACK_IMPORTED_MODULE_7__["PortadaComponent"],
                _inicio_servicios_inicio_servicios_component__WEBPACK_IMPORTED_MODULE_8__["InicioServiciosComponent"],
                _opinion_opinion_component__WEBPACK_IMPORTED_MODULE_2__["OpinionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_6__["InicioRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _directiva_show_module__WEBPACK_IMPORTED_MODULE_10__["ShowModule"],
                _components_inicio_elegirnos_inicio_elegirnos_module__WEBPACK_IMPORTED_MODULE_11__["InicioElegirnosModule"],
                _components_album_album_module__WEBPACK_IMPORTED_MODULE_12__["AlbumModule"],
                _components_titulo_titulo_module__WEBPACK_IMPORTED_MODULE_1__["TituloModule"]
            ]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ }),

/***/ "./src/app/inicio/opinion/opinion.component.css":
/*!******************************************************!*\
  !*** ./src/app/inicio/opinion/opinion.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n\r\n    margin: 0px;\r\n    padding: 0px;\r\n    opacity: 1;\r\n    background-image:\r\n    -webkit-gradient(linear, left top, left bottom, from(rgba(114, 101, 101, 0.7)), to(rgba(0,0,0,0.8))),\r\n    url('testimonio.jpg');\r\n    background-image:\r\n    linear-gradient(rgba(114, 101, 101, 0.7), rgba(0,0,0,0.8)),\r\n    url('testimonio.jpg');    \r\n    background-size:99%;    \r\n    height: 280px;   \r\n    background-attachment: fixed;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    \r\n}\r\n\r\n.titulo-card\r\n{\r\n    color: white;\r\n    border-color: white;\r\n}\r\n\r\n#container-opinion\r\n{\r\n    display: -webkit-box;\r\n    display: flex;    \r\n    -webkit-box-pack: center;    \r\n            justify-content: center;\r\n    \r\n}\r\n\r\n#container-opinion .item\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n#container-opinion .item p\r\n{\r\n    color: white;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n#container-opinion .item #opinion \r\n{\r\n    width: 75%;   \r\n}\r\n\r\n#container-opinion .item #opinion p\r\n{\r\n    font-size: 18px;\r\n    font-weight: 200;\r\n    -webkit-transition: 2s;\r\n    transition: 2s;\r\n    \r\n    font-style: italic;\r\n    opacity: 1;\r\n    \r\n    \r\n}\r\n\r\n#container-opinion .item #persona p\r\n{\r\n    \r\n    -webkit-transition: 2s;\r\n    \r\n    transition: 2s;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .titulo-card\r\n    {\r\n        font-size: 18px;\r\n        width: 260px;\r\n    }\r\n    .card\r\n    {\r\n        height: 240px;   \r\n    }\r\n    #container-opinion .item #opinion p\r\n    {\r\n        font-size: 16px;\r\n        \r\n    }\r\n\r\n    #container-opinion .item #persona p\r\n    {\r\n        font-size: 12px;\r\n    }\r\n     \r\n    }\r\n\r\n@media screen and (max-width: 768px) { \r\n        \r\n        .titulo-card\r\n        {\r\n            font-size: 16px;\r\n            width: 200px;\r\n        }\r\n\r\n        \r\n        #container-opinion .item #opinion p\r\n        {\r\n            font-size: 15px;\r\n            \r\n        }\r\n\r\n        #container-opinion .item #persona p\r\n        {\r\n            font-size: 11px;\r\n        }\r\n     \r\n        .card\r\n        {\r\n            height: 220px;   \r\n        }\r\n     \r\n    }\r\n\r\n@media screen and (max-width: 480px) { \r\n       \r\n        \r\n\r\n        \r\n    #container-opinion .item #opinion p\r\n    {\r\n        font-size: 13px;\r\n        \r\n    }\r\n\r\n    #container-opinion .item #persona p\r\n    {\r\n        font-size: 9px;\r\n    }\r\n     \r\n\r\n        \r\n    }\r\n\r\n@media screen and (max-width: 300px) { \r\n        .titulo-card\r\n        {\r\n            font-size: 11px;\r\n            width: 90px;\r\n        \r\n        }\r\n           \r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL29waW5pb24vb3Bpbmlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWOzt5QkFFMkM7SUFGM0M7O3lCQUUyQztJQUMzQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixzQkFBYztJQUFkLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBQ0E7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1Qjs7QUFFM0I7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osc0JBQWM7SUFBZCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFjO0lBQWQsY0FBYzs7SUFFZCxrQkFBa0I7SUFDbEIsVUFBVTs7O0FBR2Q7O0FBRUE7OztJQUdJLHNCQUFjOztJQUFkLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFHQTtJQUNJOztRQUVJLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBOztRQUVJLGVBQWU7O0lBRW5COztJQUVBOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7O0FBRUE7O1FBRUk7O1lBRUksZUFBZTtZQUNmLFlBQVk7UUFDaEI7OztRQUdBOztZQUVJLGVBQWU7O1FBRW5COztRQUVBOztZQUVJLGVBQWU7UUFDbkI7O1FBRUE7O1lBRUksYUFBYTtRQUNqQjs7SUFFSjs7QUFHQTs7Ozs7SUFLQTs7UUFFSSxlQUFlOztJQUVuQjs7SUFFQTs7UUFFSSxjQUFjO0lBQ2xCOzs7O0lBSUE7O0FBSUE7UUFDSTs7WUFFSSxlQUFlO1lBQ2YsV0FBVzs7UUFFZjs7SUFFSiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9vcGluaW9uL29waW5pb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG5cclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgxMTQsIDEwMSwgMTAxLCAwLjcpLCByZ2JhKDAsMCwwLDAuOCkpLFxyXG4gICAgdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdGVzdGltb25pby5qcGcnKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6OTklOyAgICBcclxuICAgIGhlaWdodDogMjgwcHg7ICAgXHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBcclxufVxyXG5cclxuLnRpdHVsby1jYXJkXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2NvbnRhaW5lci1vcGluaW9uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNjb250YWluZXItb3BpbmlvbiAuaXRlbSBwXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG59XHJcblxyXG4jY29udGFpbmVyLW9waW5pb24gLml0ZW0gI29waW5pb24gXHJcbntcclxuICAgIHdpZHRoOiA3NSU7ICAgXHJcbn1cclxuI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNvcGluaW9uIHBcclxue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRyYW5zaXRpb246IDJzO1xyXG4gICAgXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNwZXJzb25hIHBcclxue1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiAycztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAudGl0dWxvLWNhcmRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDI0MHB4OyAgIFxyXG4gICAgfVxyXG4gICAgI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNvcGluaW9uIHBcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNwZXJzb25hIHBcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aXR1bG8tY2FyZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAjY29udGFpbmVyLW9waW5pb24gLml0ZW0gI29waW5pb24gcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb250YWluZXItb3BpbmlvbiAuaXRlbSAjcGVyc29uYSBwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIC5jYXJkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyMHB4OyAgIFxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNvcGluaW9uIHBcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhaW5lci1vcGluaW9uIC5pdGVtICNwZXJzb25hIHBcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgIH1cclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7IFxyXG4gICAgICAgIC50aXR1bG8tY2FyZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/inicio/opinion/opinion.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/inicio/opinion/opinion.component.ts ***!
  \*****************************************************/
/*! exports provided: OpinionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionComponent", function() { return OpinionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_interface_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interface/menu */ "./src/app/interface/menu.ts");



var OpinionComponent = /** @class */ (function () {
    function OpinionComponent() {
        this.opinion = new src_app_interface_menu__WEBPACK_IMPORTED_MODULE_2__["Opinion"]();
        this.opiniones = new Array();
        this.opaco = "opaco";
        this.Nopaco = "NoOpaco";
        this.LlenarOpiniones();
        this.opinion = this.opiniones[0];
    }
    OpinionComponent.prototype.ngOnInit = function () {
    };
    OpinionComponent.prototype.ngAfterViewInit = function () {
        this.ClockOpiniones();
    };
    OpinionComponent.prototype.LlenarOpiniones = function () {
        this.opiniones = [{
                opinion: "son exceltes personas bla bla bla me gustar\u00EDa que se vuelva a reptir  \n      todo lo sucedido y todo lo que se ha incrementado en todos estos d\u00EDas",
                persona: "Leonel Jorge, Gerente de proyectos, Claro"
            },
            {
                opinion: "son buenos mucha bla bla bla me gustar\u00EDa que se vuelva a reptir  \n      todo lo sucedido y todo lo que se ha incrementado en todos estos d\u00EDas",
                persona: "Leonel Thor, Gerente de proyectos, Claro"
            },
            {
                opinion: "son muy cheveres bla bla bla me gustar\u00EDa que se vuelva a reptir  \n      todo lo sucedido y todo lo que se ha incrementado en todos estos d\u00EDas",
                persona: "Leonel Stark, Gerente de proyectos, Claro"
            }
        ];
    };
    OpinionComponent.prototype.ClockOpiniones = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var recorre, opinionEle, personaEle, primera;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                recorre = 0;
                opinionEle = document.getElementById("opinionParrafo");
                personaEle = document.getElementById("personaParrafo");
                primera = true;
                setInterval(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                opinionEle.style.opacity = "0";
                                opinionEle.style.visibility = "hidden";
                                personaEle.style.opacity = "0";
                                personaEle.style.opacity = "hidden";
                                return [4 /*yield*/, this.ChangeStyle(opinionEle, personaEle)];
                            case 1:
                                _a.sent();
                                if (primera) {
                                    recorre++;
                                    this.opinion = this.opiniones[recorre];
                                    primera = false;
                                }
                                else {
                                    this.opinion = this.opiniones[recorre];
                                }
                                recorre++;
                                if (recorre === this.opiniones.length - 1) {
                                    recorre = 0;
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }, 6000);
                return [2 /*return*/];
            });
        });
    };
    OpinionComponent.prototype.ChangeStyle = function (opinionEle, personaEle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            opinionEle.style.opacity = "1";
                            opinionEle.style.visibility = "visible";
                            personaEle.style.opacity = "1";
                            personaEle.style.opacity = "visible";
                            resolve();
                        }, 1000);
                    })];
            });
        });
    };
    OpinionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opinion',
            template: __webpack_require__(/*! raw-loader!./opinion.component.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/opinion/opinion.component.html"),
            styles: [__webpack_require__(/*! ./opinion.component.css */ "./src/app/inicio/opinion/opinion.component.css")]
        })
    ], OpinionComponent);
    return OpinionComponent;
}());



/***/ }),

/***/ "./src/app/inicio/portada/portada.component.css":
/*!******************************************************!*\
  !*** ./src/app/inicio/portada/portada.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portada\r\n{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    \r\n    background-image:\r\n    -webkit-gradient( linear, left top, left bottom, from(rgba(228, 198, 198, 0.3)), to(rgba(68, 68, 68, 0.7))),\r\n    url('portada.jpg');\r\n    \r\n    background-image:\r\n    linear-gradient( rgba(228, 198, 198, 0.3), rgba(68, 68, 68, 0.7)),\r\n    url('portada.jpg');\r\n    \r\n    background-size:100%;\r\n    \r\n    height: 45vw;   \r\n    \r\n\r\n    display: -webkit-box;   \r\n    \r\n\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-attachment: fixed;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    \r\n    \r\n}\r\n\r\n@-webkit-keyframes aparecer{\r\n    0%{\r\n        \r\n        -webkit-transform: translateY(0px);\r\n        \r\n                transform: translateY(0px);\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-80px);\r\n        \r\n                transform: translateY(-80px);\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-60px);\r\n        \r\n                transform: translateY(-60px);\r\n        \r\n    }\r\n\r\n    100%{\r\n       \r\n        -webkit-transform: translateY(0px);\r\n       \r\n                transform: translateY(0px);\r\n        visibility: visible;\r\n        opacity: 1;\r\n       \r\n    }\r\n}\r\n\r\n@keyframes aparecer{\r\n    0%{\r\n        \r\n        -webkit-transform: translateY(0px);\r\n        \r\n                transform: translateY(0px);\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-80px);\r\n        \r\n                transform: translateY(-80px);\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-60px);\r\n        \r\n                transform: translateY(-60px);\r\n        \r\n    }\r\n\r\n    100%{\r\n       \r\n        -webkit-transform: translateY(0px);\r\n       \r\n                transform: translateY(0px);\r\n        visibility: visible;\r\n        opacity: 1;\r\n       \r\n    }\r\n}\r\n\r\n@-webkit-keyframes aparecer-boton{\r\n    0%{\r\n        \r\n        -webkit-transform: translateY(0px);\r\n        \r\n                transform: translateY(0px);\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-80px);\r\n        \r\n                transform: translateY(-80px);\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-60px);\r\n        \r\n                transform: translateY(-60px);\r\n        \r\n    }\r\n\r\n    100%{\r\n       \r\n        -webkit-transform: translateY(0px);\r\n       \r\n                transform: translateY(0px);\r\n        visibility: visible;\r\n        opacity: 0.7;\r\n       \r\n    }\r\n}\r\n\r\n@keyframes aparecer-boton{\r\n    0%{\r\n        \r\n        -webkit-transform: translateY(0px);\r\n        \r\n                transform: translateY(0px);\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-80px);\r\n        \r\n                transform: translateY(-80px);\r\n        \r\n    }\r\n\r\n    65%{\r\n        \r\n        -webkit-transform: translateY(-60px);\r\n        \r\n                transform: translateY(-60px);\r\n        \r\n    }\r\n\r\n    100%{\r\n       \r\n        -webkit-transform: translateY(0px);\r\n       \r\n                transform: translateY(0px);\r\n        visibility: visible;\r\n        opacity: 0.7;\r\n       \r\n    }\r\n}\r\n\r\n#portada h1{\r\n    color: white;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    font-weight: 400;\r\n    font-size: 50px;\r\n    text-align: center;\r\n    -webkit-animation-name: aparecer;\r\n            animation-name: aparecer;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    padding-bottom: 60px;\r\n    \r\n    color: rgb(34, 33, 33);\r\n    text-shadow: 0 0 3px rgb(34, 33, 33), 0 0 5px #2a2a2b;\r\n\r\n}\r\n\r\n#portada h3{\r\n    color: white;\r\n    font-weight: 100;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    -webkit-animation-name: aparecer;\r\n            animation-name: aparecer;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    max-width: 750px;\r\n    text-align: center;\r\n}\r\n\r\n#portada button{\r\n    \r\n    padding: 6px;\r\n    border-radius: 3px;\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    font: 300;\r\n    -webkit-animation-name: aparecer-boton;\r\n            animation-name: aparecer-boton;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n    margin-top: 20px;\r\n    background: rgb(4, 4, 88);    \r\n    color: white;\r\n    opacity: 0.7;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    border: 0px;\r\n}\r\n\r\n#portada button:hover\r\n{\r\n    \r\n    padding-left:40px;\r\n    padding-right:40px;\r\n    -webkit-transform: scaleY(80px);\r\n            transform: scaleY(80px);\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    #portada h1\r\n    {\r\n        font-size: 40px; \r\n        padding-bottom: 50px;\r\n    }\r\n\r\n    #portada h3\r\n    {\r\n        font-size:15px;\r\n    }\r\n\r\n    #portada button\r\n    {\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    #portada h1\r\n    {\r\n        font-size: 30px; \r\n        padding-bottom: 40px;\r\n    }\r\n\r\n\r\n    #portada h3\r\n    {\r\n        font-size:13px;\r\n    }\r\n\r\n\r\n    #portada button\r\n    {\r\n        font-size: 8px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n#nombre-empresa{\r\n    color:  rgb(4, 4, 88);       \r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    #portada\r\n    {\r\n        height: 60vw;   \r\n    }\r\n    #portada h1\r\n    {\r\n        font-size: 28px; \r\n        padding-bottom: 3px;\r\n    }\r\n\r\n\r\n    #portada h3\r\n    {\r\n        font-size:11px;\r\n    }\r\n\r\n\r\n    #portada button\r\n    {\r\n        font-size: 7px;\r\n        margin-top: 3px;\r\n    }\r\n    \r\n}\r\n\r\n@media screen and (max-width: 480px) { \r\n    #portada h1\r\n    {\r\n        font-size: 20px; \r\n        padding-bottom: 2px;\r\n        margin-top: 60px;\r\n    }\r\n\r\n\r\n    #portada h3\r\n    {\r\n        display: none;\r\n        opacity: 0;\r\n        font-size:7px;\r\n        \r\n    }\r\n\r\n    #portada button\r\n    {\r\n        \r\n        margin-top: 3px;\r\n    }\r\n\r\n    \r\n    \r\n\r\n    \r\n}\r\n\r\n/*\r\n\r\n@media screen and (max-width: 390px) { \r\n    #portada h1\r\n    {\r\n        font-size: 15px; \r\n        padding-bottom: 6px;\r\n    }\r\n\r\n\r\n    #portada h3\r\n    {\r\n        font-size:6px;\r\n    }   \r\n\r\n    #portada button\r\n    {\r\n        font-size: 3.5px;\r\n        margin-top: 4px;\r\n    }\r\n}\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL3BvcnRhZGEvcG9ydGFkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxZQUFZOztJQUVaOztzQkFFd0M7O0lBRnhDOztzQkFFd0M7O0lBRXhDLG9CQUFvQjs7SUFFcEIsWUFBWTs7O0lBR1osb0JBQWE7OztJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix3QkFBdUI7WUFBdkIsdUJBQXVCOzs7QUFHM0I7O0FBRUE7SUFDSTs7UUFFSSxrQ0FBMEI7O2dCQUExQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLFVBQVU7O0lBRWQ7O0lBRUE7O1FBRUksb0NBQTRCOztnQkFBNUIsNEJBQTRCOztJQUVoQzs7SUFFQTs7UUFFSSxvQ0FBNEI7O2dCQUE1Qiw0QkFBNEI7O0lBRWhDOztJQUVBOztRQUVJLGtDQUEwQjs7Z0JBQTFCLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsVUFBVTs7SUFFZDtBQUNKOztBQTVCQTtJQUNJOztRQUVJLGtDQUEwQjs7Z0JBQTFCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsVUFBVTs7SUFFZDs7SUFFQTs7UUFFSSxvQ0FBNEI7O2dCQUE1Qiw0QkFBNEI7O0lBRWhDOztJQUVBOztRQUVJLG9DQUE0Qjs7Z0JBQTVCLDRCQUE0Qjs7SUFFaEM7O0lBRUE7O1FBRUksa0NBQTBCOztnQkFBMUIsMEJBQTBCO1FBQzFCLG1CQUFtQjtRQUNuQixVQUFVOztJQUVkO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxrQ0FBMEI7O2dCQUExQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLFVBQVU7O0lBRWQ7O0lBRUE7O1FBRUksb0NBQTRCOztnQkFBNUIsNEJBQTRCOztJQUVoQzs7SUFFQTs7UUFFSSxvQ0FBNEI7O2dCQUE1Qiw0QkFBNEI7O0lBRWhDOztJQUVBOztRQUVJLGtDQUEwQjs7Z0JBQTFCLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsWUFBWTs7SUFFaEI7QUFDSjs7QUE1QkE7SUFDSTs7UUFFSSxrQ0FBMEI7O2dCQUExQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLFVBQVU7O0lBRWQ7O0lBRUE7O1FBRUksb0NBQTRCOztnQkFBNUIsNEJBQTRCOztJQUVoQzs7SUFFQTs7UUFFSSxvQ0FBNEI7O2dCQUE1Qiw0QkFBNEI7O0lBRWhDOztJQUVBOztRQUVJLGtDQUEwQjs7Z0JBQTFCLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsWUFBWTs7SUFFaEI7QUFDSjs7QUFHQTtJQUNJLFlBQVk7SUFDWixzQkFBYztJQUFkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsb0JBQW9COztJQUVwQixzQkFBc0I7SUFDdEIscURBQXFEOztBQUV6RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQWM7SUFBZCxjQUFjO0lBQ2QsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFjO0lBQWQsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBR0E7SUFDSTs7UUFFSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztJQUVBOztRQUVJLGNBQWM7SUFDbEI7O0lBRUE7O1FBRUksZUFBZTtJQUNuQjtBQUNKOztBQUdBO0lBQ0k7O1FBRUksZUFBZTtRQUNmLG9CQUFvQjtJQUN4Qjs7O0lBR0E7O1FBRUksY0FBYztJQUNsQjs7O0lBR0E7O1FBRUksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7O1FBRUksWUFBWTtJQUNoQjtJQUNBOztRQUVJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7OztJQUdBOztRQUVJLGNBQWM7SUFDbEI7OztJQUdBOztRQUVJLGNBQWM7UUFDZCxlQUFlO0lBQ25COztBQUVKOztBQUlBO0lBQ0k7O1FBRUksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztJQUdBOztRQUVJLGFBQWE7UUFDYixVQUFVO1FBQ1YsYUFBYTs7SUFFakI7O0lBRUE7OztRQUdJLGVBQWU7SUFDbkI7Ozs7OztBQU1KOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxQkMiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vcG9ydGFkYS9wb3J0YWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9ydGFkYVxyXG57XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudCggcmdiYSgyMjgsIDE5OCwgMTk4LCAwLjMpLCByZ2JhKDY4LCA2OCwgNjgsIDAuNykpLFxyXG4gICAgdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9ydGFkYS5qcGcnKTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XHJcbiAgICBcclxuICAgIGhlaWdodDogNDV2dzsgICBcclxuICAgIFxyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXBhcmVjZXJ7XHJcbiAgICAwJXtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICA2NSV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICA2NSV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXBhcmVjZXItYm90b257XHJcbiAgICAwJXtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICA2NSV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICA2NSV7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MHB4KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiNwb3J0YWRhIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwYXJlY2VyO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDM0LCAzMywgMzMpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiKDM0LCAzMywgMzMpLCAwIDAgNXB4ICMyYTJhMmI7XHJcblxyXG59XHJcblxyXG4jcG9ydGFkYSBoM3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhcGFyZWNlcjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcG9ydGFkYSBidXR0b257XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDozMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDozMHB4O1xyXG4gICAgZm9udDogMzAwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFwYXJlY2VyLWJvdG9uO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNCwgNCwgODgpOyAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbiNwb3J0YWRhIGJ1dHRvbjpob3ZlclxyXG57XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoODBweCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgICAjcG9ydGFkYSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BvcnRhZGEgaDNcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgIH1cclxuXHJcbiAgICAjcG9ydGFkYSBidXR0b25cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAjcG9ydGFkYSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNwb3J0YWRhIGgzXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNwb3J0YWRhIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNub21icmUtZW1wcmVzYXtcclxuICAgIGNvbG9yOiAgcmdiKDQsIDQsIDg4KTsgICAgICAgXHJcbn0gICBcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgI3BvcnRhZGFcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQ6IDYwdnc7ICAgXHJcbiAgICB9XHJcbiAgICAjcG9ydGFkYSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI3BvcnRhZGEgaDNcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6MTFweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI3BvcnRhZGEgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHsgXHJcbiAgICAjcG9ydGFkYSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjcG9ydGFkYSBoM1xyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBmb250LXNpemU6N3B4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICNwb3J0YWRhIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG4vKlxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHsgXHJcbiAgICAjcG9ydGFkYSBoMVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI3BvcnRhZGEgaDNcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6NnB4O1xyXG4gICAgfSAgIFxyXG5cclxuICAgICNwb3J0YWRhIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG59XHJcbiovIl19 */"

/***/ }),

/***/ "./src/app/inicio/portada/portada.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/inicio/portada/portada.component.ts ***!
  \*****************************************************/
/*! exports provided: PortadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortadaComponent", function() { return PortadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortadaComponent = /** @class */ (function () {
    function PortadaComponent() {
    }
    PortadaComponent.prototype.ngOnInit = function () {
    };
    PortadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portada',
            template: __webpack_require__(/*! raw-loader!./portada.component.html */ "./node_modules/raw-loader/index.js!./src/app/inicio/portada/portada.component.html"),
            styles: [__webpack_require__(/*! ./portada.component.css */ "./src/app/inicio/portada/portada.component.css")]
        })
    ], PortadaComponent);
    return PortadaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module-es5.js.map