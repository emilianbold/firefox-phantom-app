(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=n.parcelRequirea886;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},n.parcelRequirea886=l),l.register("cqRHn",(function(n,r){t(n.exports,"shouldRenderWhatsNewOverlay",(function(){return h}),(function(e){return h=e})),t(n.exports,"acknowledgeWhatsNewOverlay",(function(){return w}),(function(e){return w=e})),t(n.exports,"WhatsNewOverlay",(function(){return x}),(function(e){return x=e}));var a=l("aZikt"),i=l("hHMPk"),o=l("7Qmuu"),u=l("1XmKR"),c=l("czDD7"),s=l("aADTv"),d=l("g7X40"),f=l("dtSLt"),p=l("6oEu9"),g=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function i(e){try{u(r.next(e))}catch(e){l(e)}}function o(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((r=r.apply(e,t||[])).next())}))};const h=()=>g(void 0,void 0,void 0,(function*(){return 31>((yield c.getStorageValue(u.StorageKeys.LastSeenWhatsNewId))||0)})),w=()=>{c.setStorageValue(u.StorageKeys.LastSeenWhatsNewId,31)},x=({onClose:t})=>{const{t:n}=o.useTranslation(),[r,l]=a.useState(!1);return r?e(a).createElement(m,null,e(a).createElement(b,null,e(a).createElement(e(f),{size:190,value:p.PHANTOM_MOBILE_APP_DOWNLOAD_URL})),e(a).createElement(O,null,n("whatsNewOverlayv1ScanWithCamera")),e(a).createElement(v,null),e(a).createElement(T,null,e(a).createElement(A,{onClick:t}))):e(a).createElement(m,null,e(a).createElement(y,null,e(a).createElement(d.Text,{color:"#8A81F8",size:16,weight:600},n("whatsNewOverlayNew"))),e(a).createElement(E,null,n("whatsNewOverlayv1PrimaryText")),e(a).createElement(O,null,n("whatsNewOverlayv1SecondaryText")),e(a).createElement(N,{color:"#8A81F8",size:16,weight:500,onClick:()=>{l(!0)}},n("whatsNewOverlayv1ActionGetAppNow")),e(a).createElement(v,null),e(a).createElement(T,null,e(a).createElement(A,{onClick:t})))},m=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,v=i.default.div`
  flex: 1;
`,y=i.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,E=i.default(d.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,O=i.default(d.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,N=i.default(d.Text).attrs({color:"#8A81F8",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,b=i.default.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;

  canvas {
    border: 8px solid white;
    border-radius: 10px;
  }
`,T=i.default.div``,A=t=>{const{t:n}=o.useTranslation();return e(a).createElement(s.Button,Object.assign({type:"button",theme:"default"},t),n("whatsNewOverlayActionButtonClose"))}}));define=__define;})(window.define);