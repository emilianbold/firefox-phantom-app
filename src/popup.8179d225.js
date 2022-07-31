(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=t.parcelRequirea886;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},t.parcelRequirea886=i),i.register("iiHYL",(function(n,t){e(n.exports,"SkeletonLoader",(function(){return s}));var r=i("cuInp"),a=i("5BN27");function u(){var e=r.taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n"]);return u=function(){return e},e}function o(){var e=r.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  width: ",";\n  height: ",";\n  margin: ",";\n  padding: ",";\n  border-radius: ",";\n  background-color: ",";\n  animation: "," 2s ease-in-out infinite;\n"]);return o=function(){return e},e}var l,c,f=a.keyframes(l||(l=u())),s=a.default.div(c||(c=o()),(function(e){return e.flexDirection}),(function(e){return e.align}),(function(e){return e.justify}),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.margin}),(function(e){return e.padding}),(function(e){return e.borderRadius}),(function(e){return e.backgroundColor}),f)})),i.register("3bbo3",(function(t,r){e(t.exports,"shouldRenderWhatsNewOverlay",(function(){return j}),(function(e){return j=e})),e(t.exports,"acknowledgeWhatsNewOverlay",(function(){return z}),(function(e){return z=e})),e(t.exports,"WhatsNewOverlay",(function(){return P}),(function(e){return P=e}));var a=i("cuInp"),u=i("1vgyn"),o=i("yrqZm"),l=i("5BN27"),c=i("eNGT7"),f=i("giooG"),s=i("8fnAG"),d=i("6AaHU"),g=i("7Z3sw"),p=i("dYr9l"),m=i("hZbar");function v(){var e=a.taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  padding: 20px;\n"]);return v=function(){return e},e}function h(){var e=a.taggedTemplateLiteral(["\n  flex: 1;\n"]);return h=function(){return e},e}function x(){var e=a.taggedTemplateLiteral(["\n  margin-top: 40px;\n  align-self: center;\n  width: 76px;\n  height: 35px;\n  background-color: rgba(138, 129, 248, 0.1);\n  border-radius: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return x=function(){return e},e}function w(){var e=a.taggedTemplateLiteral(["\n  align-self: center;\n  margin-top: 22px;\n  line-height: 34px;\n  max-width: 275px;\n  text-align: center;\n"]);return w=function(){return e},e}function y(){var e=a.taggedTemplateLiteral(["\n  align-self: center;\n  margin-top: 22px;\n  max-width: 275px;\n  text-align: center;\n  span {\n    color: white;\n  }\n"]);return y=function(){return e},e}function b(){var e=a.taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-top: 22px;\n"]);return b=function(){return e},e}function T(){var e=a.taggedTemplateLiteral(["\n  margin-top: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 22px;\n\n  canvas {\n    border: 8px solid white;\n    border-radius: 10px;\n  }\n"]);return T=function(){return e},e}function E(){var e=a.taggedTemplateLiteral([""]);return E=function(){return e},e}var N,L,O,A,k,S,C,_,W=function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,o)}l((r=r.apply(e,n||[])).next())}))},j=function(){return W(void 0,void 0,void 0,n(u).mark((function e(){var t;return n(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getStorageValue(f.StorageKeys.LastSeenWhatsNewId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=0;case 5:return t=e.t0,e.abrupt("return",31>t);case 7:case"end":return e.stop()}}),e)})))},z=function(){s.setStorageValue(f.StorageKeys.LastSeenWhatsNewId,31)},P=function(e){var t=e.onClose,r=c.useTranslation().t,i=a.slicedToArray(o.useState(!1),2),u=i[0],l=i[1];return u?n(o).createElement(B,null,n(o).createElement(M,null,n(o).createElement(n(p),{size:190,value:m.PHANTOM_MOBILE_APP_DOWNLOAD_URL})),n(o).createElement(F,null,r("whatsNewOverlayv1ScanWithCamera")),n(o).createElement(D,null),n(o).createElement(U,null,n(o).createElement(q,{onClick:t}))):n(o).createElement(B,null,n(o).createElement(I,null,n(o).createElement(g.Text,{color:"#8A81F8",size:16,weight:600},r("whatsNewOverlayNew"))),n(o).createElement(R,null,r("whatsNewOverlayv1PrimaryText")),n(o).createElement(F,null,r("whatsNewOverlayv1SecondaryText")),n(o).createElement(G,{color:"#8A81F8",size:16,weight:500,onClick:function(){l(!0)}},r("whatsNewOverlayv1ActionGetAppNow")),n(o).createElement(D,null),n(o).createElement(U,null,n(o).createElement(q,{onClick:t})))},B=l.default.div(N||(N=v())),D=l.default.div(L||(L=h())),I=l.default.div(O||(O=x())),R=l.default(g.Text).attrs({size:28,weight:500})(A||(A=w())),F=l.default(g.Text).attrs({size:16,color:"#777"})(k||(k=y())),G=l.default(g.Text).attrs({color:"#8A81F8",size:16,weight:500})(S||(S=b())),M=l.default.div(C||(C=T())),U=l.default.div(_||(_=E())),q=function(e){var t=c.useTranslation().t;return n(o).createElement(d.Button,Object.assign({type:"button",theme:"default"},e),t("whatsNewOverlayActionButtonClose"))}}))}();define=__define;})(window.define);