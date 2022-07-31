(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function n(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=t.parcelRequirea886;null==a&&((a=function(n){if(n in r)return r[n].exports;if(n in i){var e=i[n];delete i[n];var t={id:n,exports:{}};return r[n]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){i[n]=e},t.parcelRequirea886=a),a.register("iiHYL",(function(e,t){n(e.exports,"SkeletonLoader",(function(){return s}));var r=a("cuInp"),i=a("5BN27");function o(){var n=r.taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return o=function(){return n},n}function u(){var n=r.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  width: ",";\n  height: ",";\n  margin: ",";\n  padding: ",";\n  border-radius: ",";\n  background-color: ",";\n  animation: "," 2s ease-in-out infinite;\n"]);return u=function(){return n},n}var l,c,f=i.keyframes(l||(l=o())),s=i.default.div(c||(c=u()),(function(n){return n.flexDirection}),(function(n){return n.align}),(function(n){return n.justify}),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.margin}),(function(n){return n.padding}),(function(n){return n.borderRadius}),(function(n){return n.backgroundColor}),f)})),a.register("3bbo3",(function(t,r){n(t.exports,"shouldRenderWhatsNewOverlay",(function(){return j}),(function(n){return j=n})),n(t.exports,"acknowledgeWhatsNewOverlay",(function(){return z}),(function(n){return z=n})),n(t.exports,"WhatsNewOverlay",(function(){return B}),(function(n){return B=n}));var i=a("cuInp"),o=a("1vgyn"),u=a("yrqZm"),l=a("5BN27"),c=a("eNGT7"),f=a("giooG"),s=a("8fnAG"),d=a("6AaHU"),g=a("7Z3sw"),p=a("k4gOl"),v=a("226dB");function h(){var n=i.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  padding: 20px;\n"]);return h=function(){return n},n}function w(){var n=i.taggedTemplateLiteral(["\n  flex: 1;\n"]);return w=function(){return n},n}function x(){var n=i.taggedTemplateLiteral(["\n  margin-top: 40px;\n  align-self: center;\n  width: 76px;\n  height: 35px;\n  background-color: rgba(138, 129, 248, 0.1);\n  border-radius: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return x=function(){return n},n}function m(){var n=i.taggedTemplateLiteral(["\n  align-self: center;\n  margin-top: 22px;\n  line-height: 34px;\n  max-width: 275px;\n  text-align: center;\n"]);return m=function(){return n},n}function y(){var n=i.taggedTemplateLiteral(["\n  align-self: center;\n  margin-top: 22px;\n  max-width: 275px;\n  text-align: center;\n  span {\n    color: white;\n  }\n"]);return y=function(){return n},n}function b(){var n=i.taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-top: 22px;\n"]);return b=function(){return n},n}function T(){var n=i.taggedTemplateLiteral([""]);return T=function(){return n},n}var N,L,O,E,k,A,S,C=function(n,e,t,r){return new(t||(t=Promise))((function(i,a){function o(n){try{l(r.next(n))}catch(n){a(n)}}function u(n){try{l(r.throw(n))}catch(n){a(n)}}function l(n){var e;n.done?i(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(o,u)}l((r=r.apply(n,e||[])).next())}))},j=function(){return C(void 0,void 0,void 0,e(o).mark((function n(){var t;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.getStorageValue(f.StorageKeys.LastSeenWhatsNewId);case 2:if(n.t0=n.sent,n.t0){n.next=5;break}n.t0=0;case 5:return t=n.t0,n.abrupt("return",35>t);case 7:case"end":return n.stop()}}),n)})))},z=function(){s.setStorageValue(f.StorageKeys.LastSeenWhatsNewId,35)},B=function(n){var t=n.onClose,r=c.useTranslation().t,i=p.useHistory();return e(u).createElement(I,null,e(u).createElement(F,null,e(u).createElement(g.Text,{color:"#8A81F8",size:16,weight:600},r("whatsNewOverlayNew"))),e(u).createElement(R,null,r("whatsNewOverlayv2ActionListOnME")),e(u).createElement(_,null,r("whatsNewOverlayv2SecondaryText")),e(u).createElement(q,{color:"#8A81F8",size:16,weight:500,onClick:function(){return C(void 0,void 0,void 0,e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(),i.push(v.Path.Collectibles);case 2:case"end":return n.stop()}}),n)})))}},r("whatsNewOverlayv2ActionTryItNow")),e(u).createElement(W,null),e(u).createElement(D,null,e(u).createElement(G,{onClick:t})))},I=l.default.div(N||(N=h())),W=l.default.div(L||(L=w())),F=l.default.div(O||(O=x())),R=l.default(g.Text).attrs({size:28,weight:500})(E||(E=m())),_=l.default(g.Text).attrs({size:16,color:"#777"})(k||(k=y())),q=l.default(g.Text).attrs({color:"#8A81F8",size:16,weight:500})(A||(A=b())),D=l.default.div(S||(S=T())),G=function(n){var t=c.useTranslation().t;return e(u).createElement(d.Button,Object.assign({type:"button",theme:"default"},n),t("whatsNewOverlayActionButtonClose"))}}))}();define=__define;})(window.define);