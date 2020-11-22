(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~inicio-inicio-module~trabaja-nosotros-trabaja-nosotros-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/album/album.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/album/album.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" id=\"album\">\r\n    <app-titulo [titulo]=\"titulo\" [id]=\"idScroll\"> </app-titulo>\r\n        \r\n        <div id=\"container-album\" >\r\n            <div >\r\n                <div class=\"next\" id=\"adelante\"  (click)=\"Next('L')\">\r\n                    &#60; \r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"item\" [id]=\"idScroll\" > \r\n                <div  *ngFor=\"let recorre of this.album \"  [id]=\"recorre.id\"  >\r\n                    <img [src]=\"recorre.path\" [width]=\"recorre.widthImg\" [height]=\"recorre.heigthImg\">\r\n                </div>\r\n            </div>    \r\n            <div >\r\n                <div class=\"next\" id=\"atras\" (click)=\"Next('R')\">\r\n                    &#62;\r\n                </div>\r\n            </div>            \r\n        </div>    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/album/album.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/album/album.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container-album\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    margin-top: 30px;   \r\n    -webkit-box-pack: center;   \r\n            justify-content: center;\r\n    position: relative;\r\n    \r\n    \r\n}\r\n#container-album .next\r\n{\r\n    \r\n    position: absolute;\r\n    border-radius: 50% 50%;\r\n    width: 45px;\r\n    height: 45px;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    color: white;\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    background:  rgb(4, 4, 88,0.9);\r\n    box-shadow: 7px 7px 5px -5px rgba(0,0,0,0.75);\r\n    z-index: 1;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n#container-album .next:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n#adelante{\r\n    left: 28px;\r\n    \r\n    top: 35%;\r\n    bottom: 35%;\r\n    \r\n}\r\n#atras{\r\n    right: 28px;        \r\n    top: 35%;\r\n    bottom: 35%;    \r\n}\r\n.card{\r\n    background: rgb(241, 239, 239);\r\n}\r\n.item\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    \r\n    \r\n}\r\n#container-album div.item\r\n{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;    \r\n    overflow: hidden;            \r\n    margin-top: 30px;\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n    margin-bottom: 30px;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    \r\n    \r\n    -webkit-transition: 1s;\r\n    \r\n    \r\n    transition: 1s;\r\n    \r\n}\r\n#container-album div.item div\r\n{\r\n    background: white;\r\n    \r\n     \r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    \r\n    -webkit-transition: .7s;\r\n    \r\n    transition: .7s;\r\n    border-radius: 10px;\r\n    \r\n    \r\n}\r\n#container-album div.item div:hover img\r\n{\r\n    \r\n        \r\n    -webkit-transform: scale(1.15);\r\n    \r\n        \r\n            transform: scale(1.15);\r\n        \r\n    cursor: pointer;\r\n}\r\n#container-album div.item img\r\n{\r\n    \r\n   \r\n    -webkit-transition: 0.8s;\r\n    \r\n   \r\n    transition: 0.8s;\r\n    \r\n}\r\n@media screen and (max-width: 1024px) { \r\n    .titulo-card\r\n    {\r\n        font-size: 18px;\r\n        width: 260px;\r\n    }\r\n     \r\n    }\r\n@media screen and (max-width: 768px) { \r\n        \r\n        .titulo-card\r\n        {\r\n            font-size: 16px;\r\n            width: 200px;\r\n        }\r\n\r\n        #container-album div.item \r\n        {\r\n            -webkit-transform: scale(0.8);\r\n                    transform: scale(0.8);\r\n        }\r\n\r\n        \r\n       \r\n        \r\n        \r\n    }\r\n@media screen and (max-width: 480px) { \r\n       \r\n        #container-album div.item div\r\n        {\r\n            padding: 0px;         \r\n            margin-left: 10px;\r\n            margin-right: 10px;\r\n        }\r\n\r\n        #container-album div.item\r\n        {\r\n            margin-left: 1px;\r\n            margin-right: 1px;\r\n        }\r\n\r\n        #adelante{\r\n            left: 2px;\r\n            \r\n            \r\n        }\r\n        \r\n        #atras{\r\n            right: 2px;        \r\n            \r\n        }\r\n\r\n    }\r\n/* \r\n    @media screen and (max-width: 390px) { \r\n       \r\n    }\r\n    */ \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS9hbGJ1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7O0FBR3RCO0FBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBRzlCLDZDQUE2QztJQUM3QyxVQUFVO0lBQ1Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7O0lBRVYsUUFBUTtJQUNSLFdBQVc7O0FBRWY7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFHQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjs7O0FBR3ZCO0FBR0E7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBMkI7WUFBM0IsMkJBQTJCOzs7SUFHM0Isc0JBQWM7OztJQUFkLGNBQWM7O0FBRWxCO0FBTUE7O0lBRUksaUJBQWlCOzs7SUFHakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7SUFFbEIsdUJBQWU7O0lBQWYsZUFBZTtJQUNmLG1CQUFtQjs7O0FBR3ZCO0FBRUE7Ozs7SUFJSSw4QkFBc0I7OztZQUF0QixzQkFBc0I7O0lBRXRCLGVBQWU7QUFDbkI7QUFJQTs7OztJQUlJLHdCQUFnQjs7O0lBQWhCLGdCQUFnQjs7QUFFcEI7QUFLQTtJQUNJOztRQUVJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO0FBRUE7O1FBRUk7O1lBRUksZUFBZTtZQUNmLFlBQVk7UUFDaEI7O1FBRUE7O1lBRUksNkJBQXFCO29CQUFyQixxQkFBcUI7UUFDekI7Ozs7OztJQU1KO0FBT0E7O1FBRUk7O1lBRUksWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7UUFDdEI7O1FBRUE7O1lBRUksZ0JBQWdCO1lBQ2hCLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLFNBQVM7OztRQUdiOztRQUVBO1lBQ0ksVUFBVTs7UUFFZDs7SUFFSjtBQUNBOzs7O0tBSUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLWFsYnVtXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4jY29udGFpbmVyLWFsYnVtIC5uZXh0XHJcbntcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDQsIDQsIDg4LDAuOSk7IFxyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA3cHggN3B4IDVweCAtNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDdweCA3cHggNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDdweCA3cHggNXB4IC01cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4jY29udGFpbmVyLWFsYnVtIC5uZXh0OmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jYWRlbGFudGV7XHJcbiAgICBsZWZ0OiAyOHB4O1xyXG4gICAgXHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGJvdHRvbTogMzUlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNhdHJhc3tcclxuICAgIHJpZ2h0OiAyOHB4OyAgICAgICAgXHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGJvdHRvbTogMzUlOyAgICBcclxufVxyXG4uY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDIzOSwgMjM5KTtcclxufVxyXG5cclxuXHJcbi5pdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiNjb250YWluZXItYWxidW0gZGl2Lml0ZW1cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNjb250YWluZXItYWxidW0gZGl2Lml0ZW0gZGl2XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIFxyXG4gICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiNjb250YWluZXItYWxidW0gZGl2Lml0ZW0gZGl2OmhvdmVyIGltZ1xyXG57XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAgICAgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lci1hbGJ1bSBkaXYuaXRlbSBpbWdcclxue1xyXG4gICAgXHJcbiAgIFxyXG4gICAgdHJhbnNpdGlvbjogMC44cztcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXHJcbiAgICAudGl0dWxvLWNhcmRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgICAgICBcclxuICAgICAgICAudGl0dWxvLWNhcmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbnRhaW5lci1hbGJ1bSBkaXYuaXRlbSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHsgXHJcbiAgICAgICBcclxuICAgICAgICAjY29udGFpbmVyLWFsYnVtIGRpdi5pdGVtIGRpdlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4OyAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbnRhaW5lci1hbGJ1bSBkaXYuaXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjYWRlbGFudGV7XHJcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAjYXRyYXN7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7ICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHsgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgICovICJdfQ== */"

/***/ }),

/***/ "./src/app/components/album/album.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/album/album.component.ts ***!
  \*****************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviciosCall_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviciosCall/imagenes.service */ "./src/app/serviciosCall/imagenes.service.ts");




let AlbumComponent = class AlbumComponent {
    constructor(servicesImagenes) {
        this.servicesImagenes = servicesImagenes;
        this.widhtImg = 110;
        this.heigthImg = 100;
        this.margin = 40;
        this.Titulo = "";
        this.album = new Array();
    }
    ngOnInit() {
        this.Titulo = this.titulo;
        this.LlenarAlbum();
    }
    LlenarAlbum() {
        const url = this.path;
        let imagenesServidor = new Array();
        this.servicesImagenes.get(url).subscribe((retorno) => {
            imagenesServidor = retorno;
            for (let recorre = 0; recorre < imagenesServidor.length; recorre++) {
                const recorreObjeto = imagenesServidor[recorre];
                this.album.push({
                    id: recorreObjeto.id,
                    path: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["host"] + recorreObjeto.path,
                    widthImg: this.widhtImg,
                    heigthImg: this.heigthImg
                });
            }
            if (imagenesServidor.length === 0) {
                this.album.push({
                    id: 1,
                    path: "assets/img/sorry.png",
                    widthImg: this.widhtImg,
                    heigthImg: this.heigthImg
                });
            }
        }, error => {
            console.log(error);
        });
    }
    FilterAlbums(desde, hasta) {
        return this.album.filter(x => x.id >= desde && x.id <= hasta);
    }
    Next(tipo) {
        const card = document.getElementById("album");
        let scroll = document.getElementById(this.idScroll);
        let viewPortScrolll = Number(scroll.getBoundingClientRect().width.toFixed(0));
        const item = Number(document.querySelector(`#${this.idScroll} div`).getBoundingClientRect().width.toFixed(0));
        let move = 0;
        const twoitems = item * 2;
        if (viewPortScrolll > Number(twoitems.toFixed(0))) {
            viewPortScrolll = Number((viewPortScrolll / 2).toFixed(0));
        }
        if (tipo.toUpperCase() === "R") {
            move = scroll.scrollLeft + viewPortScrolll;
        }
        else {
            move = scroll.scrollLeft - viewPortScrolll;
        }
        if (Number(scroll.scrollLeft.toFixed(0)) >= (Number(scroll.scrollWidth.toFixed(0)) - Number(card.getBoundingClientRect().width.toFixed(0)))) {
            if (tipo.toUpperCase() === "R") {
                move = 0;
            }
        }
        else {
            if (scroll.scrollLeft === 0) {
                if (tipo.toUpperCase() === "L") {
                    move = scroll.scrollWidth;
                }
            }
        }
        scroll.scrollTo({
            top: 0,
            left: move,
            behavior: 'smooth'
        });
    }
};
AlbumComponent.ctorParameters = () => [
    { type: src_app_serviciosCall_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["ImagenesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('path')
], AlbumComponent.prototype, "path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('titulo')
], AlbumComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('idScroll')
], AlbumComponent.prototype, "idScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AlbumComponent.prototype, "widhtImg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AlbumComponent.prototype, "heigthImg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AlbumComponent.prototype, "margin", void 0);
AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-album',
        template: __webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/album/album.component.html"),
        styles: [__webpack_require__(/*! ./album.component.css */ "./src/app/components/album/album.component.css")]
    })
], AlbumComponent);



/***/ }),

/***/ "./src/app/components/album/album.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/album/album.module.ts ***!
  \**************************************************/
/*! exports provided: AlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumModule", function() { return AlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.component */ "./src/app/components/album/album.component.ts");
/* harmony import */ var _titulo_titulo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../titulo/titulo.module */ "./src/app/components/titulo/titulo.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AlbumModule = class AlbumModule {
};
AlbumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _titulo_titulo_module__WEBPACK_IMPORTED_MODULE_4__["TituloModule"]
        ],
        exports: [
            _album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"]
        ]
    })
], AlbumModule);



/***/ }),

/***/ "./src/app/serviciosCall/imagenes.service.ts":
/*!***************************************************!*\
  !*** ./src/app/serviciosCall/imagenes.service.ts ***!
  \***************************************************/
/*! exports provided: ImagenesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenesService", function() { return ImagenesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let ImagenesService = class ImagenesService {
    constructor(http) {
        this.http = http;
    }
    get(direccion) {
        return this.http.get(direccion, {
            responseType: "json"
        });
    }
    getAll() {
        const direccion = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].endpointImagenes;
        return this.http.get(direccion);
    }
};
ImagenesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ImagenesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ImagenesService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: host, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const host = 'http://www.integritysolutions.com.ec/APIISC/';
const environment = {
    production: true,
    endpointImagenes: host + 'imagenes.php',
    endpointImagenesClientes: host + 'imagenes.php?tipo=clientes',
    endpointImagenesAlianzas: host + 'imagenes.php?tipo=alianzas',
    endpointImagenesSeleccion: host + 'imagenes.php?tipo=seleccion',
    endpointEmailPDF: host + 'emailpdf.php',
    endpointEmail: host + 'email.php'
};


/***/ })

}]);
//# sourceMappingURL=default~inicio-inicio-module~trabaja-nosotros-trabaja-nosotros-module-es2015.js.map