(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0tEG":function(t,n,r){"use strict";r.r(n),r.d(n,"PrintModule",(function(){return m}));var c=r("ofXK"),e=r("tyNb"),i=r("fXoL"),s=r("jhN1"),a=r("OzZK"),u=r("RwU8"),o=r("C2AL"),f=r("sYmb");function p(t,n){if(1&t){const t=i.ac();i.Zb(0,"button",4),i.hc("click",(function(){return i.Cc(t),i.kc().prePDF()})),i.Mc(1),i.lc(2,"translate"),i.Yb()}2&t&&(i.Db(1),i.Oc("",i.mc(2,1,"\u4e0a\u4e00\u5f20")," "))}function b(t,n){if(1&t){const t=i.ac();i.Zb(0,"button",5),i.hc("click",(function(){return i.Cc(t),i.kc().nextPDF()})),i.Mc(1),i.lc(2,"translate"),i.Yb()}2&t&&(i.Db(1),i.Oc("",i.mc(2,1,"\u4e0b\u4e00\u5f20")," "))}const d=[{path:"",component:(()=>{class t{constructor(t){this.sanitizer=t,this.currentPdfIndex=1,this.pdfMap={1:"Agatsuma Zenitsu.pdf",2:"Shinazugawa Sanemi.pdf",3:"Tomioka Giyuu.pdf"},this.iframeSrc="assets/img/Agatsuma Zenitsu.pdf"}ngOnInit(){this.safeUrl()}nextPDF(){this.currentPdfIndex++,this.safeUrl()}prePDF(){this.currentPdfIndex--,this.safeUrl()}safeUrl(){this.iframeSrc=this.sanitizer.bypassSecurityTrustResourceUrl(`assets/img/${this.pdfMap[this.currentPdfIndex]}`)}}return t.\u0275fac=function(n){return new(n||t)(i.Tb(s.b))},t.\u0275cmp=i.Nb({type:t,selectors:[["app-print"]],decls:5,vars:3,consts:[[2,"text-align","center","height","100%"],["nz-button","","nzType","primary","style","margin-right: 100px;",3,"click",4,"ngIf"],["nz-button","","nzType","primary",3,"click",4,"ngIf"],["frameborder","0",2,"width","70%","height","90%",3,"src"],["nz-button","","nzType","primary",2,"margin-right","100px",3,"click"],["nz-button","","nzType","primary",3,"click"]],template:function(t,n){1&t&&(i.Zb(0,"div",0),i.Zb(1,"div"),i.Kc(2,p,3,3,"button",1),i.Kc(3,b,3,3,"button",2),i.Yb(),i.Ub(4,"iframe",3),i.Yb()),2&t&&(i.Db(2),i.sc("ngIf",1!==n.currentPdfIndex),i.Db(1),i.sc("ngIf",3!==n.currentPdfIndex),i.Db(1),i.sc("src",n.iframeSrc,i.Ec))},directives:[c.l,a.a,u.a,o.a],pipes:[f.d],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=i.Rb({type:t}),t.\u0275inj=i.Qb({factory:function(n){return new(n||t)},imports:[[e.h.forChild(d)],e.h]}),t})();var l=r("ADsi");let m=(()=>{class t{}return t.\u0275mod=i.Rb({type:t}),t.\u0275inj=i.Qb({factory:function(n){return new(n||t)},imports:[[c.c,l.a,h]]}),t})()}}]);