(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QgbK:function(t,n,e){"use strict";e.r(n),e.d(n,"ViewTableModule",(function(){return P}));var o=e("ofXK"),i=e("tyNb"),a=e("fXoL"),c=e("bTqV"),r=e("I/3d");let s=(()=>{class t{constructor(t){this.fs=t,this.data$=this.fs.collection("sanciones").valueChanges()}getData(){return this.data$}}return t.\u0275fac=function(n){return new(n||t)(a.Wb(r.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=e("LPYB");let l=(()=>{class t{constructor(t){this.fs=t,this.polarAreaChartLabels=[],this.polarAreaChartData=[],this.polarAreaLegend=!0,this.polarChartColors=[{backgroundColor:["rgb(0, 154, 63)","rgb(243, 146, 0)","rgb(20, 218, 69)","rgb(241, 149, 74)"]}],this.polarAreaChartType="polarArea"}ngOnInit(){this.data$=this.fs.getData(),this.data$.subscribe(t=>{const n=t.map(t=>t.estado),e=[...new Set(n)];this.polarAreaChartLabels=e,e.forEach(t=>{this.polarAreaChartData.push(n.filter(n=>n===t).length)})})}chartClicked({event:t,active:n}){console.log(t,n)}chartHovered({event:t,active:n}){console.log(t,n)}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-chart2"]],decls:2,vars:5,consts:[[2,"display","block"],["baseChart","",3,"data","labels","legend","chartType","colors"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Nb(1,"canvas",1),a.Rb()),2&t&&(a.Bb(1),a.gc("data",n.polarAreaChartData)("labels",n.polarAreaChartLabels)("legend",n.polarAreaLegend)("chartType",n.polarAreaChartType)("colors",n.polarChartColors))},directives:[b.a],styles:[""]}),t})(),d=(()=>{class t{constructor(t){this.fs=t,this.pieChartOptions={responsive:!0},this.pieChartLabels=[],this.pieChartData=[],this.pieChartType="pie",this.pieChartLegend=!0,this.pieChartPlugins=[],this.pieChartColors=[{backgroundColor:["rgb(40, 158, 89)","rgb(190, 118, 10)","rgb(48, 139, 86)","rgb(0, 154, 63)","rgb(243, 146, 0)","rgb(241, 174, 74)","rgb(20, 218, 69)","rgb(241, 149, 74)"]}],Object(b.d)(),Object(b.c)()}ngOnInit(){this.data$=this.fs.getData(),this.data$.subscribe(t=>{const n=t.map(t=>t.motivo),e=[...new Set(n)];this.pieChartLabels=e,e.forEach(t=>{this.pieChartData.push(n.filter(n=>n===t).length)})})}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(s))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-chart"]],decls:2,vars:7,consts:[[2,"display","block"],["baseChart","",3,"data","labels","chartType","options","plugins","legend","colors"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Nb(1,"canvas",1),a.Rb()),2&t&&(a.Bb(1),a.gc("data",n.pieChartData)("labels",n.pieChartLabels)("chartType",n.pieChartType)("options",n.pieChartOptions)("plugins",n.pieChartPlugins)("legend",n.pieChartLegend)("colors",n.pieChartColors))},directives:[b.a],styles:[""]}),t})(),g=(()=>{class t{constructor(t){this.firestore=t}getAllSanctions(){return this.collection=this.firestore.collection("sanciones"),this.allSanctions=this.collection.valueChanges(),this.allSanctions}}return t.\u0275fac=function(n){return new(n||t)(a.Wb(r.a))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,n){if(1&t&&(a.Sb(0,"tr"),a.Sb(1,"td"),a.vc(2),a.Rb(),a.Sb(3,"td"),a.vc(4),a.Rb(),a.Sb(5,"td"),a.vc(6),a.Rb(),a.Sb(7,"td"),a.vc(8),a.Rb(),a.Sb(9,"td"),a.vc(10),a.Rb(),a.Nb(11,"td"),a.Rb()),2&t){const t=n.$implicit;a.Bb(2),a.wc(t.codigo),a.Bb(2),a.wc(t.nombreTrabajador),a.Bb(2),a.wc(t.motivo),a.Bb(2),a.wc(t.fechaIncidencia),a.Bb(2),a.wc(t.estado)}}let h=(()=>{class t{constructor(t){this.sanctions$=t}ngOnInit(){this.sanctions$.getAllSanctions().subscribe(t=>{this.allSanctions=t,console.log(this.allSanctions)})}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(g))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-table"]],decls:17,vars:1,consts:[[1,"content-table"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(a.Sb(0,"table",0),a.Sb(1,"thead"),a.Sb(2,"tr"),a.Sb(3,"th"),a.vc(4,"C\xf3digo"),a.Rb(),a.Sb(5,"th"),a.vc(6,"Nombre"),a.Rb(),a.Sb(7,"th"),a.vc(8,"Tipo de incidencia"),a.Rb(),a.Sb(9,"th"),a.vc(10,"Fecha de incidencia"),a.Rb(),a.Sb(11,"th"),a.vc(12,"Estado"),a.Rb(),a.Sb(13,"th"),a.vc(14,"Acciones"),a.Rb(),a.Rb(),a.Rb(),a.Sb(15,"tbody"),a.uc(16,p,12,5,"tr",1),a.Rb(),a.Rb()),2&t&&(a.Bb(16),a.gc("ngForOf",n.allSanctions))},directives:[o.i],styles:["@font-face{font-family:univia;src:url(UniviaPro-Regular.bf2d8fa8139d44006a37.otf)}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:univia,Verdana,Geneva,Tahoma,sans-serif}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}li[_ngcontent-%COMP%]{list-style:none}.responsive-image[_ngcontent-%COMP%]{max-width:100%}.flex-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;flex-wrap:wrap}.title[_ngcontent-%COMP%]{color:#009a3f;font-size:25px}.subtitle[_ngcontent-%COMP%]{color:#009a3f;font-size:22px;margin:20px 0}table[_ngcontent-%COMP%]{width:100%}.content-table[_ngcontent-%COMP%]{border-collapse:collapse;font-size:.9em;min-width:100%;border-radius:5px 5px 0 0;overflow:hidden}tr[_ngcontent-%COMP%]{height:45px;text-align:left}.content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-top:1px solid #9d9d9c}.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .content-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #9d9d9c}.content-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{font-size:15px}"]}),t})();const f=[{path:"",component:(()=>{class t{constructor(){this.grafico="assets/img/Group 222.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-view-table"]],decls:51,vars:0,consts:[[1,"main-content"],[1,"initial-information"],[1,"flex-container"],[1,"title"],["routerLink","/new-report","mat-raised-button","","color","accent"],[1,"grafico"],[1,"interactions-search"],[1,"search-bar"],["type","text","name","","id","search-bar-input","placeholder","Ingresa el c\xf3digo o nombre del colaborador"],[1,"button-search"],[1,"fas","fa-search"],[1,"incidents-section-filter"],[1,"filter"],["name","","id",""],["value","Tipo"],["value",""],["value","Estado"],["value","pendiente"],["value","cerrado"],[1,"incidents-section-table"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"h1",3),a.vc(4,"Historial de incidencias"),a.Rb(),a.Sb(5,"button",4),a.vc(6,"Nueva Incidencia"),a.Rb(),a.Rb(),a.Sb(7,"div",2),a.Nb(8,"app-chart2",5),a.Nb(9,"app-chart",5),a.Rb(),a.Sb(10,"div",6),a.Sb(11,"div",7),a.Nb(12,"input",8),a.Sb(13,"button",9),a.Nb(14,"i",10),a.vc(15," buscar"),a.Rb(),a.Rb(),a.Sb(16,"div",11),a.Sb(17,"div",12),a.Sb(18,"p"),a.vc(19,"filtrar por:"),a.Rb(),a.Sb(20,"select",13),a.Sb(21,"option",14),a.vc(22,"Tipo de incidencia"),a.Rb(),a.Sb(23,"option",15),a.vc(24,"ausentismo"),a.Rb(),a.Sb(25,"option",15),a.vc(26,"tardanzas"),a.Rb(),a.Sb(27,"option",15),a.vc(28,"abandonos"),a.Rb(),a.Sb(29,"option",15),a.vc(30,"trabajo mal realizado"),a.Rb(),a.Sb(31,"option",15),a.vc(32,"Seguridad y Salud"),a.Rb(),a.Sb(33,"option",15),a.vc(34,"desobediencia"),a.Rb(),a.Sb(35,"option",15),a.vc(36,"otros"),a.Rb(),a.Sb(37,"option",15),a.vc(38,"falta de respeto"),a.Rb(),a.Sb(39,"option",15),a.vc(40,"incumplimiento de capacitaciones"),a.Rb(),a.Rb(),a.Sb(41,"select",13),a.Sb(42,"option",16),a.vc(43,"Estado"),a.Rb(),a.Sb(44,"option",17),a.vc(45,"Pendiente"),a.Rb(),a.Sb(46,"option",18),a.vc(47,"Cerrado"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(48,"div",19),a.Sb(49,"div"),a.Nb(50,"app-table"),a.Rb(),a.Rb(),a.Rb())},directives:[c.a,i.b,l,d,h],styles:["@font-face{font-family:univia;src:url(UniviaPro-Regular.bf2d8fa8139d44006a37.otf)}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:univia,Verdana,Geneva,Tahoma,sans-serif}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}li[_ngcontent-%COMP%]{list-style:none}.responsive-image[_ngcontent-%COMP%]{max-width:100%}.flex-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;flex-wrap:wrap}.title[_ngcontent-%COMP%]{color:#009a3f;font-size:25px}.subtitle[_ngcontent-%COMP%]{color:#009a3f;font-size:22px;margin:20px 0}.main-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:30px;padding:5px 10px}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .grafico[_ngcontent-%COMP%]{width:50%}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]{display:flex}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{background:#fff;height:80%;align-self:center;margin-right:5%;border:1px solid #9d9d9c;border-radius:4px;width:45%;display:flex;justify-content:space-between}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;padding:5px 10px;width:100%}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .button-search[_ngcontent-%COMP%]{height:34px;width:30%;background:#009a3f;border:1px solid #9d9d9c;box-sizing:border-box;border-radius:0 4px 4px 0;color:#fff}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .incidents-section-filter[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .incidents-section-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;margin-top:2.5%;align-items:center}.main-content[_ngcontent-%COMP%]   .initial-information[_ngcontent-%COMP%]   .interactions-search[_ngcontent-%COMP%]   .incidents-section-filter[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:36px;margin-left:5%}.main-content[_ngcontent-%COMP%]   .incidents-section-table[_ngcontent-%COMP%]{margin-top:5%}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[i.d.forChild(f)],i.d]}),t})();var u=e("hctd"),O=e("PCNd");let P=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[o.b,C,u.a,O.a]]}),t})()}}]);