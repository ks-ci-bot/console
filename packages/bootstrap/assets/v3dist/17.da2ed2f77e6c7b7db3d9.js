(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{5756:function(e,t,r){"use strict";var n=r(20);r(12),r(5),r(11),r(31),r(6),r(18),r(9),r(13),r(10),r(4),r(23),r(17),r(7),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(r(43));r(41);var o=n(r(44)),i=n(r(65)),u=n(r(36)),a=n(r(37)),s=n(r(88)),l=n(r(55)),f=n(r(56)),p=n(r(51)),d=n(r(49));n(r(66));r(12),r(45),r(5),r(11),r(31),r(6),r(18),r(28),r(42),r(34),r(15),r(9),r(13),r(10),r(4),r(22),r(23),r(57),r(17),r(7);var y,v,h=n(r(30)),b=r(14);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.default)(e);if(t){var c=(0,p.default)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e){var t,r=null==e?void 0:e.extension,n="No violation"===(null==e||null===(t=e.violation)||void 0===t?void 0:t.type);return g(g({},e),{},{extensionName:r,isAuthorized:n})}var m=(y=function(e){(0,l.default)(f,e);var t,r,n=O(f);function f(){var e;(0,u.default)(this,f);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).module="licenses",(0,i.default)(e,"licenses",v,(0,s.default)(e)),e}return(0,a.default)(f,[{key:"getUrl",value:function(e){var t=e.path;return"".concat(this.apiVersion,"/").concat(t)}},{key:"fetchLicenses",value:(r=(0,o.default)(c.default.mark((function e(){var t,r,n,o;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request.get(this.getUrl({path:"licenses"}),{},{},(function(){return{}}));case 2:return r=e.sent,n=null!==(t=null==r?void 0:r.items)&&void 0!==t?t:[],o=n.map(j),e.abrupt("return",(0,b.toJS)({licenses:o}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"fetchLicenseByLicenses",value:(t=(0,o.default)(c.default.mark((function e(t){var r,n,o,i,u;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.extensionName,e.next=3,this.fetchLicenses();case 3:return o=e.sent,i=null!==(r=null==o?void 0:o.licenses)&&void 0!==r?r:[],u=i.find((function(e){return e.extensionName===n})),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),f}(n(r(68)).default),v=(0,d.default)(y.prototype,"licenses",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),(0,d.default)(y.prototype,"fetchLicenses",[b.action],Object.getOwnPropertyDescriptor(y.prototype,"fetchLicenses"),y.prototype),(0,d.default)(y.prototype,"fetchLicenseByLicenses",[b.action],Object.getOwnPropertyDescriptor(y.prototype,"fetchLicenseByLicenses"),y.prototype),y);t.default=m}}]);