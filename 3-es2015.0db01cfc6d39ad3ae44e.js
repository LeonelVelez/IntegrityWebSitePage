(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2ptV":function(n,l,t){"use strict";t.d(l,"a",(function(){return i}));class i{}},"3aQu":function(n,l,t){"use strict";var i=t("8Y7J");class e{constructor(n,l){this.element=n,this.ruta=l}ngOnInit(){this.AgregarEvento(),this.OnViewPort(this.element.nativeElement.childNodes)}AgregarEvento(){let n=this.element.nativeElement.childNodes;this.ChangeAspect(n),window.addEventListener("load",()=>{this.OnViewPort(n)}),window.addEventListener("scroll",()=>{this.OnViewPort(n)}),window.addEventListener("resize",()=>{this.OnViewPort(n)})}ChangeAspect(n){for(let l of n)l.style.visibility="hidden",l.style.opacity="0",l.style.transition="1.8s",l.style.transitionDelay="0.2s",l.style.transform="translateY(35px)"}OnViewPort(n){let l=window.innerHeight,t=this.element.nativeElement.getBoundingClientRect().top;if(Number(t.toFixed(0))-Number(l.toFixed(0))<-70)for(let i of n)i.style.transform="translateY(0px)",i.style.visibility="visible",i.style.opacity="1"}}var o=t("iInd");t("bqIb"),t.d(l,"a",(function(){return a})),t.d(l,"b",(function(){return r}));var a=i.pb({encapsulation:0,styles:[[".titulo-card[_ngcontent-%COMP%]{margin:auto;width:300px;padding-bottom:8px;padding-top:13px;-webkit-transition:1s;transition:1s;text-align:center}.cont-titulo[_ngcontent-%COMP%]{font-size:17px;margin:0;padding:0;position:relative}.border[_ngcontent-%COMP%]{bottom:1;content:'';display:block;height:3px;-webkit-transition:1s;transition:1s;margin:auto;left:0;right:0;position:absolute;width:50px}@media screen and (max-width:480px){.cont-titulo[_ngcontent-%COMP%]{font-size:13px}.border[_ngcontent-%COMP%]{width:35px}}"]],data:{}});function r(n){return i.Gb(0,[(n()(),i.rb(0,0,null,null,3,"div",[["appShow",""],["class","cont-titulo"]],[[8,"id",0]],null,null,null,null)),i.qb(1,81920,null,0,e,[i.k,o.l],null,null),(n()(),i.rb(2,0,null,null,1,"h2",[["class","titulo-card"]],null,null,null,null,null)),(n()(),i.Fb(3,null,["",""])),(n()(),i.rb(4,0,null,null,2,"section",[["appShow",""]],null,null,null,null,null)),i.qb(5,81920,null,0,e,[i.k,o.l],null,null),(n()(),i.rb(6,0,null,null,0,"div",[["class","border"]],[[8,"id",0]],null,null,null,null))],(function(n,l){n(l,1,0),n(l,5,0)}),(function(n,l){var t=l.component;n(l,0,0,"cont-titulo"+t.id),n(l,3,0,t.titulo),n(l,6,0,"border"+t.id)}))}},NcVw:function(n,l,t){"use strict";t.r(l);var i=t("8Y7J");class e{}var o=t("pMnS"),a=t("iInd");class r{constructor(){}ngOnInit(){}}var u=i.pb({encapsulation:0,styles:[["#portada[_ngcontent-%COMP%]{margin:0;padding:0;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(228,198,198,.3)),to(rgba(68,68,68,.7))),url(portada.15083e353b05dadba8b4.jpg);background-image:linear-gradient(rgba(228,198,198,.3),rgba(68,68,68,.7)),url(portada.15083e353b05dadba8b4.jpg);background-size:100%;height:45vw;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;background-attachment:fixed;-webkit-box-pack:center;justify-content:center}@-webkit-keyframes aparecer{0%{-webkit-transform:translateY(0);transform:translateY(0);visibility:hidden;opacity:0}65%{-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{-webkit-transform:translateY(0);transform:translateY(0);visibility:visible;opacity:1}}@keyframes aparecer{0%{-webkit-transform:translateY(0);transform:translateY(0);visibility:hidden;opacity:0}65%{-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{-webkit-transform:translateY(0);transform:translateY(0);visibility:visible;opacity:1}}@-webkit-keyframes aparecer-boton{0%{-webkit-transform:translateY(0);transform:translateY(0);visibility:hidden;opacity:0}65%{-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{-webkit-transform:translateY(0);transform:translateY(0);visibility:visible;opacity:.7}}@keyframes aparecer-boton{0%{-webkit-transform:translateY(0);transform:translateY(0);visibility:hidden;opacity:0}65%{-webkit-transform:translateY(-60px);transform:translateY(-60px)}100%{-webkit-transform:translateY(0);transform:translateY(0);visibility:visible;opacity:.7}}#portada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{-webkit-transition:1s;transition:1s;font-weight:400;font-size:50px;text-align:center;-webkit-animation-name:aparecer;animation-name:aparecer;-webkit-animation-duration:3s;animation-duration:3s;padding-bottom:60px;color:#222121;text-shadow:0 0 3px #222121,0 0 5px #2a2a2b}#portada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-weight:100;-webkit-transition:1s;transition:1s;-webkit-animation-name:aparecer;animation-name:aparecer;-webkit-animation-duration:3s;animation-duration:3s;max-width:750px;text-align:center}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:6px 30px;border-radius:3px;font:300;-webkit-animation-name:aparecer-boton;animation-name:aparecer-boton;-webkit-animation-duration:3s;animation-duration:3s;margin-top:20px;background:#040458;color:#fff;opacity:.7;-webkit-transition:1s;transition:1s;border:0}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{padding-left:40px;padding-right:40px;-webkit-transform:scaleY(80px);transform:scaleY(80px);cursor:pointer}@media screen and (max-width:1200px){#portada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;padding-bottom:50px}#portada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:10px}}@media screen and (max-width:1024px){#portada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;padding-bottom:40px}#portada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:13px}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:8px;margin-top:20px}}#nombre-empresa[_ngcontent-%COMP%]{color:#040458}@media screen and (max-width:768px){#portada[_ngcontent-%COMP%]{height:60vw}#portada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;padding-bottom:3px}#portada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:11px}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:7px;margin-top:3px}}@media screen and (max-width:480px){#portada[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px;padding-bottom:2px;margin-top:60px}#portada[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:none;opacity:0;font-size:7px}#portada[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:3px}}"]],data:{}});function s(n){return i.Gb(0,[(n()(),i.rb(0,0,null,null,9,"div",[["id","portada"]],null,null,null,null,null)),(n()(),i.rb(1,0,null,null,3,"h1",[],null,null,null,null,null)),(n()(),i.rb(2,0,null,null,1,"span",[["id","nombre-empresa"]],null,null,null,null,null)),(n()(),i.Fb(-1,null,["INTEGRITY"])),(n()(),i.Fb(-1,null,[" SOLUTIONS "])),(n()(),i.rb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Nuestras 3 l\xedneas de negocios le proporcionan a nuestros clientes el respaldo adecuado en la b\xfasqueda de soluciones integrales a nivel empresarial, lo cual estamos en capacidad de lograrlo con la experiencia de nuestros consultores y el compromiso de servicios de calidad que brindamos a todos nuestros clientes. "])),(n()(),i.rb(7,0,null,null,2,"button",[["routerLink","/servicios"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==i.Cb(n,8).onClick()&&e),e}),null,null)),i.qb(8,16384,null,0,a.m,[a.l,a.a,[8,null],i.C,i.k],{routerLink:[0,"routerLink"]},null),(n()(),i.Fb(-1,null,[" NUESTROS SERVICIOS "]))],(function(n,l){n(l,8,0,"/servicios")}),null)}var c=t("3aQu"),b=t("bqIb"),d=t("Mr+X"),p=t("Gi4r");class g{constructor(n){this.ruter=n,document.getElementById("container-servicios")}ngOnInit(){}GoToServe(n){this.ruter.navigate(["servicios",{id:n}])}}var m=i.pb({encapsulation:0,styles:[["#container-servicios[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-transition:1s;transition:1s}#container-servicios[_ngcontent-%COMP%]   div.item[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1;margin-left:20px;margin-right:20px;flex-basis:0;border-bottom-left-radius:22px;border-top-right-radius:22px;-webkit-transition:1.3s;transition:1.3s;text-align:center;padding:0;background:#f1efef;margin-bottom:30px}#container-servicios[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%]{color:#040458}#container-servicios[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:28px;font-size:60px;-webkit-transition:1s;transition:1s;font-weight:100}.serv-items[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:left}.serv-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#000}#container-servicios[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:center;text-decoration:none}#container-servicios[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#040458}#container-servicios[_ngcontent-%COMP%]   div.item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{-webkit-transform:scale(1.1);transform:scale(1.1);cursor:pointer;-webkit-transition:1s;transition:1s}#container-servicios[_ngcontent-%COMP%]   div.item[_ngcontent-%COMP%]:hover{cursor:pointer}#container-servicios[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:decimal;-webkit-transition:1s;transition:1s}.card[_ngcontent-%COMP%]{background:#f1efef}@media screen and (max-width:1024px){.titulo-card[_ngcontent-%COMP%]{font-size:18px;width:260px}.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:13px}#container-servicios[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:40px}}@media screen and (max-width:768px){#container-servicios[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}.serv-items[_ngcontent-%COMP%]{text-align:center}.titulo-card[_ngcontent-%COMP%]{font-size:16px;width:200px}.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-right:60px}}@media screen and (max-width:300px){.titulo-card[_ngcontent-%COMP%]{font-size:11px;width:90px}}"]],data:{}});function f(n){return i.Gb(0,[(n()(),i.rb(0,0,null,null,55,"div",[["class","card"]],null,null,null,null,null)),(n()(),i.rb(1,0,null,null,1,"app-titulo",[["id","inicioservicios"],["titulo","NUESTROS SERVICIOS"]],null,null,null,c.b,c.a)),i.qb(2,8503296,null,0,b.a,[],{titulo:[0,"titulo"],id:[1,"id"]},null),(n()(),i.rb(3,0,null,null,52,"div",[["class","container-card"],["id","container-servicios"]],null,null,null,null,null)),(n()(),i.rb(4,0,null,null,17,"div",[["class","item"]],null,null,null,null,null)),(n()(),i.rb(5,0,null,null,16,"a",[],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.GoToServe(1)&&i),i}),null,null)),(n()(),i.rb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,["Business Risk"])),(n()(),i.rb(8,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),i.qb(9,9158656,null,0,p.b,[i.k,p.d,[8,null],[2,p.a],[2,i.l]],null,null),(n()(),i.Fb(-1,0,["business"])),(n()(),i.rb(11,0,null,null,10,"div",[["class","serv-items"]],null,null,null,null,null)),(n()(),i.rb(12,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Documentaci\xf3n y Optimizaci\xf3n de Procesos "])),(n()(),i.rb(14,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Evaluaci\xf3n Cualitativa y Cuantitativa de riesgos operacionales "])),(n()(),i.rb(16,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Eficiencia Operativa "])),(n()(),i.rb(18,0,null,null,3,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Capacitaci\xf3n y Cumplimiento de la Norma de "])),(n()(),i.rb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Calidad ISO9001 "])),(n()(),i.rb(22,0,null,null,15,"div",[["class","item"]],null,null,null,null,null)),(n()(),i.rb(23,0,null,null,14,"a",[],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.GoToServe(2)&&i),i}),null,null)),(n()(),i.rb(24,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,["Technology Risk"])),(n()(),i.rb(26,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),i.qb(27,9158656,null,0,p.b,[i.k,p.d,[8,null],[2,p.a],[2,i.l]],null,null),(n()(),i.Fb(-1,0,["developer_board"])),(n()(),i.rb(29,0,null,null,8,"div",[["class","serv-items"]],null,null,null,null,null)),(n()(),i.rb(30,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Capacitaci\xf3n y Cumplimiento de la Norma ISO27001 "])),(n()(),i.rb(32,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Gesti\xf3n de Seguridad de la Informaci\xf3n "])),(n()(),i.rb(34,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" PCI-DSS Compliance "])),(n()(),i.rb(36,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Auditor\xedas de TI "])),(n()(),i.rb(38,0,null,null,17,"div",[["class","item"]],null,null,null,null,null)),(n()(),i.rb(39,0,null,null,16,"a",[],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.GoToServe(3)&&i),i}),null,null)),(n()(),i.rb(40,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,["Integration Services"])),(n()(),i.rb(42,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,d.b,d.a)),i.qb(43,9158656,null,0,p.b,[i.k,p.d,[8,null],[2,p.a],[2,i.l]],null,null),(n()(),i.Fb(-1,0,["lock"])),(n()(),i.rb(45,0,null,null,10,"div",[["class","serv-items"]],null,null,null,null,null)),(n()(),i.rb(46,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Software Factory "])),(n()(),i.rb(48,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Gesti\xf3n del cambio "])),(n()(),i.rb(50,0,null,null,3,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Control de Calidad de proyectos "])),(n()(),i.rb(52,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" y aplicaciones. "])),(n()(),i.rb(54,0,null,null,1,"ul",[],null,null,null,null,null)),(n()(),i.Fb(-1,null,[" Business Intelligence "]))],(function(n,l){n(l,2,0,"NUESTROS SERVICIOS","inicioservicios"),n(l,9,0),n(l,27,0),n(l,43,0)}),(function(n,l){n(l,8,0,i.Cb(l,9).inline,"primary"!==i.Cb(l,9).color&&"accent"!==i.Cb(l,9).color&&"warn"!==i.Cb(l,9).color),n(l,26,0,i.Cb(l,27).inline,"primary"!==i.Cb(l,27).color&&"accent"!==i.Cb(l,27).color&&"warn"!==i.Cb(l,27).color),n(l,42,0,i.Cb(l,43).inline,"primary"!==i.Cb(l,43).color&&"accent"!==i.Cb(l,43).color&&"warn"!==i.Cb(l,43).color)}))}var C=t("2nG7"),x=t("8UGx"),O=t("J7YV"),v=t("1Kg0"),h=t("ZQ53"),w=t("cxbk"),k=t("Byyy");class P{constructor(){this.direccionCliente=w.a.endpointImagenesClientes,this.direccionAlianza=w.a.endpointImagenesAlianzas,window.scrollTo({top:0,left:0,behavior:"smooth"})}ngOnInit(){this.parrafoElegirnos="En ISC Integrity Solutions & Consulting CIA. LTDA.\n    hemos tenido la oportunidad de trabajar con diferentes entidades\n    privadas y p\xfablicas en proyectos de Gesti\xf3n de Procesos del Negocio,\n    Gesti\xf3n de Riesgos Operativos, Gesti\xf3n de Seguridad de la Informaci\xf3n, \n    Fabrica de Software, Gobierno de TI, Gesti\xf3n de Continuidad del Negocio,\n    Automatizaci\xf3n de Procesos, Optimizaci\xf3n Tecnol\xf3gica y Auditoria de TI.",this.imagenElegirnos="assets/img/elegirnos.png",this.tituloElegirnos="\xbfPOR QU\xc9 ELEGIRNOS?"}ngAfterViewChecked(){k.a.OnChangeComponent.emit()}}var M=i.pb({encapsulation:0,styles:[[""]],data:{}});function y(n){return i.Gb(0,[(n()(),i.rb(0,0,null,null,1,"app-portada",[],null,null,null,s,u)),i.qb(1,114688,null,0,r,[],null,null),(n()(),i.rb(2,0,null,null,1,"app-inicio-servicios",[["id","inicioServicios"]],null,null,null,f,m)),i.qb(3,114688,null,0,g,[a.l],null,null),(n()(),i.rb(4,0,null,null,1,"app-inicio-elegirnos",[["colorFondo","white"],["colorFondoParrafo","rgb(241, 239, 239)"],["colorFuentearrafo","black"],["id","elegirnos"]],null,null,null,C.b,C.a)),i.qb(5,4308992,null,0,x.a,[],{parrafo:[0,"parrafo"],imagen:[1,"imagen"],colorFondo:[2,"colorFondo"],titulo:[3,"titulo"],colorFondoParrafo:[4,"colorFondoParrafo"],colorFuentearrafo:[5,"colorFuentearrafo"]},null),(n()(),i.rb(6,0,null,null,1,"app-album",[["idScroll","scrollCliente"],["titulo","NUESTROS CLIENTES"]],null,null,null,O.b,O.a)),i.qb(7,114688,null,0,v.a,[h.a],{path:[0,"path"],titulo:[1,"titulo"],idScroll:[2,"idScroll"]},null),(n()(),i.rb(8,0,null,null,1,"app-album",[["idScroll","scrollAlianzas"],["titulo","NUESTRAS ALIANZAS"]],null,null,null,O.b,O.a)),i.qb(9,114688,null,0,v.a,[h.a],{path:[0,"path"],titulo:[1,"titulo"],idScroll:[2,"idScroll"]},null)],(function(n,l){var t=l.component;n(l,1,0),n(l,3,0),n(l,5,0,t.parrafoElegirnos,t.imagenElegirnos,"white",t.tituloElegirnos,"rgb(241, 239, 239)","black"),n(l,7,0,t.direccionCliente,"NUESTROS CLIENTES","scrollCliente"),n(l,9,0,t.direccionAlianza,"NUESTRAS ALIANZAS","scrollAlianzas")}),null)}function _(n){return i.Gb(0,[(n()(),i.rb(0,0,null,null,1,"app-inicio",[],null,null,null,y,M)),i.qb(1,8503296,null,0,P,[],null,null)],(function(n,l){n(l,1,0)}),null)}var S=i.nb("app-inicio",P,_,{},{},[]),A=t("SVse"),I=t("IheW");class F{}var E=t("IP0z"),z=t("Xd0L"),Y=t("cUpR"),N=t("/DUQ"),T=t("2ptV"),G=t("p5aF"),R=t("7SDC");t.d(l,"InicioModuleNgFactory",(function(){return q}));var q=i.ob(e,[],(function(n){return i.zb([i.Ab(512,i.j,i.Z,[[8,[o.a,S]],[3,i.j],i.v]),i.Ab(4608,A.l,A.k,[i.s,[2,A.v]]),i.Ab(4608,I.h,I.n,[A.c,i.z,I.l]),i.Ab(4608,I.o,I.o,[I.h,I.m]),i.Ab(5120,I.a,(function(n){return[n]}),[I.o]),i.Ab(4608,I.k,I.k,[]),i.Ab(6144,I.i,null,[I.k]),i.Ab(4608,I.g,I.g,[I.i]),i.Ab(6144,I.b,null,[I.g]),i.Ab(4608,I.f,I.j,[I.b,i.p]),i.Ab(4608,I.c,I.c,[I.f]),i.Ab(1073742336,A.b,A.b,[]),i.Ab(1073742336,a.n,a.n,[[2,a.s],[2,a.l]]),i.Ab(1073742336,F,F,[]),i.Ab(1073742336,E.a,E.a,[]),i.Ab(1073742336,z.b,z.b,[[2,z.a],[2,Y.f]]),i.Ab(1073742336,p.c,p.c,[]),i.Ab(1073742336,N.a,N.a,[]),i.Ab(1073742336,T.a,T.a,[]),i.Ab(1073742336,G.a,G.a,[]),i.Ab(1073742336,I.e,I.e,[]),i.Ab(1073742336,I.d,I.d,[]),i.Ab(1073742336,R.a,R.a,[]),i.Ab(1073742336,e,e,[]),i.Ab(1024,a.j,(function(){return[[{path:"",component:P}]]}),[]),i.Ab(256,I.l,"XSRF-TOKEN",[]),i.Ab(256,I.m,"X-XSRF-TOKEN",[])])}))},bqIb:function(n,l,t){"use strict";t.d(l,"a",(function(){return i}));class i{constructor(){this.color="rgb(4, 4, 88)"}ngOnInit(){}ngAfterViewChecked(){let n=document.getElementById("cont-titulo"+this.id),l=document.getElementById("border"+this.id);n.style.color=this.color,l.style.backgroundColor=this.color}}}}]);