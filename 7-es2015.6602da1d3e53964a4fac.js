(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2ptV":function(n,e,i){"use strict";i.d(e,"a",(function(){return t}));class t{}},"3aQu":function(n,e,i){"use strict";var t=i("8Y7J");class l{constructor(n,e){this.element=n,this.ruta=e}ngOnInit(){this.AgregarEvento(),this.OnViewPort(this.element.nativeElement.childNodes)}AgregarEvento(){let n=this.element.nativeElement.childNodes;this.ChangeAspect(n),window.addEventListener("load",()=>{this.OnViewPort(n)}),window.addEventListener("scroll",()=>{this.OnViewPort(n)}),window.addEventListener("resize",()=>{this.OnViewPort(n)})}ChangeAspect(n){for(let e of n)e.style.visibility="hidden",e.style.opacity="0",e.style.transition="1.8s",e.style.transitionDelay="0.2s",e.style.transform="translateY(35px)"}OnViewPort(n){let e=window.innerHeight,i=this.element.nativeElement.getBoundingClientRect().top;if(Number(i.toFixed(0))-Number(e.toFixed(0))<-70)for(let t of n)t.style.transform="translateY(0px)",t.style.visibility="visible",t.style.opacity="1"}}var o=i("iInd");i("bqIb"),i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}));var a=t.pb({encapsulation:0,styles:[[".titulo-card[_ngcontent-%COMP%]{margin:auto;width:300px;padding-bottom:8px;padding-top:13px;-webkit-transition:1s;transition:1s;text-align:center}.cont-titulo[_ngcontent-%COMP%]{font-size:17px;margin:0;padding:0;position:relative}.border[_ngcontent-%COMP%]{bottom:1;content:'';display:block;height:3px;-webkit-transition:1s;transition:1s;margin:auto;left:0;right:0;position:absolute;width:50px}@media screen and (max-width:480px){.cont-titulo[_ngcontent-%COMP%]{font-size:13px}.border[_ngcontent-%COMP%]{width:35px}}"]],data:{}});function r(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,3,"div",[["appShow",""],["class","cont-titulo"]],[[8,"id",0]],null,null,null,null)),t.qb(1,81920,null,0,l,[t.k,o.l],null,null),(n()(),t.rb(2,0,null,null,1,"h2",[["class","titulo-card"]],null,null,null,null,null)),(n()(),t.Fb(3,null,["",""])),(n()(),t.rb(4,0,null,null,2,"section",[["appShow",""]],null,null,null,null,null)),t.qb(5,81920,null,0,l,[t.k,o.l],null,null),(n()(),t.rb(6,0,null,null,0,"div",[["class","border"]],[[8,"id",0]],null,null,null,null))],(function(n,e){n(e,1,0),n(e,5,0)}),(function(n,e){var i=e.component;n(e,0,0,"cont-titulo"+i.id),n(e,3,0,i.titulo),n(e,6,0,"border"+i.id)}))}},WsBg:function(n,e,i){"use strict";i.r(e);var t=i("8Y7J");class l{}var o=i("pMnS"),a=i("SVse");class r{constructor(n){this.route=n}ngOnInit(){}ngAfterViewChecked(){document.getElementById(this.id).style.backgroundImage=`url('${this.imagen}')`}GoTo(){this.route.navigate(["contactanos",{mensaje:`Hola, He viste el servicio que ofrecen acerca ${this.titulo}, me gustar\xeda tener mas informaci\xf3n`}])}}var s=i("iInd"),c=t.pb({encapsulation:0,styles:[[".servicio[_ngcontent-%COMP%]{background-size:100%;background-attachment:fixed;margin-top:0}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;max-width:360px;font-size:16px}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child{list-style-type:none;padding:8px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child   label[_ngcontent-%COMP%]{margin-right:30px;color:#fff;background:#040458;padding-left:9px;padding-right:9px;border:1px solid;border-radius:8px;-webkit-transition:.7s;transition:.7s}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child   label[_ngcontent-%COMP%]:hover{cursor:pointer;-webkit-transform:scale(1.05);transform:scale(1.05)}.titulo-servicio[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.titulo-servicio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:60%;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center;-webkit-box-pack:center;justify-content:center;background:rgba(0,0,0,.8);padding:5px;margin-top:20px;color:#fff;border-radius:16px}.titulo-servicio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:26px}.titulo-servicio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px}.listado-servicio[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;border-radius:8px}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#040458;border-radius:16px;color:#fff}@media screen and (max-width:390px){.titulo-servicio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:21px}.titulo-servicio[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.listado-servicio[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;padding-left:4x;padding-right:4px;max-width:260px}}"]],data:{}});function u(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t.Fb(1,null,[" "," "]))],null,(function(n,e){n(e,1,0,e.context.$implicit)}))}function d(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,13,"div",[["class","servicio"]],[[8,"id",0]],null,null,null,null)),(n()(),t.rb(1,0,null,null,5,"section",[["class","titulo-servicio"]],null,null,null,null,null)),(n()(),t.rb(2,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),t.Fb(4,null,[" "," "])),(n()(),t.rb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(6,null,[" "," "])),(n()(),t.rb(7,0,null,null,6,"section",[["class","listado-servicio"]],null,null,null,null,null)),(n()(),t.rb(8,0,null,null,5,"ul",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,u)),t.qb(10,278528,null,0,a.i,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.rb(11,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),t.rb(12,0,null,null,1,"label",[],null,[[null,"click"]],(function(n,e,i){var t=!0;return"click"===e&&(t=!1!==n.component.GoTo()&&t),t}),null,null)),(n()(),t.Fb(-1,null,["CONSULTAR"]))],(function(n,e){n(e,10,0,e.component.lista)}),(function(n,e){var i=e.component;n(e,0,0,i.id),n(e,4,0,i.titulo),n(e,6,0,i.descripcion)}))}var g=i("2nG7"),p=i("8UGx"),b=i("bF7U"),m=i("Byyy");class f{constructor(n){if(this.parametro=n,this.inside=!1,this.servicios=new Array,!this.inside){const n=this.parametro.snapshot.paramMap.get("id");b.Validate.value(n)?setTimeout(()=>{const e=document.getElementById(n);m.b.move(e.getBoundingClientRect().top)},100):m.b.move()}}ngOnInit(){this.LlenarInfoServicio(),this.LlenarInfoServicios()}LlenarInfoServicio(){this.parrafo="\n    o\tEn ISC Integrity Solutions & Consulting CIA. LTDA. estamos comprometidos con el crecimiento y la eficiencia de su Organizaci\xf3n, contamos con el conocimiento, metodolog\xedas de trabajo y las herramientas para que su empresa se mantenga alineado con el cumplimiento de las normativas y las buenas pr\xe1cticas de la industria.\n    ",this.imagen="assets/img/servicio.png",this.colorFuente="black",this.colorFondoParrafo="rgb(241, 239, 239)",this.colorFondo="white"}LlenarInfoServicios(){this.servicios=[{id:"1",titulo:"Business Risk",descripcion:"El riesgo empresarial es la exposici\xf3n que tiene una empresa u organizaci\xf3n a factores que reducir\xe1n sus beneficios o la llevar\xe1n al fracaso. Todo lo que amenace la capacidad de una empresa para lograr sus objetivos financieros se considera un riesgo comercial.",servicios:["Planeaci\xf3n Estrat\xe9gica","Documentaci\xf3n y Optimizaci\xf3n de Procesos","Evaluaci\xf3n Cualitativa y Cuantitativa de  Riesgos Operacionales","Gesti\xf3n de Continuidad del Negocio","Supply Chain Management","Investigaci\xf3n y Mitigaci\xf3n de Fraude","Revenue Assurance","An\xe1lisis de la Productividad de los Procesos del Negocio","Eficiencia Operativa"],imagen:"assets/img/servicios/busniss.jpg"},{id:"2",titulo:"Technology Risk",descripcion:"El riesgo tecnol\xf3gico, o riesgo de la tecnolog\xeda de la informaci\xf3n, es la posibilidad de que cualquier falla tecnol\xf3gica interrumpa un negocio.\n        Las empresas enfrentan muchos tipos de riesgos tecnol\xf3gicos, como incidentes de seguridad de la informaci\xf3n, ciberataques, robo de contrase\xf1as, interrupciones del servicio.",servicios:["Riesgos de TI","Capacitaci\xf3n y Cumplimiento de la Norma ISO27001","Capacitaci\xf3n y Cumplimiento  de  la  Norma  ISO22301","Planeaci\xf3n Estrat\xe9gica de TI","Gesti\xf3n de Seguridad de la Informaci\xf3n","Soluciones de Seguridad Electr\xf3nica","Gobierno de TI","Gesti\xf3n de Servicios de TI - ITIL","Revisi\xf3n de Controles de TI","Auditor\xedas de TI","Evaluaci\xf3n y Selecci\xf3n de Software","Revisi\xf3n de C\xf3digo Seguro de Aplicaciones","PCI-DSS Compliance","Vulnerability Management","Ethical Hacking","Security Assessment"],imagen:"assets/img/servicios/risk.jfif"},{id:"3",titulo:"Integration Services",descripcion:"Las organizaciones se enfrentan constantemente al reto de producir m\xe1s gastando menos. Para crecer, las empresas est\xe1n buscando maneras de mejorar sus procesos de una manera que resulte en la reducci\xf3n de costes y en una conciencia de lo que realmente representa cada proceso dentro de la empresa.",servicios:["Optimizaci\xf3n de procesos (Soluciones BPMS).","Control de Calidad de proyectos y aplicaciones.","Gesti\xf3n del cambio","Administraci\xf3n y Gesti\xf3n de Proyectos - PMO.","Optimizaci\xf3n Tecnol\xf3gica","Optimizaci\xf3n de Aplicaciones.","Business Intelligence","Data Warehousing","Soluciones ESB y SOA","Soluciones CRM","Soluciones de Continuidad del Negocio","Vulnerability Management","Software Factory","Testing Factory"],imagen:"assets/img/servicios/integri.jpg"}]}ngAfterViewChecked(){m.a.OnChangeComponent.emit()}}var v=t.pb({encapsulation:0,styles:[[""]],data:{}});function h(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-servicio",[],null,null,null,d,c)),t.qb(1,8503296,null,0,r,[s.l],{titulo:[0,"titulo"],descripcion:[1,"descripcion"],lista:[2,"lista"],imagen:[3,"imagen"],id:[4,"id"]},null)],(function(n,e){n(e,1,0,e.context.$implicit.titulo,e.context.$implicit.descripcion,e.context.$implicit.servicios,e.context.$implicit.imagen,e.context.$implicit.id)}),null)}function C(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-inicio-elegirnos",[["colorFondoTitulo","rgb(4, 4, 88)"],["id","servicios-serv"],["titulo","SERVICIOS"]],null,null,null,g.b,g.a)),t.qb(1,4308992,null,0,p.a,[],{parrafo:[0,"parrafo"],imagen:[1,"imagen"],colorFondo:[2,"colorFondo"],titulo:[3,"titulo"],colorFondoTitulo:[4,"colorFondoTitulo"],colorFondoParrafo:[5,"colorFondoParrafo"],colorFuentearrafo:[6,"colorFuentearrafo"]},null),(n()(),t.gb(16777216,null,null,1,null,h)),t.qb(3,278528,null,0,a.i,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){var i=e.component;n(e,1,0,i.parrafo,i.imagen,i.colorFondo,"SERVICIOS","rgb(4, 4, 88)",i.colorFondoParrafo,i.colorFuente),n(e,3,0,i.servicios)}),null)}function x(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-servicios",[],null,null,null,C,v)),t.qb(1,8503296,null,0,f,[s.a],null,null)],(function(n,e){n(e,1,0)}),null)}var O=t.nb("app-servicios",f,x,{},{},[]);class y{}var P=i("/DUQ"),w=i("2ptV"),M=i("p5aF");i.d(e,"ServiciosModuleNgFactory",(function(){return k}));var k=t.ob(l,[],(function(n){return t.zb([t.Ab(512,t.j,t.Z,[[8,[o.a,O]],[3,t.j],t.v]),t.Ab(4608,a.l,a.k,[t.s,[2,a.v]]),t.Ab(1073742336,a.b,a.b,[]),t.Ab(1073742336,s.n,s.n,[[2,s.s],[2,s.l]]),t.Ab(1073742336,y,y,[]),t.Ab(1073742336,P.a,P.a,[]),t.Ab(1073742336,w.a,w.a,[]),t.Ab(1073742336,M.a,M.a,[]),t.Ab(1073742336,l,l,[]),t.Ab(1024,s.j,(function(){return[[{path:"",component:f}]]}),[])])}))},bqIb:function(n,e,i){"use strict";i.d(e,"a",(function(){return t}));class t{constructor(){this.color="rgb(4, 4, 88)"}ngOnInit(){}ngAfterViewChecked(){let n=document.getElementById("cont-titulo"+this.id),e=document.getElementById("border"+this.id);n.style.color=this.color,e.style.backgroundColor=this.color}}}}]);