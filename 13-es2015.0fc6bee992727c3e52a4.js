(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hNFR:function(r,e,t){"use strict";t.r(e),t.d(e,"HandleErrorModule",(function(){return v}));var c=t("ofXK"),n=t("tyNb"),o=t("fXoL"),s=t("pb27");let i=(()=>{class r{constructor(r){this.baseService=r}handleErrorMethod(r){return this.baseService.get(`/fail${r}`)}}return r.\u0275fac=function(e){return new(e||r)(o.dc(s.a))},r.\u0275prov=o.Pb({token:r,factory:r.\u0275fac}),r})();var a=t("yFe8"),u=t("OzZK"),b=t("RwU8"),l=t("C2AL"),h=t("sYmb");const d=[{path:"",component:(()=>{class r{constructor(r,e){this.handleService=r,this.cookieService=e}ngOnInit(){}errorRequest(r){this.handleService.handleErrorMethod(r).subscribe(r=>{console.log(r)},r=>{console.error(r)})}}return r.\u0275fac=function(e){return new(e||r)(o.Tb(i),o.Tb(a.a))},r.\u0275cmp=o.Nb({type:r,selectors:[["app-handle-error"]],decls:15,vars:12,consts:[["nz-button","",3,"click"]],template:function(r,e){1&r&&(o.Zb(0,"div"),o.Zb(1,"button",0),o.hc("click",(function(){return e.errorRequest(401)})),o.Mc(2),o.lc(3,"translate"),o.Yb(),o.Zb(4,"button",0),o.hc("click",(function(){return e.errorRequest(403)})),o.Mc(5),o.lc(6,"translate"),o.Yb(),o.Zb(7,"button",0),o.hc("click",(function(){return e.errorRequest(404)})),o.Mc(8),o.lc(9,"translate"),o.Yb(),o.Zb(10,"button",0),o.hc("click",(function(){return e.errorRequest(500)})),o.Mc(11),o.lc(12,"translate"),o.Yb(),o.Zb(13,"h2"),o.Mc(14,"\u53ef\u5728\u63a7\u5236\u53f0console\u754c\u9762\u67e5\u770b\u6a21\u62df\u8bf7\u6c42"),o.Yb(),o.Yb()),2&r&&(o.Db(2),o.Nc(o.mc(3,4,"\u672a\u767b\u5f55")),o.Db(3),o.Nc(o.mc(6,6,"\u8bf7\u6c42\u62d2\u7edd")),o.Db(3),o.Nc(o.mc(9,8,"404\u8bf7\u6c42")),o.Db(3),o.Nc(o.mc(12,10,"\u670d\u52a1\u5668\u9519\u8bef")))},directives:[u.a,b.a,l.a],pipes:[h.d],styles:[""]}),r})()}];let f=(()=>{class r{}return r.\u0275mod=o.Rb({type:r}),r.\u0275inj=o.Qb({factory:function(e){return new(e||r)},imports:[[n.h.forChild(d)],n.h]}),r})();var p=t("ADsi");let v=(()=>{class r{}return r.\u0275mod=o.Rb({type:r}),r.\u0275inj=o.Qb({factory:function(e){return new(e||r)},providers:[i],imports:[[c.c,p.a,f]]}),r})()}}]);